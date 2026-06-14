import { useState } from 'react';

const faqs = [
  {
    question: 'Does Tasflow work with my existing tools?',
    answer:
      'Yes. Tasflow integrates with 50+ popular tools including Slack, Microsoft Teams, Jira, GitHub, Asana, Monday.com, and more. If your tool is not listed, we can create a custom integration.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Absolutely. You get a 14-day free trial with full access to all features. No credit card required. If you need more time, we are happy to extend it.',
  },
  {
    question: 'Can I import tasks from my current system?',
    answer:
      'Yes, we support bulk imports from Asana, Monday.com, Jira, Trello, and CSV files. Our migration team can help ensure a smooth transition.',
  },
  {
    question: 'How is my data protected?',
    answer:
      'We use enterprise-grade encryption, SOC 2 Type II controls, and daily automated backups. Data is stored in secure US data centers.',
  },
  {
    question: 'What support do you offer?',
    answer: 'We provide 24/7 email support, live chat during business hours, and dedicated account managers for enterprise plans.',
  },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-700 transition last:border-b-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-purple-300"
      >
        <p className="font-semibold text-white">{item.question}</p>
        <span className={`text-sm text-purple-300 transition-transform ${isOpen ? 'rotate-180' : ''}`}>v</span>
      </button>
      {isOpen && (
        <div className="pb-5 text-slate-300 leading-7">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-5xl space-y-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Common questions</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Frequently asked questions.</h2>
      </div>

      <div className="mx-auto max-w-3xl rounded-lg border border-slate-700 bg-slate-900/80 px-6 py-3 shadow-soft sm:px-8">
        {faqs.map((item, index) => (
          <FAQItem
            key={item.question}
            item={item}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
}
