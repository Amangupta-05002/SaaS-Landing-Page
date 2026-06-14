import EmailForm from './EmailForm';

export default function CTA() {
  return (
    <section id="cta" className="rounded-lg border border-purple-500/20 bg-purple-500/5 p-6 sm:p-10 lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-purple-300">Get started today</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Stop drowning in tasks. Start shipping faster.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">Join thousands of teams using Tasflow to streamline workflows, reduce bottlenecks, and deliver projects on time with clearer ownership.</p>
        </div>

        <div className="rounded-lg border border-slate-700 bg-slate-950/90 p-6 shadow-soft sm:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Try our free trial</p>
          <p className="mt-3 text-xl font-semibold text-white">Get started with Tasflow in seconds.</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg bg-slate-900/80 p-4">
              <EmailForm />
            </div>
            <a
              href="#features"
              className="inline-flex w-full items-center justify-center rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-600 sm:w-auto"
            >
              Schedule a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
