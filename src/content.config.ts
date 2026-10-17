// Content collections: Astro reads every book file, checks its front matter
// against the schema below, and fails the build if anything doesn't match.
// Follows 00_context/2026-10-16_365books_summary-template_v02.md. Rules that
// need the body (tag counts vs. headings, required sections) are checked in
// src/plugins/rehype-book.mjs.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import themes from './data/themes.json';

const themeSlugs = themes.map((t) => t.slug) as [string, ...string[]];

const count = z.number().int().min(0);
const persona = z.number().int().min(1).max(5);
const score = z.number().min(1).max(5);

const books = defineCollection({
  // Each file in src/content/books/ is one book; the file name is its slug.
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  // strictObject also rejects unknown keys, so a typo like "joe_raiting" fails the build.
  schema: z.strictObject({
    title: z.string().min(1),
    subtitle: z.string().optional(),
    author: z.string().min(1),
    year: z.number().int(),
    theme: z.enum(themeSlugs),
    category: z.string(),
    number: z.number().int().min(1).max(365).nullable(),
    status: z.enum(['candidate', 'selected', 'drafted', 'verified', 'published']),
    confidence: z.enum(['high', 'medium']),
    read_time_min: z.number().int().positive(),
    asin: z.string(),
    free_online: z.boolean().optional(),
    license: z.string().optional(),
    tags: z.strictObject({ transcends: count, evolves: count, expires: count }),
    panel: z.strictObject({
      operator: persona,
      professor: persona,
      skeptic: persona,
      coach: persona,
      modernist: persona,
      advocate: persona,
      rubric: score,
      panel: score,
      final: score,
    }),
    nominated_by: z.string(),
    sources: z.array(z.url()).min(1),
    joe_read: z.coerce.date().nullable(),
    joe_rating: z.number().nullable(),
    joe_note: z.string().nullable(),
  }),
});

export const collections = { books };
