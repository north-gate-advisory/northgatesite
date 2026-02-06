const STEPS = [
  {
    step: 1,
    title: 'We listen',
    description: 'A short call to understand your goals, challenges, and where you are today. No pitch — just a conversation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
  },
  {
    step: 2,
    title: 'We align',
    description: 'We shape a clear scope and approach that fits your context — strategy, execution, or both — so everyone knows the next step.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3v18" />
        <path d="m8 7 4-4 4 4" />
        <path d="m8 17 4 4 4-4" />
        <path d="M3 12h4" />
        <path d="M17 12h4" />
        <path d="M7 8v8" />
        <path d="M17 8v8" />
      </svg>
    ),
  },
  {
    step: 3,
    title: 'We deliver',
    description: 'Ongoing partnership so plans become reality — workshops, implementation support, and clarity as you scale.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
      </svg>
    ),
  },
];

function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-[#f5f8fc] font-sans" aria-labelledby="how-heading">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-14 md:mb-16">
          <span className="inline-block text-brand font-medium tracking-wide text-xs uppercase mb-3">
            Working with us
          </span>
          <h2 id="how-heading" className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight leading-tight">
            How it <span className="text-brand">works</span>
          </h2>
        </header>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-0 right-0 h-0.5 bg-brand/20 pointer-events-none" aria-hidden />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {STEPS.map((item, i) => (
              <div key={item.step} className="relative flex flex-col items-center text-center md:items-center md:text-center">
                {/* Icon + step number */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-white text-brand border-2 border-brand/20 shadow-sm mb-5">
                  {item.icon}
                  <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-brand text-white text-xs font-semibold tabular-nums">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
