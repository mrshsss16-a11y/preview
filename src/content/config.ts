import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.string().optional(),
    services: z.string().optional(), // جعلنا هذا اختيارياً لحل المشكلة فوراً
    publishDate: z.string(),
    description: z.string(),
    colSpan: z.string().optional(),
    gradient: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string().default('فريق أورا'),
    tags: z.array(z.string()).default([]),
    publishDate: z.string(),
    image: z.string().optional(),
    summary: z.string().default(''),
  }),
});

export const collections = {
  'portfolio': portfolioCollection,
  'blog': blogCollection,
};
