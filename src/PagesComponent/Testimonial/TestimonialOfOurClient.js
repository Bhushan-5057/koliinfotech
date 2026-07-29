import React, { Fragment, useMemo, useState } from "react";
import testimonialData from "@/data/testimonial.json";
import Image from "next/image";
import { Quote } from "lucide-react";

const TestimonialOfOurClient = () => {
  const data = useMemo(
    () =>
      (testimonialData || []).map((client) => ({
        ...client,
        profilePicture: client.profilePicture || client.avatar,
        designation: client.designation || client.role || "Client",
      })),
    []
  );
  const [selectedReview, setSelectedReview] = useState(null);

  const openModal = (review) => {
    setSelectedReview(review);
  };

  const closeModal = () => {
    setSelectedReview(null);
  };
return (
    <Fragment>
      <section className="testimonial-section container-fluid">
        
        <h2 className="section-title" data-aos="fade-down">
          Stories of Success
        </h2>
        <div className="testimonial-wrapper container">
          
          <div className="row gx-4 gy-4 justify-content-start">
            {data.length > 0 ? (
              data.map(
                (
                  { name, review, profilePicture, designation = "Client" },
                  index
                ) => (
                  <div
                    className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3"
                    key={index}
                    data-aos="fade-up"
                  >
                    <div className="testimonial-card p-3 h-100">
                      <div className="quote-mark quote-start">
                        <Quote size={18} />
                      </div>

                      <div className="client-image mt-3">
                        <Image
                          src={profilePicture}
                          alt={name ? `${name} — client photo` : "Client photo"}
                          width={80}
                          height={80}
                          loading="lazy"
                          decoding="async"
                          className="rounded-full object-cover"
                          style={{ width: 80, height: 80 }}
                        />
                      </div>

                      <div className="client-info text-start">
                        <h3 className="client-name">{name}</h3>
                        <p className="client-designation">{designation}</p>
                      </div>

                      <p className="client-review text-start">
                        {review.length > 250 ? (
                          <>
                            {review.slice(0, 250)}...
                            <button
                              onClick={() => openModal({ name, review })}
                              className="see-more-btn"
                              style={{
                                background: "none",
                                border: "none",
                                color: "#007bff",
                                cursor: "pointer",
                                paddingLeft: "5px",
                              }}
                            >
                              See More
                            </button>
                          </>
                        ) : (
                          review
                        )}
                      </p>

                      <div className="quote-mark quote-end">
                        <Quote size={18} style={{ transform: "rotate(180deg)" }} />
                      </div>
                    </div>
                  </div>
                )
              )
            ) : (
              <div className="no-testimonials">
                <p>🚀 No testimonials available yet!</p>
              </div>
            )}
          </div>
        </div>

        {selectedReview && (
          <div
            className="modal d-block"
            tabIndex="-1"
            role="dialog"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(5px)",
            }}
          >
            <div
              className="modal-dialog modal-dialog-centered p-4 p-md-5"
              role="document"
            >
              <div className="modal-content ">
                <div className="modal-header">
                  <div className="quote-mark quote-start">
                    <Quote size={18} />
                  </div>
                  <h5 className="modal-title">
                    {selectedReview.name}'s Review
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <p className="text-start">{selectedReview.review}</p>
                </div>

                <div className="quote-mark1 quote-end">
                  <Quote size={18} style={{ transform: "rotate(180deg)" }} />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default TestimonialOfOurClient;
