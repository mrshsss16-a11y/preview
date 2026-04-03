import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('مشروع أورا'),
    client: z.string().default('عميل'),
    category: z.string().default('عام'),
    publishDate: z.string().default('2026-01-01'), // تحويل التاريخ لنص آمن
    description: z.string().default(''),
    colSpan: z.string().default('col-span-12 md:col-span-6'),
    gradient: z.string().default('from-[#58A8B4] to-[#438FB3]'),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('مقال أورا'),
    author: z.string().default('فريق أورا'),
    tags: z.array(z.string()).default([]),
    publishDate: z.string().default('2026-01-01'), // تحويل التاريخ لنص آمن
    image: z.string().optional(),
    summary: z.string().default(''),
  }),
});

export const collections = {
  'portfolio': portfolioCollection,
  'blog': blogCollection,
};
