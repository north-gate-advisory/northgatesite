import { useState, useEffect } from 'react';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSuccess]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate send delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1500);
  }

  return (
    <>
      <section id="contact" className="py-16 md:py-24 bg-white font-sans" aria-labelledby="contact-heading">
        <div className="max-w-xl mx-auto px-6">
          <header className="text-center mb-10">
            <span className="inline-block text-brand font-medium tracking-wide text-xs uppercase mb-3">
              Get in touch
            </span>
            <h2 id="contact-heading" className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight leading-tight mb-4">
              Let's <span className="text-brand">talk</span>
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Tell us a bit about your situation and we'll get back to you.
            </p>
          </header>

          <form
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-2">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                disabled={isSubmitting}
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-stone-300 focus:border-brand focus:ring-0 focus:outline-none transition-colors placeholder:text-stone-400 text-charcoal disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-2">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                disabled={isSubmitting}
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-stone-300 focus:border-brand focus:ring-0 focus:outline-none transition-colors placeholder:text-stone-400 text-charcoal disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="How can we help?"
                disabled={isSubmitting}
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-stone-300 focus:border-brand focus:ring-0 focus:outline-none resize-y min-h-[100px] transition-colors placeholder:text-stone-400 text-charcoal disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand text-white rounded-full font-medium hover:bg-brandDark transition-colors duration-300 shadow-sm shadow-brand/20 disabled:opacity-80 disabled:cursor-not-allowed min-w-[160px]"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden />
                    Sending…
                  </>
                ) : (
                  'Send message'
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Success modal */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
        >
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center relative">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-brand/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            </div>
            <h3 id="success-modal-title" className="font-serif text-2xl text-charcoal mb-2">
              Message sent
            </h3>
            <p className="text-stone-600 mb-6">
              Thanks for getting in touch. We'll get back to you soon.
            </p>
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="px-6 py-3 bg-brand text-white rounded-full font-medium hover:bg-brandDark transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
