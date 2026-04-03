export default {
  name: 'project',
  title: 'Project (الأعمال السابقة)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (عنوان المشروع)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug (الرابط الفرعي)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image (صورة المشروع الرئيسية)',
      type: 'image',
      options: { hotspot: true } // تفعيل ميزة التحديد الذكي للمركز البصري
    },
    {
      name: 'description',
      title: 'Short Description (وصف قصير)',
      type: 'text',
      rows: 3
    },
    {
      name: 'services',
      title: 'Services Provided (الخدمات المقدمة)',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}