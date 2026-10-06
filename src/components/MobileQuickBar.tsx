import React from 'react';
import { Phone, Navigation, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0e14]/95 backdrop-blur-md border-t border-neutral-800 shadow-xl">
      <div className="p-2 px-3 max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-2">
          {/* Call button */}
          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 021-32771312</span>
          </a>

          {/* Directions button */}
          <a
            href={BUSINESS_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-950 text-neutral-200 text-xs font-medium rounded-lg border border-neutral-700 transition-colors whitespace-nowrap"
          >
            <Navigation className="w-3.5 h-3.5 text-red-500" />
            <span>Directions</span>
          </a>
        </div>
      </div>
    </div>
  );
};

