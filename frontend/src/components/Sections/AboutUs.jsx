// Professional team/strategy image from Unsplash (optional: add photographer attribution in footer)
const ABOUT_IMAGE_URL = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80';

const POINTS = [
  'Strategy that fits your context — not generic playbooks.',
  'Execution support so plans turn into results.',
  'Ongoing partnership as you scale.',
];

const ICON_STRATEGY = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);
const ICON_TARGET = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const ICON_PARTNERSHIP = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const FEATURES = [
  { icon: ICON_STRATEGY, label: 'Strategy' },
  { icon: ICON_TARGET, label: 'Execution' },
  { icon: ICON_PARTNERSHIP, label: 'Partnership' },
];

function AboutUs() {
  return (
    <section id="about" className="pt-2 md:pt-4 pb-16 md:pb-24 bg-cream" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Single connected block: image (50%) + text (50%) on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-lg shadow-stone-200/50 bg-white border border-stone-100">
          {/* Image – left on desktop, subtle blue overlay */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
            <img
              src={ABOUT_IMAGE_URL}
              alt="Team collaboration and strategy discussion"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand/30 to-transparent pointer-events-none" aria-hidden />
          </div>

          {/* Text – right on desktop */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center border-l-4 border-l-brand">
            <span className="inline-block text-brand font-medium tracking-wide text-xs uppercase mb-4">
              What we do
            </span>
            <h2 id="about-heading" className="font-serif text-3xl md:text-4xl text-charcoal leading-tight mb-6">
              We help you <span className="text-brand">grow</span> — with clarity and focus.
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              From strategy to execution, we work alongside leadership teams to set direction, prioritise what matters, and build the habits that sustain growth.
            </p>

            {/* Blue-accent divider line */}
            <div className="w-12 h-0.5 bg-brand rounded-full mb-6" aria-hidden />

            {/* Icon boxes in blue containers */}
            <ul className="flex flex-wrap gap-3 mb-6" role="list">
              {FEATURES.map(({ icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand/10 text-brand" aria-hidden>
                    {icon}
                  </span>
                  <span className="text-sm font-medium text-charcoal">{label}</span>
                </li>
              ))}
            </ul>

            {/* Bullet list with blue accent */}
            <ul className="space-y-3 text-stone-600 text-sm md:text-base leading-relaxed">
              {POINTS.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="flex-shrink-0 w-1.5 mt-2 rounded-full bg-brand min-h-[0.5em]" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
