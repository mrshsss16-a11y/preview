import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    date: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(), // حقل الصورة الجديد
  }),
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    client: z.string().optional(),
    description: z.string().optional(),
    publishDate: z.string().optional(), result: z.string().optional(),
    gradient: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'portfolio': portfolioCollection,
};
