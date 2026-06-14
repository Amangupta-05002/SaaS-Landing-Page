import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
          <a href="#" className="text-xl font-bold tracking-tight text-white">Tasflow</a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
          <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-purple-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-600">
            Start free trial
          </a>
        </nav>
      </header>

      <main>
        <div className="mx-auto max-w-7xl space-y-20 px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <Hero />
          <Features />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
