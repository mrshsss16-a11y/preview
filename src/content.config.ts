import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.string(),
    publishDate: z.string(),
    description: z.string(),
    colSpan: z.string().optional(),
    gradient: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string().default('فريق أورا'),
    tags: z.array(z.string()).default([]),
    publishDate: z.string(),
    summary: z.string().default(''),
  }),
});

export const collections = { portfolio, blog };
