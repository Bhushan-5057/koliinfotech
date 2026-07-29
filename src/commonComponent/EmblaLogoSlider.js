import React, { useEffect, useMemo, useRef, useState } from "react";

const EmblaLogoSlider = ({ children, className = "" }) => {
  const slides = useMemo(
    () => React.Children.toArray(children).filter(Boolean),
    [children]
  );

  const viewportRef = useRef(null);
  const slideRefs = useRef([]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const computeActiveIndex = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const scrollLeft = viewport.scrollLeft;
    const nodes = slideRefs.current;
    if (!nodes || nodes.length === 0) return;

    let bestIndex = 0;
    let bestDist = Infinity;

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (!node) continue;
      const dist = Math.abs(node.offsetLeft - scrollLeft);
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = i;
      }
    }

    setSelectedIndex(bestIndex);
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let rafId = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        computeActiveIndex();
      });
    };

    viewport.addEventListener("scroll", onScroll, { passive: true });
    computeActiveIndex();

    const onResize = () => computeActiveIndex();
    window.addEventListener("resize", onResize);

    return () => {
      viewport.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [slides.length]);

  const scrollToIndex = (index) => {
    const viewport = viewportRef.current;
    const node = slideRefs.current[index];
    if (!viewport || !node) return;
    viewport.scrollTo({ left: node.offsetLeft, behavior: "smooth" });
  };

  if (!slides.length) return null;

  return (
    <div
      className={`embla-logo-slider embla${
        className ? ` ${className}` : ""
      }`}
    >
      <div
        className="embla__viewport embla-logo-slider__viewport"
        ref={viewportRef}
      >
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide embla-logo-slide"
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <div className="embla-logo-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`embla-logo-dot${
                index === selectedIndex ? " is-active" : ""
              }`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmblaLogoSlider;
