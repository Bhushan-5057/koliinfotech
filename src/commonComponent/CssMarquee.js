import React, { useMemo } from "react";

/**
 * Pure-CSS infinite marquee — no JS carousel library.
 * Children are duplicated once for a seamless loop.
 */
const CssMarquee = ({
  children,
  duration,
  pauseOnHover = true,
  className = "",
  itemClassName = "",
  gap = 16,
}) => {
  const items = useMemo(() => React.Children.toArray(children), [children]);
  const duplicated = useMemo(() => [...items, ...items], [items]);
  const animDuration = duration ?? Math.max(items.length * 3, 20);

  return (
    <div
      className={`css-marquee${pauseOnHover ? " css-marquee--pause-hover" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{
        "--marquee-gap": `${gap}px`,
        "--marquee-duration": `${animDuration}s`,
      }}
    >
      <div className="css-marquee__track">
        {duplicated.map((child, index) => (
          <div
            key={index}
            className={`css-marquee__item${itemClassName ? ` ${itemClassName}` : ""}`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CssMarquee;
