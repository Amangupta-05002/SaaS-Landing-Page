import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager at TechCorp',
    quote: 'Tasflow cut our project planning time in half and gave our team a single source of truth for work.',
    result: '40% faster execution',
    avatar: 'SC',
  },
  {
    name: 'Marcus Johnson',
    role: 'Engineering Lead at StartupXYZ',
    quote: 'The collaboration features helped us eliminate status meetings and move faster with fewer handoffs.',
    result: '30% fewer meetings',
    avatar: 'MJ',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Operations Director at GrowthCo',
    quote: 'Integrations with Slack and Jira let us automate follow-ups and keep our roadmap transparent.',
    result: '95% team alignment',
    avatar: 'ER',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="space-y-10">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Social proof</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">What our customers say.</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-start">
        <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-6 shadow-soft transition hover:-translate-y-1 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-base font-bold text-purple-200">
              {testimonials[current].avatar}
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">{testimonials[current].name}</p>
              <p className="mt-1 text-sm text-slate-400">{testimonials[current].role}</p>
            </div>
          </div>

          <p className="mt-8 text-lg leading-8 text-slate-200">"{testimonials[current].quote}"</p>

          <div className="mt-8 rounded-lg bg-slate-950/90 p-5 text-sm text-slate-300">
            <span className="font-semibold text-white">Result:</span> {testimonials[current].result}
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-slate-700 bg-slate-900/80 p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.3em] text-purple-300">Feedback</span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{current + 1} / {testimonials.length}</span>
          </div>

          <div className="grid gap-3">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setCurrent(index)}
                className={`rounded-lg border px-4 py-4 text-left transition ${
                  index === current
                    ? 'border-purple-500 bg-purple-500/10 text-white'
                    : 'border-slate-700 bg-slate-950/80 text-slate-300 hover:border-purple-500 hover:bg-slate-900'
                }`}
              >
                <p className="font-semibold">{item.name}</p>
                <p className="mt-1 text-sm text-slate-400">{item.role}</p>
              </button>
            ))}
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={prev}
              className="flex-1 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800"
            >
              Previous
            </button>
            <button
              onClick={next}
              className="flex-1 rounded-full bg-purple-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
