import { Portrait } from '@/components/Portrait';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { profile, experience } from '@/data/content';

const focus = ['Generative AI', 'RAG', 'AI Agents', 'Agentic AI'];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="About Me" title="Building for the web, learning for AI" />
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Portrait className="mx-auto w-full max-w-sm" />
          </Reveal>

          <Reveal delay={120}>
            <div className="glass glow-border rounded-2xl p-7 md:p-10">
              <p className="text-lg leading-relaxed text-slate-300 md:text-xl">{profile.about}</p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Experience</p>
                <div className="mt-4 space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.role} className="glass glass-hover rounded-xl p-5">
                      <h3 className="font-display text-base font-semibold text-white">{exp.role}</h3>
                      <p className="mt-0.5 text-sm text-primary-300">{exp.company}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {focus.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
