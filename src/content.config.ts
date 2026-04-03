import { defineCollection, z } from 'astro:content';
// في حال ربطك بـ CMS مثل Sanity، يتم استيراد المحمل المخصص
// import { sanityLoader } from '@sanity/astro';

const portfolio = defineCollection({
  // نوع المحتوى يدعم Content Layer API في Astro 5
  type: 'content', 
  // loader: sanityLoader({ ... }), // يتم تفعيله عند ربط CMS فعلي
  
  // مخطط التحقق الصارم (Zod Schema for strict type safety)
  schema: ({ image }) => z.object({
    title: z.string().min(3, "يجب أن يتجاوز العنوان 3 أحرف"),
    client: z.string(),
    description: z.string(),
    services: z.array(z.string()),
    imageUrl: z.string().url("يجب توفير رابط صالح للصورة").optional(),
    coverImage: image().optional(), // يدعم مكون Astro <Image /> الآلي
    isFeatured: z.boolean().default(false),
  })
});

export const collections = { portfolio };