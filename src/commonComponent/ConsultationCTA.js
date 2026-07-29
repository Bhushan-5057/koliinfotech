import React, { memo } from "react";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const ConsultationCTA = () => {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsappFull}?text=${encodeURIComponent(
    "Hi KOLI Infotech, I'd like to book a free consultation."
  )}`;

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #3f689f 0%, #23366c 60%, #0b1f3a 100%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="white"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center section-fade-up">
        <p className="text-brand-200 text-xs font-bold uppercase tracking-[0.25em] mb-4">
          Free Consultation
        </p>
        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Book a free 30-minute consultation with our technology experts. No commitment, no sales
          pressure — just honest advice on how we can help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-full bg-white text-brand-600 font-bold text-sm uppercase tracking-wide hover:bg-brand-50 hover:-translate-y-0.5 transition-all shadow-lg no-underline w-full sm:w-auto"
          >
            Get Free Consultation
          </Link>
        </div>
        <p className="text-white/100 text-xs mt-6">
          Average response time: under 2 hours during business days
        </p>
      </div>
    </section>
  );
};

export default memo(ConsultationCTA);
