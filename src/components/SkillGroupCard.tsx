import { proficiencyStyles, type SkillGroup } from '@/data/content';

export function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <article className="glass glass-hover glow-border h-full rounded-2xl p-6">
      <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill.name}
            title={skill.level}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-white/25 hover:bg-white/[0.08]"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${proficiencyStyles[skill.level].dot}`} />
            {skill.name}
          </li>
        ))}
      </ul>
    </article>
  );
}
