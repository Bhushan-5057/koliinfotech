import React, { memo } from "react";
import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="relative py-14 md:py-16 bg-slate-50 border-t border-slate-100 mt-10 mb-10">
      <div className="container mx-auto px-4 max-w-4xl text-center section-fade-up">
        <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight mb-3">
          Let&apos;s Build Something Great Together
        </h2>
        <p className="text-slate-600 text-base mb-8 max-w-xl mx-auto">
          Tell us about your project — we&apos;ll respond within 24 hours with a clear plan and
          transparent quote.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact-us" className="apply-now-btn">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(FinalCTA);
