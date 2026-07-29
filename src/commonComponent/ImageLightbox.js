import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageLightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(-1);
      if (e.key === "ArrowRight") onNavigate(1);
    },
    [onClose, onNavigate]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  if (currentIndex === null || !images?.[currentIndex]) return null;

  const current = images[currentIndex];
  const total = images.length;

  return (
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery viewer"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border-none cursor-pointer transition-colors"
        aria-label="Close gallery"
      >
        <X size={24} />
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border-none cursor-pointer transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border-none cursor-pointer transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[60vh] md:h-[70vh] rounded-xl overflow-hidden">
          <Image
            src={current.image}
            alt={current.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
        </div>
        <div className="mt-4 text-center text-white px-4">
          <h3 className="text-lg md:text-xl font-bold m-0 mb-1">{current.title}</h3>
          {current.venue && (
            <p className="text-white/70 text-sm m-0">{current.venue}</p>
          )}
          {total > 1 && (
            <p className="text-white/50 text-xs mt-2 m-0">
              {currentIndex + 1} / {total}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
