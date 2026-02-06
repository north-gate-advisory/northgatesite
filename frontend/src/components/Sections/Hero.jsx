import { useEffect, useRef } from 'react';

import heroImage from '../../assets/images/ChatGPT Image Feb 2, 2026, 12_33_41 PM.avif';

function Hero() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    [textRef.current, imageRef.current].filter(Boolean).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-20 md:pt-40 flex items-center relative overflow-hidden">
      {/* Soft brand shapes – decorative background */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/25 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        {/* Text Content */}
        <div ref={textRef} className="lg:col-span-7 space-y-8 reveal">
          <span className="inline-block text-brand font-medium tracking-wide text-xs uppercase">
            Business Growth & Strategy
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.1] tracking-tight">
            We help businesses <span className="text-brand">grow.</span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-light max-w-2xl">
            We partner with companies to clarify strategy, sharpen execution, and get results —
            so you can scale with confidence.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand text-white rounded-full font-medium hover:bg-brandDark transition-colors duration-300 shadow-sm shadow-brand/20 group"
            >
              Let's Have a Conversation
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
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-brand text-brand rounded-full font-medium hover:bg-brand hover:text-white transition-colors duration-300"
            >
              Learn More
            </a>
          </div>

          <div className="pt-8 border-t border-brand/30 mt-8 bg-brand/5 -mx-1 px-4 py-3 rounded-lg">
            <p className="text-sm text-brand font-medium flex items-center gap-2">
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
                className="w-4 h-4 text-brand flex-shrink-0"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              Trusted partner for growth • Strategy & execution • Helping businesses scale
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div ref={imageRef} className="lg:col-span-5 relative reveal delay-200">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shadow-stone-200/50 bg-stone-200 relative group">
            <img
              src={heroImage}
              alt="Peter Theodoropoulos"
              className="w-full h-full object-cover grayscale-[20%] sepia-[10%] group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-brand/10 pointer-events-none" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
