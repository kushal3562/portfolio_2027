import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { SkillGroupCard } from '@/components/SkillGroupCard';
import { proficiencyStyles, technicalSkills } from '@/data/content';

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Technical Skills"
            title="What I build with"
            description="The languages, frameworks and tools I use day to day."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <SkillGroupCard group={group} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <Legend />
        </Reveal>
      </div>
    </section>
  );
}

export function Legend() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
      {Object.entries(proficiencyStyles).map(([key, style]) => (
        <span key={key} className="inline-flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${style.dot}`} />
          {style.legend}
        </span>
      ))}
    </div>
  );
}
