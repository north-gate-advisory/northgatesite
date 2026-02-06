import { useState, useEffect } from 'react';

const SERVICES = [
  {
    title: 'Strategy & planning',
    description: 'We work with you to clarify direction, set priorities, and build a plan that fits your context — not generic playbooks.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    imageAlt: 'Strategy and planning discussion',
  },
  {
    title: 'Execution & implementation',
    description: 'From workshops to ongoing support, we help turn plans into action so your team builds lasting capability and delivers results.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
    imageAlt: 'Team execution and implementation',
  },
  {
    title: 'Growth & scaling',
    description: 'As you scale, we stay alongside to refine strategy, sharpen focus, and keep execution on track.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    imageAlt: 'Business growth and scaling',
  },
];

function OurServices() {
  const [serviceModalOpen, setServiceModalOpen] = useState(false);

  useEffect(() => {
    if (serviceModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [serviceModalOpen]);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') setServiceModalOpen(false);
    }
    if (serviceModalOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [serviceModalOpen]);

  return (
    <>
      <section id="services" className="py-16 md:py-24 bg-[#f5f8fc]" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <header className="text-center mb-12 md:mb-14">
            <span className="inline-block text-brand font-medium tracking-wide text-xs uppercase mb-3">
              What we offer
            </span>
            <h2 id="services-heading" className="font-serif text-3xl md:text-4xl text-charcoal">
              Our <span className="text-brand">services</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-md shadow-stone-200/40 border border-stone-100/80 flex flex-col hover:shadow-lg hover:shadow-stone-200/50 transition-shadow duration-300 border-t-4 border-t-brand"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent pointer-events-none" aria-hidden />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/30 to-transparent pointer-events-none" aria-hidden />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl text-charcoal mb-2">
                    {service.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-brand rounded-full mb-3" aria-hidden />
                  <p className="text-stone-600 text-sm leading-relaxed flex-1 mb-5">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => setServiceModalOpen(true)}
                    className="inline-flex items-center gap-2 text-brand font-medium text-sm hover:gap-3 transition-all duration-200 text-left"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                      aria-hidden
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service "Learn more" showcase modal */}
      {serviceModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative">
            <button
              type="button"
              onClick={() => setServiceModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-stone-400 hover:text-charcoal rounded-lg transition-colors"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <div className="pr-10">
              <h3 id="service-modal-title" className="font-serif text-xl text-charcoal mb-4">
                Service pages (showcase)
              </h3>
              <p className="text-stone-600 leading-relaxed">
                On your real site, each service will have its own dedicated page — for example Strategy & planning, Execution & implementation, and Growth & scaling — which is better for SEO and lets visitors go deeper on what matters to them.
              </p>
              <button
                type="button"
                onClick={() => setServiceModalOpen(false)}
                className="mt-6 px-5 py-2.5 rounded-full border-2 border-brand text-brand font-medium hover:bg-brand hover:text-white transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OurServices;
