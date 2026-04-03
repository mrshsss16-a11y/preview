import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string().default('مشروع أورا'),
    client: z.string().default('عميل'),
    category: z.string().default('عام'),
    publishDate: z.string().default('2026-04-03'),
    description: z.string().default(''),
    colSpan: z.string().optional(),
    gradient: z.string().optional(),
    services: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().default('مقال أورا'),
    author: z.string().default('فريق أورا'),
    tags: z.array(z.string()).optional().default([]),
    publishDate: z.string().optional().default('2026-04-03'), // جعلناه اختيارياً مع قيمة افتراضية
    summary: z.string().optional().default(''),
  }),
});

export const collections = { portfolio, blog };
