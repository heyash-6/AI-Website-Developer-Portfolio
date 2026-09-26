import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env?.VITE_SUPABASE_URL ||
  import.meta.env?.NEXT_PUBLIC_SUPABASE_URL ||
  'https://ekcalqxxtcuqvhbcumrh.supabase.co';

const supabaseKey =
  import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env?.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  'sb_publishable_8JR6nHJPPWHl_uZqU8NpYA_Wac3chXt';

export const supabase = createClient(supabaseUrl, supabaseKey);
