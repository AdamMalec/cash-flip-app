import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';

const supabaseUrl = 'https://vewwoccrxnikxpqsyqga.supabase.co';
const supabaseKey = env.PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey as string);

export default supabase;
