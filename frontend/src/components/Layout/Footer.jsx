import logoSrc from '../../assets/images/freebg_cropped_ChatGPT Image Feb 2, 2026, 11_47_41 AM.png';

const FOOTER_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 py-12 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="inline-block" aria-label="Home">
              <img
                src={logoSrc}
                alt="Northgate"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-stone-500 mt-1">
              Strategy & execution for growing companies
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-stone-600">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-charcoal hover:text-brand transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-200 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Northgate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
