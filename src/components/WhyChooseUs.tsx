import React from 'react';
import { Award, Wrench, HeartHandshake, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/business';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Award className="w-5 h-5 text-red-500" />;
      case 1:
        return <Wrench className="w-5 h-5 text-red-500" />;
      case 2:
        return <HeartHandshake className="w-5 h-5 text-red-500" />;
      case 3:
        return <MapPin className="w-5 h-5 text-red-500" />;
      default:
        return <Award className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section id="why-us" className="py-14 sm:py-20 bg-[#0d0e15] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-500 block mb-1.5">
            Why Ashiq Autos
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-2">
            Why Choose Us
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            A trusted automotive partner dedicated to reliable repairs, fair dealings, and dependable vehicle care in Karachi.
          </p>
        </div>

        {/* 4 Clean Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-[#12141d] border border-neutral-800 hover:border-neutral-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-3.5">
                {getIcon(index)}
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Clean Trust Summary Strip */}
        <div className="p-4 sm:p-6 rounded-xl bg-[#12131b] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white">
              Committed to Dependable Vehicle Care in Karachi
            </h4>
            <p className="text-xs text-neutral-400">
              Conveniently located in Ratan Talao, maintaining private vehicles and fleets with honest recommendations.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0 text-center">
            <div>
              <div className="text-lg sm:text-xl font-bold text-white font-display tabular-nums">4.2 ⭐</div>
              <div className="text-[11px] text-neutral-500">Google Rating</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white font-display tabular-nums">43</div>
              <div className="text-[11px] text-neutral-500">Customer Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


