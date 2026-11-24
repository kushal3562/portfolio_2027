import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { education, interests } from '@/data/content';

export function Background() {
  return (
    <section id="education" className="section-pad">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Academic background" />
          <ol className="space-y-4">
            {education.map((item) => (
              <li key={item.degree} className="glass glass-hover flex items-start gap-4 rounded-2xl p-5">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/15 text-primary-300">
                  <Icon name="graduation" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{item.degree}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.school}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={120}>
          <div id="interests">
            <SectionHeading eyebrow="Beyond Code" title="Achievements & Interests" />
            <ul className="grid gap-4 sm:grid-cols-2">
              {interests.map((item) => (
                <li
                  key={item.label}
                  className="glass glass-hover group flex items-center gap-4 rounded-2xl p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon name={item.icon} />
                  </span>
                  <span className="text-sm font-medium text-slate-200">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
