import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import accomplishmentData from "@/data/accomplishment.json";

const Accomplishments = () => {
  const sectionRef = useRef(null);
  const accomplishments = useMemo(
    () =>
      (accomplishmentData || []).map((item) => ({
        ...item,
        image: item.image || item.icon,
      })),
    []
  );
  const [counts, setCounts] = useState({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const hasData = accomplishments && accomplishments.length > 0;

  useEffect(() => {
    if (!hasData || hasAnimated) return undefined;

    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setHasAnimated(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { rootMargin: "80px 0px", threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasData, hasAnimated]);

  useEffect(() => {
    if (!hasData || !hasAnimated) return undefined;

    const targets = {};
    accomplishments.forEach((item) => {
      targets[item.id] = parseInt(item.value, 10) || 0;
    });

    const duration = 1600;
    const start = performance.now();
    let rafId = 0;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = {};
      Object.keys(targets).forEach((id) => {
        next[id] = Math.floor(targets[id] * eased);
      });
      setCounts(next);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasData, hasAnimated, accomplishments]);

  return (
    <section ref={sectionRef} aria-labelledby="accomplishments-heading">
      <h2
        id="accomplishments-heading"
        className="text-center comman-heading font-bold section-fade-down"
        style={{ paddingTop: "60px", textTransform: "uppercase" }}
      >
        <span className="text-[#23366c]">Accomplishments</span> that keep us going
      </h2>
      <div className="cst-hr-for-process mb-5"></div>
      <div className="accomplishments-container">
        <div className="container">
          {hasData ? (
            <div className="row justify-content-center">
              {accomplishments.map((item, index) => (
                <div
                  className="col-md-3 accomplishment-item section-fade-up"
                  key={item.id}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="accomplishment-icon"
                    width={56}
                    height={56}
                    loading="lazy"
                  />
                  <p className="accomplishment-count" style={{ color: "#3f689e" }}>
                    {counts[item.id] || 0}+
                  </p>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 italic">No data available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
