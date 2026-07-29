import { useEffect, useRef, useState } from "react";

export default function ViewportDefer({
  children,
  minHeight = "24rem",
  rootMargin = "200px 0px",
  idleFallbackMs = 30000,
}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return undefined;
    const node = ref.current;
    if (!node) return undefined;

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setShow(true);
    };

    let observer;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            reveal();
            observer?.disconnect();
          }
        },
        { root: null, rootMargin, threshold: 0.01 }
      );
      observer.observe(node);
    }

    const timer = window.setTimeout(reveal, idleFallbackMs);

    return () => {
      observer?.disconnect();
      clearTimeout(timer);
    };
  }, [show, rootMargin, idleFallbackMs]);

  return (
    <div ref={ref} style={{ minHeight: show ? undefined : minHeight, width: "100%" }}>
      {show ? children : <div aria-hidden="true" style={{ minHeight, width: "100%" }} />}
    </div>
  );
}
