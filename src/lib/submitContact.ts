export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export async function submitContactMessage(payload: ContactPayload): Promise<void> {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Contact form is not configured. Please email me directly.');
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/contact_messages`, {
    method: 'POST',
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }
}
