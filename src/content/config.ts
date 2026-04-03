import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('مشروع أورا'),
    client: z.string().default('عميل'),
    category: z.string().optional(),
    services: z.string().optional(),
    publishDate: z.string().default('2026-01-01'),
    description: z.string().default(''),
    colSpan: z.string().optional(),
    gradient: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('مقال أورا'),
    author: z.string().default('فريق أورا'),
    tags: z.array(z.string()).default([]),
    publishDate: z.string().default('2026-01-01'),
    summary: z.string().default(''),
  }),
});

export const collections = {
  'portfolio': portfolioCollection,
  'blog': blogCollection,
};
