import React from 'react';
import { Phone, MapPin, ArrowUp, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#08090c] border-t border-red-950/40 text-neutral-400 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand Info (Col 5) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-2.5 h-6 bg-gradient-to-b from-red-500 to-red-700 rounded-xs shadow-xs shadow-red-500" aria-hidden="true" />
              <span className="text-xl font-display font-bold text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-sm text-neutral-200 font-semibold mb-3">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-5">
              Quality automotive maintenance, routine oil changes, engine diagnostics, and mechanical repairs in Ratan Talao, Karachi. Committed to honest workmanship and customer safety.
            </p>

            <div className="inline-flex items-center gap-3 text-xs bg-neutral-900/90 px-3 py-1.5 rounded-lg border border-neutral-800">
              <span className="text-amber-400 font-bold tabular-nums">⭐ {BUSINESS_INFO.googleRating}</span>
              <span className="text-neutral-600">·</span>
              <a
                href={BUSINESS_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white inline-flex items-center gap-1 transition-colors underline decoration-neutral-700 font-medium"
              >
                <span>{BUSINESS_INFO.reviewCount} Google Reviews</span>
                <ExternalLink className="w-3 h-3 text-red-500" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (Col 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 4) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-neutral-400 block">Phone</span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-white hover:text-red-400 font-medium transition-colors tabular-nums"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-neutral-400 block">Address</span>
                  <a
                    href={BUSINESS_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white text-xs leading-relaxed transition-colors block"
                  >
                    {BUSINESS_INFO.address}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition-colors"
                >
                  <span>Google Business Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Ashiq Autos. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-neutral-400">Karachi, Pakistan</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
