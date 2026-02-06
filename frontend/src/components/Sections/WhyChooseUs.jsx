const REASONS = [
  {
    title: 'Proven track record',
    description: 'We’ve helped businesses across sectors clarify strategy and deliver measurable growth.',
  },
  {
    title: 'Partnership, not just advice',
    description: 'We work alongside your team so you build lasting capability, not dependency.',
  },
  {
    title: 'Clear, practical focus',
    description: 'No jargon or endless decks — we prioritise actions that move the needle.',
  },
];

function WhyChooseUs() {
  return (
    <section className="relative pt-0 pb-10 md:pb-14" aria-labelledby="why-choose-us-heading">
      <h2 id="why-choose-us-heading" className="sr-only">Why choose us</h2>
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Cards wrapper: negative margin so vertical center of cards sits on hero bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 -mt-[55px] md:-mt-[48px] relative z-10">
          {REASONS.map((reason, i) => (
            <article
              key={i}
              className="bg-white rounded-xl shadow-md shadow-stone-200/50 border border-stone-100 p-4 md:p-5 flex flex-col min-h-[110px] md:min-h-[96px] transition-shadow hover:shadow-lg hover:shadow-stone-200/40"
            >
              <span className="text-brand font-serif text-lg font-bold text-opacity-90 mb-1.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 id={`reason-${i}`} className="font-serif text-base text-charcoal mb-1">
                {reason.title}
              </h3>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed mt-auto">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
