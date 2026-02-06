const BULLETS = [
  'You’re a leadership team that wants strategy that fits your context, not generic playbooks.',
  'You’ve tried initiatives that promised more than they delivered and want execution that sticks.',
  'You want a thinking partner in your corner, not another vendor with a pitch.',
  'You value clarity and honest guidance over flashy presentations.',
];

const ICON_CHECK = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ICON_ARROW = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

function BuiltForSection() {
  return (
    <section className="py-16 md:py-24 bg-stone-200 font-sans" aria-labelledby="built-for-heading">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 id="built-for-heading" className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight leading-tight mb-6">
              Built for <span className="text-brand">growing</span> companies
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 font-normal">
              We work best with leadership teams in growth mode — who want to clarify strategy, sharpen execution, and get results without the overhead of big consultancies.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand font-medium hover:text-brandDark transition-colors"
            >
              Start a conversation
              {ICON_ARROW}
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm">
            <p className="text-xs font-medium text-stone-500 uppercase tracking-wide mb-6">
              You might be right for this work if:
            </p>
            <ul className="space-y-4">
              {BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-brand mt-0.5 flex-shrink-0">
                    {ICON_CHECK}
                  </span>
                  <span className="text-stone-600 leading-relaxed text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-stone-500 border-t border-stone-200 pt-4">
              If that sounds like you, we’d enjoy the conversation even if we never work together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuiltForSection;
