/*
# Create contact_messages table

1. Purpose
- Stores messages submitted through the portfolio contact form.
- Visitors are not authenticated, so the form runs as the anon role.

2. New Tables
- `contact_messages`
  - `id` (uuid, primary key, default gen_random_uuid())
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email, for replies
  - `subject` (text, not null) — message subject
  - `message` (text, not null) — the body of the message
  - `created_at` (timestamptz, default now())

3. Security
- Enable RLS on `contact_messages`.
- Grant INSERT ONLY to `anon` and `authenticated` (the app only needs to write,
  never to read back submitted messages through the Data API).
- Do NOT grant SELECT/UPDATE/DELETE to anon or authenticated — only the
  service_role (used server-side) can read or manage messages.
- INSERT policy allows anyone to submit a contact message (intentionally public
  write endpoint), with a basic WITH CHECK ensuring required columns are present.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anyone_can_submit_contact_message" ON contact_messages;
CREATE POLICY "anyone_can_submit_contact_message"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (
  name IS NOT NULL AND length(trim(name)) > 0
  AND email IS NOT NULL AND length(trim(email)) > 0
  AND subject IS NOT NULL AND length(trim(subject)) > 0
  AND message IS NOT NULL AND length(trim(message)) > 0
);
