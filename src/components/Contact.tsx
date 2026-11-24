import { useState, type FormEvent } from 'react';
import { Icon } from '@/components/Icon';
import { ExternalLink, SocialLinks } from '@/components/Links';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { profile } from '@/data/content';
import { submitContactMessage, type ContactPayload } from '@/lib/submitContact';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const emptyForm: ContactPayload = { name: '', email: '', subject: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-200 focus:border-primary-500/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-primary-500/20 disabled:opacity-60';

export function Contact() {
  const [form, setForm] = useState<ContactPayload>(emptyForm);
  const [status, setStatus] = useState<Status>('idle');
  const [validationError, setValidationError] = useState('');

  const updateField = (key: keyof ContactPayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      setValidationError('Please fill in every field.');
      return;
    }
    if (!emailPattern.test(payload.email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    setValidationError('');
    setStatus('sending');
    try {
      await submitContactMessage(payload);
      setStatus('sent');
      setForm(emptyForm);
    } catch {
      setStatus('error');
    }
  };

  const sending = status === 'sending';

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            description="Have a role or a project in mind? Send a message and I will get back to you."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="flex flex-col gap-4">
            <ContactRow icon="mail" label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow
              icon="phone"
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
            />
            <ContactRow icon="pin" label="Location" value={profile.location} />
            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Socials</p>
              <div className="mt-4">
                <SocialLinks />
              </div>
              <p className="mt-4 text-xs text-slate-500">
                GitHub and LinkedIn links will appear here once they are added.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="glass glow-border rounded-2xl p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={updateField('name')}
                    placeholder="Your name"
                    disabled={sending}
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={updateField('email')}
                    placeholder="you@example.com"
                    disabled={sending}
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Subject" htmlFor="subject">
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={updateField('subject')}
                    placeholder="What is this about?"
                    disabled={sending}
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={updateField('message')}
                    placeholder="Tell me about the role or project"
                    disabled={sending}
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Icon name="send" className="h-4 w-4" />
                {sending ? 'Sending...' : 'Send Message'}
              </button>

              {validationError && <Notice tone="error" text={validationError} />}
              {status === 'sent' && (
                <Notice tone="success" text="Thanks! Your message has been sent." />
              )}
              {status === 'error' && (
                <Notice
                  tone="error"
                  text={`Your message could not be sent. Please email me directly at ${profile.email}.`}
                />
              )}

              <div className="mt-6 border-t border-white/10 pt-5 text-center">
                <ExternalLink
                  href={`mailto:${profile.email}?subject=${encodeURIComponent('Hello Karthik')}`}
                  label="Prefer email? Open your mail app"
                  icon={<Icon name="mail" className="h-4 w-4" />}
                />
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-slate-400">
        {label}
      </label>
      {children}
    </div>
  );
}

function Notice({ tone, text }: { tone: 'success' | 'error'; text: string }) {
  const styles =
    tone === 'success'
      ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
      : 'border-red-400/30 bg-red-400/10 text-red-300';
  return (
    <div className={`mt-4 flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm ${styles}`}>
      <Icon name={tone === 'success' ? 'check' : 'alert'} className="mt-0.5 h-4 w-4 shrink-0" />
      {text}
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: 'mail' | 'phone' | 'pin';
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white">
        <Icon name={icon} />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-500">{label}</p>
        <p className="mt-0.5 truncate text-sm text-slate-200">{value}</p>
      </div>
    </>
  );

  return href ? (
    <a href={href} className="glass glass-hover group flex items-center gap-4 rounded-2xl p-6">
      {content}
    </a>
  ) : (
    <div className="glass flex items-center gap-4 rounded-2xl p-6">{content}</div>
  );
}
