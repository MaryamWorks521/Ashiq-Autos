import React, { useState, useEffect } from 'react';
import { X, Phone, Check, Wrench, Send } from 'lucide-react';
import { ServiceItem, BUSINESS_INFO } from '../data/business';

interface InquiryModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  service,
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setName('');
      setPhone('');
      setVehicle('');
      setNotes('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#14151e] border border-neutral-700/80 rounded-xl shadow-2xl p-6 sm:p-8 overflow-hidden text-neutral-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="w-12 h-12 bg-red-950/60 border border-red-800 rounded-full flex items-center justify-center text-red-500 mx-auto mb-4">
              <Check className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Request Confirmed!</h3>
            <p className="text-sm text-neutral-300 mb-6">
              Thank you, {name}. We have noted your request for{' '}
              <strong className="text-white">{service?.title || 'Automotive Service'}</strong>. Our mechanic will call you at{' '}
              <strong className="text-white">{phone}</strong> shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly Now</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 mb-2 text-red-500">
              <Wrench className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Service Booking Inquiry</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-1">
              {service ? service.title : 'Schedule Service'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              {service?.shortDesc || 'Inquire with Ashiq Autos in Ratan Talao, Karachi for honest rates and swift turnaround.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Asif Khan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0321-7654321"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Vehicle (Make / Model / Year)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Suzuki Alto / Toyota Corolla 2018"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Symptoms or Special Request (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any details to help us prepare..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg shadow-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-xs text-neutral-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-red-500" />
                  <span>Prefer to talk? Call directly: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
