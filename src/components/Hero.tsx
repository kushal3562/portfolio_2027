import { Icon } from '@/components/Icon';
import { SocialLinks } from '@/components/Links';
import { profile } from '@/data/content';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-primary-600/20 blur-3xl animate-float-slow" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl animate-float" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to MERN full stack and AI roles
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl">
            Hi, I'm <span className="gradient-text-animate">{profile.name}</span>
          </h1>

          <p className="mt-5 font-mono text-sm text-accent-400 sm:text-base">{profile.roles}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary group">
              View Projects
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href={profile.resumeUrl} download className="btn-ghost">
              <Icon name="download" className="h-4 w-4" />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              <Icon name="mail" className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-slate-500">Find me</span>
            <div className="h-px w-8 bg-white/15" />
            <SocialLinks />
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-sm lg:block animate-fade-in">
          <div className="glass glow-border animate-float rounded-3xl p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/40">
              <Icon name="code" className="h-7 w-7" />
            </div>
            <p className="mt-6 font-display text-xl font-semibold text-white">MERN Full Stack</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Building end-to-end web applications with MongoDB, Express, React and Node, and learning to ship AI-powered features.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['MERN', 'React.js', 'Node.js', 'WebSockets', 'Generative AI', 'Agentic AI'].map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
