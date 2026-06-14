const featureData = [
  {
    title: 'AI task prioritization',
    description: 'Machine learning ranks tasks by urgency, dependencies, and team capacity so everyone knows what deserves attention next.',
  },
  {
    title: 'Seamless integrations',
    description: 'Connect Slack, Microsoft Teams, Jira, GitHub, Asana, and 50+ other tools to keep work moving from one command center.',
  },
  {
    title: 'Real-time collaboration',
    description: 'Comment, assign, and update tasks instantly across teams without context switching, status chasing, or email threads.',
  },
];

export default function Features() {
  return (
    <section id="features" className="space-y-10">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Powerful capabilities</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Tools built for modern teams who move fast.</h2>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          From individual contributors to enterprise teams, Tasflow scales with your needs while keeping work organized and transparent.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featureData.map((feature) => (
          <article key={feature.title} className="group rounded-lg border border-slate-700 bg-slate-900/80 p-7 transition hover:-translate-y-1 hover:border-purple-500/60 hover:bg-slate-900">
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-4 text-slate-300 leading-7">{feature.description}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-300">
              Learn more
              <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
