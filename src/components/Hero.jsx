import AnimatedCounter from './AnimatedCounter';

export default function Hero() {
  return (
    <section className="grid min-h-[calc(100vh-6rem)] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="space-y-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-600/10 px-4 py-2 text-sm font-semibold text-purple-300">
            <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />
            Task Management Platform
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Organize, prioritize, and ship work faster.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Tasflow combines intelligent task planning, real-time collaboration, and workflow automation so your team always knows what to do next.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-purple-600">
              Start 14-day free trial
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-slate-600">
              View all features
            </a>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg bg-slate-900/80 p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Smart priority</p>
            <p className="mt-4 text-base leading-7 text-slate-200">AI ranks tasks by deadlines, blockers, and team velocity so the most important work stays visible.</p>
          </div>
          <div className="rounded-lg bg-purple-600/10 p-6 text-slate-100 shadow-soft">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-300">Live sync</p>
            <p className="mt-4 text-base leading-7 text-slate-200">Updates flow across every workspace and integration, keeping the whole team aligned without manual follow-ups.</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900/80 p-4 shadow-soft sm:p-6">
        <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="relative rounded-lg border border-slate-800 bg-slate-950 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Team productivity</p>
              <p className="mt-3 text-4xl font-semibold text-white">45%</p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-300">Increased</span>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-lg bg-slate-900/90 px-5 py-4">
              <p className="text-sm text-slate-300">Tasks completed</p>
              <p className="text-sm font-semibold text-white"><AnimatedCounter end={342} /></p>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-lg bg-slate-900/90 px-5 py-4">
              <p className="text-sm text-slate-300">Avg resolution</p>
              <p className="text-sm font-semibold text-white">2.1d</p>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-lg bg-slate-900/90 px-5 py-4">
              <p className="text-sm text-slate-300">Collaboration score</p>
              <p className="text-sm font-semibold text-white"><AnimatedCounter end={94} />%</p>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-slate-800/80 p-5 text-slate-300">
            <p className="text-sm font-medium text-white">Latest milestone</p>
            <p className="mt-2 text-sm leading-6">Workflow rules enabled, capacity forecasting active, and cross-project dependencies now visible.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
