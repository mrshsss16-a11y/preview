import { createClient } from '@supabase/supabase-js';

// سيقوم Astro بقراءة هذه المتغيرات من ملف .env
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("⚠️ تنبيه: بيانات اتصال Supabase مفقودة في ملف .env");
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
