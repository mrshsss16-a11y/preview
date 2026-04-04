import { z, defineCollection } from 'astro:content';

// تعريف هيكل بيانات المدونة
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    date: z.string().optional(),
    description: z.string().optional(),
  }),
});

// تعريف هيكل بيانات معرض الأعمال
const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    client: z.string().optional(),
    description: z.string().optional(),
    publishDate: z.string().optional(),
    gradient: z.string().optional(),
  }),
});

// تصدير الإعدادات ليقرأها Astro
export const collections = {
  'blog': blogCollection,
  'portfolio': portfolioCollection,
};
