import { useState } from 'react';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: 'per month',
    description: 'Perfect for small teams',
    features: ['Up to 5 team members', 'Basic automation', '10 integrations', 'Email support'],
    cta: 'Start free trial',
  },
  {
    name: 'Professional',
    price: '$79',
    period: 'per month',
    description: 'For growing teams',
    features: ['Up to 25 team members', 'Advanced automation', 'Unlimited integrations', 'Priority support', 'Custom workflows'],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large organizations',
    features: ['Unlimited team members', 'White-label options', 'Dedicated support', 'SLA guarantee', 'Advanced security'],
    cta: 'Schedule demo',
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="pricing" className="space-y-10">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Simple pricing</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Plans for every team size.</h2>
      </div>

      <div className="mx-auto flex w-fit items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 p-1">
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            billingCycle === 'monthly' ? 'bg-purple-500 text-white' : 'text-slate-300 hover:text-white'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle('annual')}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            billingCycle === 'annual' ? 'bg-purple-500 text-white' : 'text-slate-300 hover:text-white'
          }`}
        >
          Annual
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg border p-7 transition sm:p-8 ${
              plan.highlighted
                ? 'border-purple-500/60 bg-purple-500/5 shadow-lg shadow-purple-500/10'
                : 'border-slate-700 bg-slate-900/80'
            }`}
          >
            <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
            <p className="mt-2 text-sm text-slate-400">{plan.description}</p>

            <div className="mt-6">
              <p className="text-4xl font-bold text-white">{plan.price}</p>
              <p className="text-sm text-slate-400">{plan.period}</p>
            </div>

            <ul className="mt-8 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-purple-400">+</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition active:scale-95 ${
                plan.highlighted
                  ? 'bg-purple-500 text-white hover:bg-purple-600'
                  : 'border border-slate-600 bg-slate-900/90 text-white hover:border-slate-500'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
