import { useState, memo } from "react";
import Link from "next/link";
import Head from "next/head";
import { ChevronRight, ChevronDown } from "lucide-react";
import serviceFaqs from "@/data/serviceFaqs.json";

const ServiceFAQ = ({ serviceKey, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = serviceFaqs[serviceKey] || [];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  if (!faqs.length) return null;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>
      <section className="w-full py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 section-fade-down">
          <p className="section-eyebrow font-bold uppercase tracking-[0.2em] text-xs text-brand-500 mb-4">
            {title || "Common Questions"}
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 section-fade-up">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={faq.id || index}
                className="rounded-2xl bg-white border border-slate-100 hover:border-brand-200 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`service-faq-${serviceKey}-${index}`}
                  className="w-full border-none bg-transparent flex items-center justify-between gap-4 p-4 md:p-5 text-left font-semibold text-slate-900 cursor-pointer"
                >
                  <span className="text-sm md:text-base">{faq.question}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
                    {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                  </span>
                </button>
                <div
                  id={`service-faq-${serviceKey}-${index}`}
                  role="region"
                  hidden={!isOpen}
                  className={`transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                >
                  <div className="px-4 md:px-5 pb-4 md:pb-5 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center mt-8 text-slate-600 text-sm">
          Have a specific question?{" "}
          <Link href="/contact-us" className="text-brand-600 font-bold hover:underline">
            Contact our team →
          </Link>
        </p>
        </div>
      </section>
    </>
  );
};

export default memo(ServiceFAQ);
