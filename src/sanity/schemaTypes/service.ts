export default {
  name: 'service',
  title: 'الخدمات (Services)',
  type: 'document',
  fields: [
    { name: 'title', title: 'عنوان الخدمة', type: 'string' },
    { name: 'description', title: 'وصف الخدمة', type: 'text' },
    { name: 'gridSize', title: 'حجم الشبكة (Bento Grid Size)', type: 'string', initialValue: 'md:col-span-1 md:row-span-1 min-h-[250px]' },
    { name: 'accentColor', title: 'لون توهج البطاقة', type: 'string', initialValue: '' },
  ],
}
