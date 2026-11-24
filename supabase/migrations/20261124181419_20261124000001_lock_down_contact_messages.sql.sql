/*
# Lock down contact_messages to INSERT-only for public roles

## Purpose
The original migration granted only INSERT, but the live database currently
grants SELECT, INSERT, UPDATE, and DELETE to both `anon` and `authenticated`.
That means anyone with the anon key can read, edit, or delete submitted
messages — a security hole. This migration revokes the excess privileges so
only INSERT remains for public roles, matching the original intent.

## Changes
1. Revoke SELECT, UPDATE, DELETE from `anon` and `authenticated` on
   `contact_messages`.
2. Re-grant INSERT to `anon` and `authenticated` (idempotent — safe to re-run).
3. The existing INSERT policy remains unchanged.

## Security
- `anon` and `authenticated` can only INSERT new messages.
- Only `service_role` (used server-side) can read or manage messages.
- RLS remains enabled; the INSERT policy with WITH CHECK remains in place.
*/

REVOKE SELECT, UPDATE, DELETE ON contact_messages FROM anon, authenticated;
GRANT INSERT ON contact_messages TO anon, authenticated;