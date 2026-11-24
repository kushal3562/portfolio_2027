import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Legend } from '@/components/Skills';
import { SkillGroupCard } from '@/components/SkillGroupCard';
import { aiSkills } from '@/data/content';

export function AISkills() {
  return (
    <section id="ai" className="relative section-pad">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-primary-600/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="AI & Emerging Tech"
            title="Artificial Intelligence & Emerging Technologies"
            description="Where I am in my learning journey. Each skill is labelled honestly, with no fake percentages."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aiSkills.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 100}>
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
