import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import { SITE_STATS } from "@/lib/constants";
import "./HeroSection.css";

const ROTATING_LINES = [
  "Web Development",
  "Mobile App Development",
  "Custom Software",
  "Cloud Solutions",
  "Digital Marketing",
];

/** How long each service stays fully visible before the next transition */
const ROTATE_HOLD_MS = 3000;
const ROTATE_ANIM_MS = 500;

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setReduceMotion(media.matches);

    syncMotionPreference();
    media.addEventListener("change", syncMotionPreference);

    return () => media.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % ROTATING_LINES.length;
        setPrevIndex(current);
        return next;
      });
    }, ROTATE_HOLD_MS);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  useEffect(() => {
    if (prevIndex === null || reduceMotion) return undefined;

    const clearPrev = window.setTimeout(() => {
      setPrevIndex(null);
    }, ROTATE_ANIM_MS);

    return () => window.clearTimeout(clearPrev);
  }, [prevIndex, reduceMotion]);

  const lineClassName = (index) => {
    if (reduceMotion) {
      return `home-hero__rotate-line${index === 0 ? " is-active" : ""}`;
    }
    if (index === activeIndex) return "home-hero__rotate-line is-active";
    if (index === prevIndex) return "home-hero__rotate-line is-exit";
    return "home-hero__rotate-line";
  };

  return (
    <div className="home-hero relative w-full overflow-hidden">
      <div className="home-hero__glow home-hero__glow--left" aria-hidden="true" />
      <div className="home-hero__glow home-hero__glow--right" aria-hidden="true" />
      <div className="home-hero__grid" aria-hidden="true" />

      <section className="relative z-10 flex items-center w-full min-h-[min(88vh,820px)] pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="home-hero__brand mb-5">KOLI Infotech</p>

          <h1 className="commanFont text-[clamp(1.85rem,4.5vw,3.15rem)] font-extrabold leading-[1.15] tracking-tight text-brand-900 mb-3 md:mb-4">
            Expert IT Services at the Best Cost
          </h1>

          <div
            className="home-hero__rotate mb-5 md:mb-6"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="sr-only">
              We specialize in {ROTATING_LINES.join(", ")}. Currently showing{" "}
              {ROTATING_LINES[reduceMotion ? 0 : activeIndex]}.
            </p>

            <div className="home-hero__rotate-viewport" aria-hidden="true">
              {ROTATING_LINES.map((line, index) => (
                <span key={line} className={lineClassName(index)}>
                  {line}
                </span>
              ))}
            </div>
          </div>

          <p className="subText commanFont text-[clamp(1rem,1.8vw,1.2rem)] text-slate-600 leading-relaxed max-w-2xl mx-auto mb-9">
            From startups to enterprises — we design, build, and scale web apps, mobile apps,
            AI solutions, and cloud infrastructure. Based in Surat, serving clients across India
            and Canada.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-12">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center min-h-[52px] min-w-[220px] px-8 py-3 rounded-full bg-brand-500 text-white font-bold text-sm uppercase tracking-wide hover:bg-brand-600 hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline shadow-md"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center min-h-[52px] min-w-[220px] px-8 py-3 rounded-full bg-white text-brand-700 font-bold text-sm uppercase tracking-wide border border-brand-200 hover:border-brand-400 hover:bg-brand-50 hover:-translate-y-0.5 transition-all no-underline"
            >
              View Our Work
            </Link>
          </div>

          <div className="home-hero__stats mx-auto max-w-3xl">
            {SITE_STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`home-hero__stat ${index > 0 ? "home-hero__stat--border" : ""}`}
              >
                <p className="text-2xl md:text-3xl font-black text-brand-500 m-0 leading-none">
                  {stat.value}
                </p>
                <p className="text-[11px] md:text-xs font-semibold text-slate-500 m-0 mt-2 uppercase tracking-[0.14em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(HeroSection);
