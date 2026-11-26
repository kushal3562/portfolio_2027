import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { aiProjects } from '@/data/content';

export function AIProjects() {
  return (
    <section id="ai-projects" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="AI Lab"
            title="AI Projects & Experiments"
            description="Planned learning projects. They will move to the main projects list once they are built."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {aiProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/20">
                    <Icon name="flask" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-300">
                    <Icon name="clock" className="h-3 w-3" />
                    In Progress
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-slate-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
