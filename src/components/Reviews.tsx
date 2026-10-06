import React from 'react';
import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS } from '../data/business';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-14 sm:py-20 bg-[#0c0d12] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verified Google Rating */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12 pb-6 border-b border-neutral-800/80">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-red-500 block mb-1.5">
              Verified Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-2">
              Customer Reviews
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Ratings and service feedback recorded on our official Google Business profile.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl bg-[#12131b] border border-neutral-800 shrink-0 self-start sm:self-auto">
            <div className="text-center pr-3.5 border-r border-neutral-800">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
                {BUSINESS_INFO.googleRating}
              </div>
              <div className="text-[10px] text-neutral-500">out of 5.0</div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-0.5" aria-label="Rating 4.2 out of 5">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <Star className="w-3.5 h-3.5 text-amber-400" strokeWidth={2} />
              </div>
              <div className="text-xs font-medium text-white">
                <span className="tabular-nums font-semibold">{BUSINESS_INFO.reviewCount}</span> Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* 3 Realistic Neutral Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-xl bg-[#12131a] border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400" aria-label={`${rev.rating} stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-neutral-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-red-500" />
                    <span>{rev.source}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="font-medium text-white text-xs">{rev.label}</span>
                <span className="text-neutral-500 text-[11px]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View on Google Profile Action */}
        <div className="text-center pt-2">
          <a
            href={BUSINESS_INFO.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors"
          >
            <span>View Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-red-500" />
          </a>
        </div>
      </div>
    </section>
  );
};


