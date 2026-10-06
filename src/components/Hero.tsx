import React from 'react';
import { Phone, Navigation, Star, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import heroBg from '../assets/images/hero_ashiq_autos_garage_1791261253845.jpg';

interface HeroProps {
  onOpenInquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-[#0c0d12]">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Ashiq Autos Automotive Repair Workshop in Karachi"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/85 to-[#0c0d12]/70 sm:bg-gradient-to-r sm:from-[#0c0d12]/95 sm:via-[#0c0d12]/85 sm:to-[#0c0d12]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-10">
        <div className="max-w-2xl">
          {/* Small Rating Badge */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-medium text-neutral-300 bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full border border-neutral-800">
            <div className="flex items-center text-amber-400 gap-0.5" aria-hidden="true">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <span className="font-semibold text-white tabular-nums">{BUSINESS_INFO.googleRating} Rating</span>
            <span className="text-neutral-600">·</span>
            <a href="#reviews" className="hover:text-white transition-colors">
              <span className="tabular-nums">{BUSINESS_INFO.reviewCount} Reviews</span>
            </a>
          </div>

          {/* Headline - Sized comfortably for mobile & desktop */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-3 sm:mb-4 text-balance">
            {BUSINESS_INFO.heroHeadline}
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 max-w-xl font-normal">
            {BUSINESS_INFO.heroSubheading}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg shadow-md transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now ({BUSINESS_INFO.phone})</span>
            </a>

            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors whitespace-nowrap"
            >
              <Navigation className="w-4 h-4 text-red-500" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Clean 1-line Location & Hours strip */}
          <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Ratan Talao, Karachi</span>
            </div>
            <span className="text-neutral-700 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

