import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY } from '$env/static/private';

const supabaseUrl = 'https://vewwoccrxnikxpqsyqga.supabase.co';
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey as string);

export default supabase;
