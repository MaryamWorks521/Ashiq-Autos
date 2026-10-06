import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Send,
  Calendar,
  Car,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/business';

export const Contact: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: 'Oil Change',
    notes: ''
  });

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS_INFO.address);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#0d0e14] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-500 block mb-1.5">
            Workshop & Location
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-2">
            Contact Ashiq Autos
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Have questions about an upcoming service or need vehicle maintenance in Karachi? Reach us directly or drop by our workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* Business Details Card (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-7 rounded-xl bg-[#12131b] border border-neutral-800 shadow-lg">
            <div>
              <div className="mb-6 pb-4 border-b border-neutral-800">
                <h3 className="text-xl font-display font-bold text-white mb-0.5">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-neutral-400">
                  {BUSINESS_INFO.businessType}
                </p>
              </div>

              {/* Contact Information List */}
              <div className="space-y-4 mb-6">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-red-500 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">Telephone</span>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="text-base font-semibold text-white hover:text-red-400 transition-colors tabular-nums"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-red-500 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-neutral-400 block">Location</span>
                    <a
                      href={BUSINESS_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-white hover:text-red-400 transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.address}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors mt-1.5"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Address copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-red-500 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">Operating Hours</span>
                    <div className="text-xs text-neutral-200 font-medium mt-0.5">
                      {BUSINESS_INFO.workingHours.map((wh) => (
                        <div key={wh.days} className="flex items-center justify-between gap-3 py-0.5">
                          <span className="text-neutral-400">{wh.days}:</span>
                          <span>{wh.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors text-center"
                >
                  <Navigation className="w-3.5 h-3.5 text-red-500" />
                  <span>Get Directions</span>
                </a>
              </div>

              <a
                href={BUSINESS_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
              >
                <span>View on Google Profile</span>
                <ExternalLink className="w-3 h-3 text-red-500" />
              </a>
            </div>
          </div>

          {/* Service Inquiry Form (Col 7) */}
          <div className="lg:col-span-7 p-5 sm:p-7 rounded-xl bg-[#12131b] border border-neutral-800 shadow-lg">
            <h3 className="text-base sm:text-lg font-display font-semibold text-white mb-1">
              Send a Service Inquiry
            </h3>
            <p className="text-xs text-neutral-400 mb-5">
              Enter your vehicle details and our technician will contact you directly.
            </p>

            {formSubmitted ? (
              <div className="py-8 text-center bg-neutral-900/60 rounded-lg border border-neutral-800 p-6">
                <div className="w-10 h-10 bg-red-950/60 border border-red-800 rounded-full flex items-center justify-center text-red-500 mx-auto mb-3">
                  <Check className="w-5 h-5 text-red-400" />
                </div>
                <h4 className="text-base font-semibold text-white mb-1.5">Inquiry Received</h4>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto mb-5">
                  Thank you, {formData.name}. We will call you at {formData.phone} regarding your {formData.service} request.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', phone: '', vehicle: '', service: 'Oil Change', notes: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 rounded-md transition-colors"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="customer-name" className="block text-xs font-medium text-neutral-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="customer-name"
                      type="text"
                      required
                      placeholder="e.g. Tariq Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="customer-phone" className="block text-xs font-medium text-neutral-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="customer-phone"
                      type="tel"
                      required
                      placeholder="e.g. 0300-1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="customer-vehicle" className="block text-xs font-medium text-neutral-300 mb-1">
                      Vehicle Model
                    </label>
                    <input
                      id="customer-vehicle"
                      type="text"
                      placeholder="e.g. Toyota Corolla / Alto"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service-type" className="block text-xs font-medium text-neutral-300 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service-type"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700/80 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="customer-notes" className="block text-xs font-medium text-neutral-300 mb-1">
                    Details (Optional)
                  </label>
                  <textarea
                    id="customer-notes"
                    rows={2}
                    placeholder="Briefly describe the issue..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Map Area */}
        <div className="rounded-xl overflow-hidden border border-neutral-800 bg-[#12131b]">
          <div className="p-3 sm:p-4 border-b border-neutral-800 flex items-center justify-between text-xs">
            <span className="font-medium text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Workshop Location: V259+MHG, Ratan Talao, Karachi</span>
            </span>
            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-white font-medium transition-colors"
            >
              Open in Maps →
            </a>
          </div>
          <div className="relative w-full h-[260px] sm:h-[340px] bg-neutral-950">
            <iframe
              title="Ashiq Autos Location Map in Ratan Talao Karachi"
              src="https://maps.google.com/maps?q=Ratan+Talao,+Karachi,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-[180deg] contrast-[85%]"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

