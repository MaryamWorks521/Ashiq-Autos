import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import aboutImg from '../assets/images/about_workshop_inspection_1791261270243.jpg';

export const About: React.FC = () => {
  const highlights = [
    {
      title: 'Quality Workmanship',
      description: 'Accurate diagnoses and methodical repairs tailored to preserve your vehicle’s engine health.'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Transparent communication, honest mechanical assessments, and fair pricing without hidden extras.'
    },
    {
      title: 'Dependable Vehicle Care',
      description: 'Preventative servicing and reliable fixes to keep daily drivers and fleet cars safe on Karachi roads.'
    }
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-[#0e0f15] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden border border-neutral-800 shadow-lg bg-neutral-900">
              <img
                src={aboutImg}
                alt="Ashiq Autos technician inspecting engine diagnostics in Karachi workshop"
                className="w-full h-64 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-500 block mb-1.5">
              About Ashiq Autos
            </span>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-3">
              Reliable Auto Care in Karachi
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-4 font-normal">
              Ashiq Autos provides reliable automotive maintenance and repair services with a focus on quality workmanship, customer satisfaction, and dependable vehicle care.
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
              Conveniently located in Ratan Talao, Karachi, our workshop is dedicated to keeping your vehicle running smoothly. From precision oil changes and battery evaluations to in-depth brake overhauls and electronic engine diagnostics, we bring practical mechanical mastery to every job.
            </p>

            {/* Core Values List - Clean & Compact */}
            <div className="space-y-2.5 mb-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#12141f] border border-neutral-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white mb-0.5">{item.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Links */}
            <div className="flex items-center gap-4 text-xs sm:text-sm">
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-red-400 transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-500" />
              </a>
              <span className="text-neutral-700">·</span>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="font-semibold text-red-400 hover:text-red-300 transition-colors"
              >
                <span>Phone: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


