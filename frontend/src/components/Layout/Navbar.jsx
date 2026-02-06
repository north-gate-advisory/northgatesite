import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import logoSrc from '../../assets/images/freebg_cropped_ChatGPT Image Feb 2, 2026, 11_47_41 AM.png'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add('shadow-sm')
        } else {
          navRef.current.classList.remove('shadow-sm')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
  ]

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        ref={navRef}
        className="fixed w-full top-0 z-50 nav-blur border-b border-stone-200/50 transition-all duration-300"
        id="navbar"
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center shrink-0" aria-label="Home">
            <img
              src={logoSrc}
              alt=""
              className="h-12 md:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop: nav links centered, CTA right */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-8 text-sm font-medium text-stone-600">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-charcoal transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full border border-stone-300 hover:border-brand hover:text-brand transition-all duration-300 text-sm font-medium"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile: burger button */}
          <button
            type="button"
            className="md:hidden text-charcoal p-2 -mr-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu: portal to body so it's full viewport and not clipped by nav */}
      {createPortal(
        <div
          className={`md:hidden fixed top-0 left-0 right-0 bottom-0 w-full min-h-screen bg-cream z-[100] flex flex-col transition-opacity duration-300 ease-out ${
            mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          id="mobile-menu"
          aria-hidden={!mobileOpen}
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="flex flex-col justify-center items-center flex-1 gap-8 px-6 pt-24 pb-12">
            <button
              type="button"
              className="absolute top-6 right-6 p-2 text-charcoal hover:text-brand transition-colors rounded-lg"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-xl text-charcoal hover:text-brand transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-brand text-brand font-medium hover:bg-brand hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default Navbar
