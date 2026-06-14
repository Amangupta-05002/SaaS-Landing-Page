export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4 lg:gap-12">
          <div className="space-y-4">
            <span className="text-2xl font-bold text-white">Tasflow</span>
            <p className="text-sm leading-7 text-slate-400">
              Intelligent task management for teams that move fast. Built for modern workflows.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" aria-label="X" className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-400 transition hover:border-purple-500 hover:text-purple-400">
                X
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-400 transition hover:border-purple-500 hover:text-purple-400">
                in
              </a>
              <a href="#" aria-label="GitHub" className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-400 transition hover:border-purple-500 hover:text-purple-400">
                GH
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-white">Product</p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#features" className="transition hover:text-white">Features</a></li>
              <li><a href="#pricing" className="transition hover:text-white">Pricing</a></li>
              <li><a href="#" className="transition hover:text-white">Integrations</a></li>
              <li><a href="#" className="transition hover:text-white">Security</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-white">Resources</p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="transition hover:text-white">Docs</a></li>
              <li><a href="#" className="transition hover:text-white">Blog</a></li>
              <li><a href="#" className="transition hover:text-white">Guides</a></li>
              <li><a href="#" className="transition hover:text-white">Support</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-white">Company</p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="transition hover:text-white">About</a></li>
              <li><a href="#" className="transition hover:text-white">Contact</a></li>
              <li><a href="#" className="transition hover:text-white">Privacy</a></li>
              <li><a href="#" className="transition hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">Copyright 2026 Tasflow. All rights reserved.</p>
          <a href="#cta" className="inline-flex w-fit items-center justify-center rounded-full bg-purple-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-600">
            Start free trial
          </a>
        </div>
      </div>
    </footer>
  );
}
