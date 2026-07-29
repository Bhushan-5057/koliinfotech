import React, { Fragment, useEffect, useMemo, useState, memo } from "react";
import testimonialData from "@/data/testimonial.json";
import Image from "next/image";
import { IconClose } from "@/components/icons/InlineIcons";
import { TestimonialCarousel } from "@/components/ui/testimonial";

const OurValuableClients = () => {
  const [modalData, setModalData] = useState(null);
  const [open, setOpen] = useState(false);

  const testimonials = useMemo(
    () =>
      (testimonialData || []).map((client) => ({
        id: client.id,
        name: client.name || "Client",
        avatar:
          client.avatar ||
          client.profilePicture ||
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
        description: client.review || client.description || "",
        designation: client.designation || client.role || "Client",
        company: client.company || "",
        rating: client.rating ?? 5,
      })),
    []
  );

  useEffect(() => {
    if (!open) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setModalData(null);
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleOpenModal = (client) => {
    setModalData(client);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setModalData(null);
    setOpen(false);
  };

  if (!testimonials.length) return null;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KOLI Infotech",
    review: testimonials.map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.name,
      },
      reviewBody: item.description,
      reviewRating: {
        "@type": "Rating",
        ratingValue: item.rating,
        bestRating: 5,
      },
    })),
  };

  return (
    <Fragment>
      <section
        className="ezy__testimonial13 light mb-4 mt-5"
        aria-labelledby="valuable-clients-heading"
      >
        <div className="container">
          <div className="row justify-content-center mb-4 mb-md-5">
            <div className="col-lg-6 col-xl-5 text-center">
              <h2
                id="valuable-clients-heading"
                className="ezy__testimonial13-heading mb-3"
              >
                Our Valuable <span className="text-[#2c73df]"> Clients </span>
              </h2>
              <div className="cst-hr-for-process mb-5" />
            </div>
          </div>

          <TestimonialCarousel
            testimonials={testimonials}
            showArrows
            showDots
            onReadMore={handleOpenModal}
            className="pb-2"
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
          />

          {open && modalData && (
            <div
              className="our-client-modal-overlay"
              onClick={handleCloseModal}
            >
              <div
                className="our-client-modal-content"
                role="dialog"
                aria-modal="true"
                aria-labelledby="our-client-modal-name"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="our-client-modal-close"
                  onClick={handleCloseModal}
                  aria-label="Close review"
                >
                  <IconClose />
                </button>

                <div className="our-client-modal-avatar-wrap">
                  <Image
                    src={modalData.avatar}
                    alt={`${modalData.name} — client photo`}
                    width={100}
                    height={100}
                    loading="lazy"
                    sizes="(max-width: 768px) 20vw, 80px"
                    className="our-client-modal-avatar"
                    style={{ width: 100, height: 100 }}
                  />
                </div>

                <h3 id="our-client-modal-name" className="our-client-modal-name">
                  {modalData.name}
                </h3>
                <p className="our-client-modal-role">
                  {modalData.designation}
                  {modalData.company ? `, ${modalData.company}` : ""}
                </p>
                <p className="our-client-modal-review">
                  {modalData.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default memo(OurValuableClients);
