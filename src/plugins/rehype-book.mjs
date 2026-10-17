// rehype plugin: reshapes a book summary's HTML into the 365 Books design.
// It runs at build time, after the markdown has become an HTML tree (hast).
//
// - Splits the body into <section>s at each "## " heading and numbers them "01 / Title".
// - Drops "At a glance" and "How this summary was made"; the book page shows those
//   in its own header and disclosure box instead.
// - Key concepts: "### 1. Title · Transcends" becomes a concept row with a tag chip,
//   and the "*Why it ...:*" paragraph becomes the "> why" line.
// - The AI-era lens gets a surface panel and the "AI analysis" badge.
// - Apply it with AI: each "### " + ```text block becomes a prompt block with a
//   Copy button (the client script lives in the book page).
// - How it made the list: the persona table becomes the persona scorecard.

const HIDDEN = new Set(['at a glance', 'how this summary was made']);
const KINDS = {
  'key concepts': 'concepts',
  'the ai-era lens': 'lens',
  'apply it with ai': 'prompts',
  'how it made the list': 'scorecard',
};

// ---- tiny hast helpers ----
const h = (tagName, properties = {}, children = []) => ({
  type: 'element',
  tagName,
  properties,
  children: children.map((c) => (typeof c === 'string' ? { type: 'text', value: c } : c)),
});
const isEl = (n, tag) => n && n.type === 'element' && (!tag || n.tagName === tag);
const isBlank = (n) => n.type === 'text' && !n.value.trim();
const text = (n) =>
  n.type === 'text' ? n.value : n.children ? n.children.map(text).join('') : '';
const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Splits a list of nodes into groups that each start with a heading of `tag`.
function splitAt(nodes, tag) {
  const intro = [];
  const groups = [];
  for (const n of nodes) {
    if (isEl(n, tag)) groups.push({ heading: n, title: text(n).trim(), body: [] });
    else (groups.length ? groups[groups.length - 1].body : intro).push(n);
  }
  return { intro, groups };
}

// ---- Key concepts ----
const CONCEPT_RE = /^(\d+)\.\s*(.+?)\s*·\s*(Transcends|Evolves|Expires)\s*$/i;

function tagChip(verdict) {
  const v = verdict.toLowerCase();
  return h('span', { className: ['tag', `tag--${v}`] }, [v[0].toUpperCase() + v.slice(1)]);
}

function isWhyParagraph(n) {
  if (!isEl(n, 'p')) return false;
  const first = n.children.find((c) => !isBlank(c));
  return isEl(first, 'em') && /^why it /i.test(text(first).trim());
}

function conceptRows(nodes) {
  const { intro, groups } = splitAt(nodes, 'h3');
  const rows = groups.map(({ heading, title, body }) => {
    const m = title.match(CONCEPT_RE);
    if (!m) return [heading, ...body];
    const [, num, name, verdict] = m;
    const v = verdict.toLowerCase();
    const main = body.map((n) => {
      if (!isWhyParagraph(n)) return n;
      n.properties.className = ['concept__why'];
      n.children.unshift(h('span', { className: ['concept__arrow'], ariaHidden: 'true' }, ['>']), {
        type: 'text',
        value: ' ',
      });
      return n;
    });
    return h('article', { className: ['concept', `concept--${v}`] }, [
      h('div', { className: ['concept__num'], ariaHidden: 'true' }, [`${num}.0`]),
      h('div', { className: ['concept__main'] }, [
        h('h3', { className: ['concept__title'], id: slugify(name) }, [
          h('span', { className: ['visually-hidden'] }, [`${num}. `]),
          name,
          ' ',
          tagChip(v),
        ]),
        ...main,
      ]),
    ]);
  });
  return [...intro, ...rows.flat()];
}

// Any other heading ending in "· Transcends" etc. still gets a chip.
function chipifyHeadings(nodes) {
  for (const n of nodes) {
    if (!isEl(n) || !/^h[3-6]$/.test(n.tagName)) continue;
    const last = n.children[n.children.length - 1];
    if (!last || last.type !== 'text') continue;
    const m = last.value.match(/\s*·\s*(Transcends|Evolves|Expires)\s*$/i);
    if (!m) continue;
    last.value = last.value.slice(0, m.index) + ' ';
    n.children.push(tagChip(m[1]));
  }
  return nodes;
}

// ---- AI-era lens ----
function lensBody(nodes) {
  const body = nodes.map((n) => {
    if (isEl(n, 'p') && /^ai analysis$/i.test(text(n).trim())) {
      return h('p', { className: ['lens__badge'] }, [h('span', { className: ['ai-badge'] }, ['AI analysis'])]);
    }
    return n;
  });
  return [h('div', { className: ['panel', 'lens'] }, body)];
}

// ---- Apply it with AI ----
let promptCounter = 0;

function promptBlocks(nodes) {
  const { intro, groups } = splitAt(nodes, 'h3');
  let n = 0;
  const blocks = groups.map(({ title, body }, i) => {
    const pre = body.find((c) => isEl(c, 'pre'));
    if (!pre) return h('div', {}, [h('h3', {}, [title]), ...body]);
    const isStarter = /project starter/i.test(title);
    const label = isStarter ? '▶' : String(++n).padStart(2, '0');
    const cleanTitle = title.replace(/^\d+\.\s*/, '');
    const id = `prompt-${++promptCounter}`;
    const open = i === 0;
    pre.properties.className = ['prompt__text'];
    pre.properties.id = `${id}-text`;
    return h('div', { className: ['prompt', isStarter ? 'prompt--starter' : 'prompt--item'] }, [
      h('div', { className: ['prompt__head'] }, [
        h('h3', { className: ['prompt__heading'] }, [
          h(
            'button',
            {
              type: 'button',
              className: ['prompt__toggle'],
              ariaExpanded: open ? 'true' : 'false',
              ariaControls: id,
            },
            [
              h('span', { className: ['prompt__num'] }, [label]),
              h('span', { className: ['prompt__title'] }, [cleanTitle]),
            ],
          ),
        ]),
        h('button', { type: 'button', className: ['btn', 'prompt__copy'], dataCopy: `${id}-text` }, [
          'Copy prompt',
        ]),
      ]),
      h('div', { className: ['prompt__body'], id, hidden: !open }, body.map((c) => {
        if (isEl(c, 'p')) c.properties.className = ['prompt__desc'];
        return c;
      })),
    ]);
  });
  return [...intro, h('div', { className: ['prompts'] }, blocks)];
}

// ---- How it made the list ----
function scorecard(nodes) {
  const table = nodes.find((n) => isEl(n, 'table'));
  if (!table) return nodes;
  const tbody = table.children.find((c) => isEl(c, 'tbody'));
  const rows = (tbody ? tbody.children : []).filter((c) => isEl(c, 'tr'));
  const personas = rows.map((tr) => tr.children.filter((c) => isEl(c, 'td')).map((td) => text(td).trim()));
  if (!personas.length || personas.some((p) => p.length !== 3 || Number.isNaN(Number(p[1])))) {
    table.properties.className = ['b-table'];
    return nodes;
  }
  const grid = h(
    'div',
    { className: ['scorecard'] },
    personas.map(([name, score, take]) => {
      const s = Math.round(Number(score));
      return h('div', { className: ['persona'] }, [
        h('div', { className: ['persona__head'] }, [
          h('span', { className: ['persona__name'] }, [name]),
          h('span', { className: ['persona__score'] }, [`${score}/5`]),
        ]),
        h(
          'div',
          { className: ['persona__bar'], role: 'img', ariaLabel: `${score} out of 5` },
          [1, 2, 3, 4, 5].map((i) => h('span', { className: i <= s ? ['on'] : [] })),
        ),
        h('p', { className: ['persona__take'] }, [take]),
      ]);
    }),
  );

  const rest = nodes.filter((n) => n !== table).map((n) => {
    // "**Final score 4.87** (rubric 4.90, panel 4.83), ranked 1st..." becomes a
    // mono summary line plus a normal paragraph for the story.
    if (!isEl(n, 'p') || !/^final score/i.test(text(n).trim())) return n;
    const full = text(n).trim();
    const m = full.match(/^(Final score [\d.]+\s*\([^)]*\))[.,]?\s*(.*)$/is);
    if (!m) return h('p', { className: ['scorecard__summary'] }, [full]);
    const story = m[2] ? m[2][0].toUpperCase() + m[2].slice(1) : '';
    return [
      h('p', { className: ['scorecard__summary'] }, [m[1]]),
      ...(story ? [h('p', {}, [story])] : []),
    ];
  });
  return [grid, ...rest.flat()];
}

// ---- Template checks (planning/summary-template.md) ----
// The schema in content.config.ts can only see front matter. These rules need
// the body too, so they live here and fail the build with a clear message.
const REQUIRED_SECTIONS = [
  'At a glance',
  'The big idea',
  'Key concepts',
  'The AI-era lens',
  'Apply it with AI',
  'Critiques and caveats',
  'Read it or skip it',
  'Related books',
  'How this summary was made',
  'How it made the list',
];

function checkBook(groups, frontmatter, file) {
  const name = file.path || file.history?.[0] || 'a book file';
  const fail = (msg) => {
    throw new Error(`${name}: ${msg}`);
  };
  const titles = groups.map((g) => g.title.toLowerCase());
  const missing = REQUIRED_SECTIONS.filter((s) => !titles.includes(s.toLowerCase()));
  if (missing.length) fail(`missing section(s): ${missing.map((s) => `"## ${s}"`).join(', ')}`);

  const concepts = groups.find((g) => g.title.toLowerCase() === 'key concepts');
  const counts = { transcends: 0, evolves: 0, expires: 0 };
  for (const n of concepts.body) {
    if (!isEl(n, 'h3')) continue;
    const m = text(n).trim().match(CONCEPT_RE);
    if (!m) fail(`key concept heading "${text(n).trim()}" must look like "### 1. Name · Transcends"`);
    counts[m[3].toLowerCase()]++;
  }
  const total = counts.transcends + counts.evolves + counts.expires;
  if (total < 5 || total > 7) fail(`has ${total} key concepts; the template asks for 5 to 7`);

  const tags = frontmatter.tags;
  const fmt = (t) => `transcends ${t.transcends}, evolves ${t.evolves}, expires ${t.expires}`;
  if (Object.keys(counts).some((k) => counts[k] !== tags[k])) {
    fail(`front matter tags (${fmt(tags)}) don't match the key concept headings (${fmt(counts)})`);
  }
}

export default function rehypeBook() {
  return (tree, file) => {
    promptCounter = 0;
    const nodes = tree.children.filter((n) => !isBlank(n));
    const { intro, groups } = splitAt(nodes, 'h2');
    if (!groups.length) return;

    // Only book files carry tags in their front matter.
    const frontmatter = file.data?.astro?.frontmatter;
    if (frontmatter?.tags) checkBook(groups, frontmatter, file);

    const out = [...intro];
    let num = 0;
    for (const { title, body } of groups) {
      const key = title.toLowerCase();
      if (HIDDEN.has(key)) continue;
      const kind = KINDS[key] || 'prose';
      const id = slugify(title);
      const label = String(++num).padStart(2, '0');

      // Concept rows read the "· Transcends" suffix, so they run before chipifyHeadings.
      let content = kind === 'concepts' ? conceptRows(body) : body;
      content = chipifyHeadings(content);
      if (kind === 'lens') content = lensBody(content);
      if (kind === 'prompts') content = promptBlocks(content);
      if (kind === 'scorecard') content = scorecard(content);
      for (const n of content) if (isEl(n, 'table')) n.properties.className = ['b-table'];

      out.push(
        h('section', { className: ['b-section', `b-section--${kind}`], ariaLabelledby: id }, [
          h('h2', { className: ['section-header'], id }, [
            h('span', { className: ['section-header__num'] }, [label]),
            ` / ${title}`,
          ]),
          ...content,
        ]),
      );
    }
    tree.children = out;
  };
}
