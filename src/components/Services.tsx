import React from 'react';
import {
  Droplets,
  Activity,
  Disc,
  Wrench,
  BatteryCharging,
  Fan,
  Hammer,
  CheckCircle2,
  ArrowRight,
  Phone
} from 'lucide-react';
import { SERVICES, ServiceItem, BUSINESS_INFO } from '../data/business';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-red-500";
    switch (iconName) {
      case 'Droplets':
        return <Droplets className={iconClass} />;
      case 'Activity':
        return <Activity className={iconClass} />;
      case 'Disc':
        return <Disc className={iconClass} />;
      case 'Wrench':
        return <Wrench className={iconClass} />;
      case 'BatteryCharging':
        return <BatteryCharging className={iconClass} />;
      case 'Fan':
        return <Fan className={iconClass} />;
      case 'Hammer':
        return <Hammer className={iconClass} />;
      case 'CheckCircle2':
        return <CheckCircle2 className={iconClass} />;
      default:
        return <Wrench className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-[#0c0d12] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-500 block mb-1.5">
            Automotive Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-2">
            Garage Services
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Professional vehicle maintenance, inspections, and mechanical repairs in Ratan Talao, Karachi.
          </p>
        </div>

        {/* 8 Clean Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group p-5 rounded-xl bg-[#12131a] border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 group-hover:border-red-900/50 transition-colors">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-base font-semibold text-white tracking-tight mb-1.5 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <ul className="space-y-1 mb-4 text-xs text-neutral-400">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-red-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-neutral-800/80">
                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="w-full inline-flex items-center justify-between text-xs font-medium text-neutral-300 hover:text-white py-1 transition-colors group-hover:text-red-400"
                >
                  <span>Inquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Consultation Banner */}
        <div className="p-4 sm:p-6 rounded-xl bg-[#12131b] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-semibold text-white">
              Need immediate advice or an inspection quote?
            </h4>
            <p className="text-xs text-neutral-400">
              Speak directly with our technician at our Ratan Talao garage for honest assessments.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.phoneTel}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 021-32771312</span>
          </a>
        </div>
      </div>
    </section>
  );
};


