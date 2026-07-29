import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import portfolioData from "@/data/portfolio.json";
import "./OurPortfolio.css";

const OurPortfolio = ({ showViewAll = true, limit = 6 }) => {
  const cardColors = [
    { bg: "#fff5f0", pin: "#ff7e5f" },
    { bg: "#f0f7ff", pin: "#4facfe" },
    { bg: "#f9f0ff", pin: "#a18cd1" },
  ];

  const items = portfolioData.slice(0, limit);

  return (
    <section className="relative py-16 md:py-28 bg-[#fafbfc] overflow-x-hidden overflow-y-visible">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px)`,
          backgroundSize: "100% 45px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 lg:mb-20 section-fade-down">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight mb-6">
            Our <span className="text-brand-500">Portfolio</span>
          </h2>
          <p className="section-eyebrow font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-brand-500">
            Real Projects. Real Results.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-y-24 gap-x-10 relative z-10">
            {items.map((item, index) => {
              const color = cardColors[index % cardColors.length];
              const isHigh = index % 2 === 0;

              return (
                <div
                  key={item.id || index}
                  className={`relative flex flex-col items-center section-fade-up ${
                    isHigh ? "lg:-translate-y-12" : "lg:translate-y-12"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <article
                    className="portfolio-card-base group relative w-full sm:w-[300px] h-auto min-h-[300px] md:min-h-[360px] bg-white rounded-[40px] border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.05)] px-[14px] pt-[45px] md:pt-[50px] pb-5 flex flex-col"
                    aria-label={`${item.title} — ${item.category || "Project"}`}
                  >
                    <div className="absolute top-4 inset-x-0 flex justify-center z-40 pointer-events-none">
                      <div
                        className="w-8 h-8 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-125"
                        style={{ backgroundColor: color.pin }}
                        aria-hidden="true"
                      >
                        <div className="w-2 h-2 bg-white/30 rounded-full blur-[0.5px]" />
                      </div>
                    </div>

                    <div
                      className="portfolio-note-inner flex-1 w-full rounded-[32px] border border-gray-50 flex flex-col px-3 pt-3 pb-3 lg:px-6 lg:pt-6 lg:pb-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.03),0_10px_30px_rgba(0,0,0,0.05)] relative z-20"
                      style={{ backgroundColor: color.bg }}
                    >
                      {item.category && (
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-500 bg-brand-500/10 px-2 py-0.5 rounded-full mb-2 w-fit">
                          {item.category}
                        </span>
                      )}

                      <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight tracking-tight line-clamp-2 mb-1">
                        {item.title}
                      </h3>

                      {item.outcome && (
                        <p className="text-emerald-700 text-xs font-bold mb-2">
                          ✓ {item.outcome}
                        </p>
                      )}

                      <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed line-clamp-3 overflow-hidden mb-3">
                        {item.description}
                      </p>

                      <div className="mt-auto flex items-end justify-between gap-2">
                        {item.image && (
                          <div className="relative h-10 w-24">
                            <Image
                              src={item.image}
                              alt={`${item.title} project logo`}
                              fill
                              className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
                              sizes="96px"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <Link
                          href="/contact-us"
                          className="text-xs font-bold text-brand-600 hover:text-brand-700 whitespace-nowrap no-underline"
                          aria-label={`Build a project similar to ${item.title}`}
                        >
                          Build Similar →
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {showViewAll && (
          <div className="text-center mt-16 section-fade-up">
            <Link href="/contact-us" className="apply-now-btn mr-4">
              Start Your Project
            </Link>
          </div>
        )}
      </div>

      
    </section>
  );
};

export default memo(OurPortfolio);
