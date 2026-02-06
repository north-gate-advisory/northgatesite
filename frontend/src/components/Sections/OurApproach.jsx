const APPROACHES = [
  {
    title: 'Business first. Always.',
    body: 'We don’t start with a standard offering. We start with what your business actually needs. Strategy and execution only add value when they solve real problems.',
  },
  {
    title: 'Clarity over complexity',
    body: 'Our job is to make the complex understandable. If we can’t explain it in plain language to your team, it’s not ready. No jargon — just clarity.',
  },
  {
    title: 'Partnership, not projects',
    body: 'We work alongside you as a thinking partner — in your corner, with no quota to hit. This isn’t about selling you something; it’s about helping you get where you want to go.',
  },
];

function OurApproach() {
  return (
    <section className="py-16 md:py-24 bg-cream font-sans" aria-labelledby="approach-heading">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="approach-heading" className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight leading-tight mb-12 md:mb-16">
          A different <span className="text-brand">approach</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {APPROACHES.map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-brand pl-6 py-2"
            >
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-3">
                {item.title}
              </h3>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-normal">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurApproach;
