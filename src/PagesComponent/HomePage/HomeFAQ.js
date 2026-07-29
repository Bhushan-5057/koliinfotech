import { useState, memo } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import faqData from "@/data/faq-home.json";

const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 section-fade-down">
          <p className="section-eyebrow font-bold uppercase tracking-[0.2em] text-xs text-brand-500 mb-4">
            Got Questions?
          </p>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
            Frequently <span className="text-brand-500">Asked</span> Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Quick answers to help you understand how we work and what you can expect.
          </p>
        </div>

        <div className="space-y-3 section-fade-up">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={faq.id || index}
                className="rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-colors duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`home-faq-panel-${index}`}
                  id={`home-faq-btn-${index}`}
                  className="w-full border-none bg-transparent flex items-center justify-between gap-4 p-4 md:p-5 text-left font-semibold text-slate-900 cursor-pointer"
                >
                  <span className="text-sm md:text-base">{faq.question}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
                    {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                  </span>
                </button>

                <div
                  id={`home-faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`home-faq-btn-${index}`}
                  hidden={!isOpen}
                  className={`transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                >
                  <div className="px-4 md:px-5 pb-4 md:pb-5 text-slate-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center mt-8 text-slate-600 text-sm section-fade-up">
          Still have questions?{" "}
          <Link href="/contact-us" className="text-brand-600 font-bold hover:underline">
            Talk to our team →
          </Link>
        </p>
      </div>
    </section>
  );
};

export default memo(HomeFAQ);
