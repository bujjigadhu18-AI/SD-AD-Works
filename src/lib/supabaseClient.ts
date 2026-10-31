import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

const isValidHttpUrl = (val: string): boolean => {
  try {
    const url = new URL(val);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

/**
 * Indicates whether live, valid Supabase credentials have been configured
 * in the client environment rather than placeholder values.
 */
export const isSupabaseConfigured =
  isValidHttpUrl(supabaseUrl) &&
  Boolean(supabaseKey) &&
  supabaseUrl !== 'your_project_url' &&
  supabaseKey !== 'your_publishable_key';

// Use configured values if a valid HTTP(S) URL is provided; otherwise, use a placeholder URL
// to prevent runtime constructor errors during builds or preview before real keys are set.
const clientUrl = isValidHttpUrl(supabaseUrl) ? supabaseUrl : 'https://placeholder.supabase.co';
const clientKey = supabaseKey || 'placeholder-key';

export const supabase = createClient(clientUrl, clientKey);

export interface ClientEnquiryPayload {
  name: string;
  business_name: string;
  business_type: string;
  project_requirement: string;
}
