import React, { useMemo, useState, useCallback } from "react";
import Image from "next/image";
import galleryJson from "@/data/gallery.json";
import lifeAtKoliJson from "@/data/lifeAtKoli.json";
import ImageLightbox from "@/commonComponent/ImageLightbox";
import "./MissionSection.css";

const MissionSection = () => {
  const lifeAtKoliData = useMemo(
    () =>
      (lifeAtKoliJson || []).map((item) => ({
        ...item,
        image: item.image || item.icon,
      })),
    []
  );

  const galleryData = useMemo(() => {
    const sizes = ["large", "medium", "small", "medium", "large", "small", "medium"];
    return (galleryJson || []).map((item, index) => ({
      ...item,
      venue: item.venue || item.location,
      size: sizes[index % sizes.length],
    }));
  }, []);

  return (
    <section className="culture-values-section">
      <div className="container" data-aos="fade-up">
        <div className="culture-heading-wrap">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-500 mb-3">
            Our Workplace Culture
          </span>
          <h2>
            Life at <span className="text-[#23366c]">KOLI Infotech</span>
          </h2>
          <div className="cst-hr-for-process" />
          <p>
            At <span>KOLI</span> Infotech, we believe great software is built by happy, motivated
            people. Our culture is rooted in collaboration, continuous learning, and celebrating
            every milestone together — from project launches to festival celebrations.
          </p>
        </div>

        <div className="culture-values-grid" data-aos="fade-up">
          {lifeAtKoliData.length === 0 ? (
            <div className="text-center py-10" style={{ gridColumn: "1 / -1" }}>
              <p>No data available at the moment.</p>
            </div>
          ) : (
            lifeAtKoliData.map(({ title, description, image, id }, index) => (
              <article
                className="culture-value-card"
                key={`${title}-${index}`}
                style={{ fontWeight: "bold" }}
              >
                <div className="culture-value-icon-wrap">
                  <Image
                    src={image}
                    alt={title}
                    width={50}
                    height={50}
                    className="culture-value-icon"
                    unoptimized
                  />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))
          )}
        </div>
      </div>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container max-w-4xl text-center">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4">
            A Place Where People Come First
          </h3>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg m-0">
            We invest in our team&apos;s growth through training programs, flexible work policies,
            team outings, and an open-door leadership culture. Whether you&apos;re a developer,
            designer, or project manager — you&apos;ll find a supportive environment that helps you
            do your best work.
          </p>
        </div>
      </section>

      <LightGridGallery items={galleryData} />
    </section>
  );
};

const LightGridGallery = ({ items }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const navigate = useCallback(
    (direction) => {
      if (!items?.length) return;
      setLightboxIndex((prev) => {
        const next = (prev + direction + items.length) % items.length;
        return next;
      });
    },
    [items]
  );

  return (
    <div className="lg-section">
      <div className="container">
        <div className="lg-header text-center" data-aos="fade-up">
          <span className="lg-badge">Moments That Matter</span>
          <h2 className="lg-title">
            Our Culture <span className="lg-accent">Gallery</span>
          </h2>
          <div className="lg-header-rule" aria-hidden="true" />
          <p className="lg-subtext">
            A visual journey through the events, celebrations, and collaborative milestones that
            define life at KOLI Infotech. Click any image to view in full size.
          </p>
        </div>

        <div className="lg-grid">
          {!items?.length ? (
            <div className="text-center py-10" style={{ gridColumn: "1 / -1" }}>
              <p>No gallery data available at the moment.</p>
            </div>
          ) : (
            items.map((img, idx) => (
              <GalleryItem
                key={img.id || idx}
                item={img}
                onClick={() => setLightboxIndex(idx)}
              />
            ))
          )}
        </div>
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={items}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={navigate}
        />
      )}
    </div>
  );
};

const GalleryItem = ({ item, onClick }) => {
  const imgSrc = item.image || "/images/placeholder.jpg";

  return (
    <div className={`lg-item lg-item-${item.size}`}>
      <div className="lg-item-inner">
        <button
          type="button"
          className="lg-image-wrapper lg-image-button"
          onClick={onClick}
          aria-label={`View ${item.title} in full size`}
        >
          <Image
            src={imgSrc}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
            className="lg-img"
            style={{ objectFit: "cover" }}
          />
          <div className="lg-overlay">
            <div className="lg-meta">
              <h3 className="lg-item-title">{item.title}</h3>
              <p className="lg-item-location">{item.venue}</p>
            </div>
          </div>
        </button>
      </div>

      
    </div>
  );
};

export default MissionSection;
