import { Icon } from '@/components/Icon';
import { ExternalLink } from '@/components/Links';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/data/content';

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Things I've built"
            description="Frontend, full-stack and API projects built with React and Node.js."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 100}>
              <article className="group glass glass-hover relative flex h-full flex-col overflow-hidden rounded-2xl p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary-300">
                  <Icon name="folder" />
                </span>

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

                <div className="mt-6 flex flex-wrap gap-3">
                  <ExternalLink
                    href={project.repoUrl}
                    label="Code"
                    icon={<Icon name="github" className="h-4 w-4" />}
                  />
                  <ExternalLink
                    href={project.demoUrl}
                    label="Demo"
                    icon={<Icon name="arrow" className="h-4 w-4" />}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
