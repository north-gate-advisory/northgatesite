import { useState } from 'react';

const ITEMS = [
  {
    q: 'How do we get started?',
    a: 'We begin with a short, no-obligation conversation to understand your goals and challenges. From there we can outline a scope and approach that fits — whether that’s strategy, execution support, or both.',
  },
  {
    q: 'What does engagement typically look like?',
    a: 'It varies by need: from one-off strategy workshops to ongoing partnership as you implement. We’ll propose a clear scope and rhythm so you know what to expect and how we’ll work together.',
  },
  {
    q: 'Who do you work with?',
    a: 'We work best with leadership teams in growth mode — companies that want to clarify direction and sharpen execution without the overhead of large consultancies. If that sounds like you, we’d enjoy the conversation.',
  },
  {
    q: 'How are you different from other consultants?',
    a: 'We focus on fit and clarity: strategy that matches your context, execution support that builds your capability, and a partnership mindset rather than a one-size-fits-all playbook.',
  },
];

const ICON_PLUS = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const ICON_MINUS = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
  </svg>
);

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-stone-200 font-sans" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <header className="text-center mb-12">
          <span className="inline-block text-brand font-medium tracking-wide text-xs uppercase mb-3">
            Common questions
          </span>
          <h2 id="faq-heading" className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight leading-tight">
            <span className="text-brand">FAQ</span>
          </h2>
        </header>

        <div className="space-y-2">
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-stone-100 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-stone-50/80 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="font-medium text-charcoal pr-4">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 text-brand">
                    {isOpen ? ICON_MINUS : ICON_PLUS}
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={isOpen ? 'block' : 'hidden'}
                >
                  <p className="px-5 pb-4 pt-0 text-stone-600 leading-relaxed text-sm md:text-base border-t border-stone-100">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
