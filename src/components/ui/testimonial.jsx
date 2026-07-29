import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function ChevronLeft({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
function ChevronRight({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
function Star({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false">
      <path d="M12 2l2.9 6.9L22 10.3l-5 4.9 1.2 7.1L12 18.8 5.8 22.3 7 15.2 2 10.3l7.1-1.4L12 2z" />
    </svg>
  );
}

const TestimonialCarousel = React.forwardRef(
  (
    {
      className,
      testimonials = [],
      showArrows = true,
      showDots = true,
      onReadMore,
      truncateWords = 22,
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const total = testimonials.length;

    const goTo = React.useCallback(
      (index) => {
        if (!total) return;
        const nextIndex = ((index % total) + total) % total;
        setCurrentIndex(nextIndex);
      },
      [total]
    );

    const goNext = React.useCallback(() => {
      if (!total) return;
      setCurrentIndex((prev) => (prev + 1) % total);
    }, [total]);

    const goPrev = React.useCallback(() => {
      if (!total) return;
      setCurrentIndex((prev) => (prev - 1 + total) % total);
    }, [total]);

    const getShortText = (text) => {
      if (!text) return "";
      const words = text.trim().split(/\s+/);
      if (words.length <= truncateWords) return text;
      return `${words.slice(0, truncateWords).join(" ")}...`;
    };

    const getRating = (rating) => {
      const parsed = Number(rating);
      if (Number.isNaN(parsed) || parsed <= 0) return 5;
      return Math.max(0, Math.min(5, Math.round(parsed)));
    };

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
    };

    if (!total) return null;

    const current = testimonials[currentIndex];

    return (
      <div
        ref={ref}
        className={cn(
          "relative mx-auto flex w-full max-w-xl flex-col items-center justify-center px-2 sm:px-4",
          className
        )}
        role="region"
        aria-label="Client testimonials"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <p className="sr-only" aria-live="polite">
          Showing testimonial {currentIndex + 1} of {total}: {current?.name}
        </p>

        <div className="relative mb-2 h-[30rem] w-full max-w-[22rem] sm:h-[32rem] sm:max-w-[24rem]">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex;
            const isPrevCard = index === (currentIndex + 1) % total;
            const isNextCard = index === (currentIndex + 2) % total;

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null;

            const shortDescription = getShortText(testimonial.description);
            const isTruncated =
              (testimonial.description || "").trim().split(/\s+/).length >
              truncateWords;
            const rating = getRating(testimonial.rating);

            const stackOffset = isCurrentCard ? 0 : isPrevCard ? 14 : 28;
            const stackScale = isCurrentCard ? 1 : isPrevCard ? 0.96 : 0.92;
            const stackRotate = isCurrentCard ? 0 : isPrevCard ? -2 : -4;

            return (
              <article
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-3xl border border-[#6fc2b3] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-transform duration-300 ease-out",
                  isCurrentCard
                    ? "cursor-grab active:cursor-grabbing"
                    : "pointer-events-none select-none",
                  "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#2c73df]"
                )}
                style={{
                  zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                  transform: `translateY(${stackOffset}px) scale(${stackScale}) rotate(${stackRotate}deg)`,
                }}
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="KOLI Infotech" />

                {showArrows && isCurrentCard && (
                  <div className="absolute inset-x-0 top-3 z-10 flex justify-between px-3 sm:px-4">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2c73df] shadow-md transition hover:bg-slate-50 hover:text-[#1e5bb8]"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2c73df] shadow-md transition hover:bg-slate-50 hover:text-[#1e5bb8]"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                )}

                {/* Hide content on stacked cards — only the solid card edge peeks behind */}
                <div
                  className={cn(
                    "flex h-full flex-col items-center px-5 pb-5 pt-14 sm:px-6 sm:pt-16",
                    !isCurrentCard && "invisible"
                  )}
                >
                  <div
                    className="testimonial-avatar mb-3 flex-shrink-0 overflow-hidden rounded-full border-[3px] border-slate-800 bg-slate-100 shadow-md"
                    style={{ width: 80, height: 80, minWidth: 80, minHeight: 80 }}
                  >
                    {isCurrentCard && (
                      <Image
                        src={testimonial.avatar}
                        alt={`${testimonial.name} — client photo`}
                        width={80}
                        height={80}
                        className="h-full w-full rounded-full object-cover object-center"
                        style={{ width: "100%", height: "100%" }}
                        loading="lazy"
                      />
                    )}
                  </div>

                  <div
                    className="mb-3 flex shrink-0 items-center gap-1 text-amber-400"
                    aria-label={
                      isCurrentCard ? `${rating} out of 5 stars` : undefined
                    }
                  >
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={cn(
                          "h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]",
                          starIndex < rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-transparent text-slate-300"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                    {isCurrentCard && (
                      <meta
                        itemProp="reviewRating"
                        content={String(rating)}
                      />
                    )}
                  </div>

                  <blockquote
                    className="mb-3 min-h-0 w-full flex-1 overflow-hidden"
                    itemProp={isCurrentCard ? "reviewBody" : undefined}
                  >
                    <p className="m-0 line-clamp-5 text-center text-sm italic leading-relaxed text-slate-700 sm:text-[0.95rem]">
                      &ldquo;{shortDescription}&rdquo;
                    </p>
                    {isCurrentCard &&
                      isTruncated &&
                      typeof onReadMore === "function" && (
                        <div className="mt-2 text-center">
                          <button
                            type="button"
                            onClick={() => onReadMore(testimonial)}
                            className="inline border-0 bg-transparent p-0 text-sm font-semibold not-italic text-[#2c73df] hover:underline"
                          >
                            Read more
                          </button>
                        </div>
                      )}
                  </blockquote>

                  {/* Always reserve space for reviewer details */}
                  <div className="mt-auto w-full shrink-0 border-t border-slate-200 pt-3 text-center">
                    <h3
                      className="m-0 text-lg font-bold capitalize text-slate-900 sm:text-xl"
                      itemProp={isCurrentCard ? "author" : undefined}
                    >
                      {testimonial.name || "Client"}
                    </h3>
                    <p className="mt-1 mb-0 text-sm font-medium text-slate-600">
                      {testimonial.designation || "Client"}
                    </p>
                    {testimonial.company ? (
                      <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {testimonial.company}
                      </span>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {showDots && total > 1 && (
          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-1"
            role="tablist"
            aria-label="Testimonial pagination"
          >
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to testimonial ${index + 1}: ${item.name}`}
                onClick={() => goTo(index)}
                className="inline-flex h-11 w-11 items-center justify-center border-0 bg-transparent p-0"
              >
                <span
                  className={cn(
                    "block h-2.5 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-7 bg-[#2c73df]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  )}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

TestimonialCarousel.displayName = "TestimonialCarousel";

export { TestimonialCarousel };
