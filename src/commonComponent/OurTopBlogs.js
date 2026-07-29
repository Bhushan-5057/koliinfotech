import React, { useRef, Fragment, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import blogsData from "@/data/blogs.json";
import { resolveContentImage } from "@/lib/resolveContentImage";
import "./OurTopBlogs.css";

const BRAND_BLUE = "#3f689f";

const BlogCard = memo(function BlogCard({ blog }) {
  const excerpt = blog?.excerpt || blog?.description;
  const imageSrc = resolveContentImage(blog?.image);
  return (
    <Link
      href={`/blogs/${blog?.slug}`}
      style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
    >
      <div className="blog-card-premium" style={{ cursor: "pointer" }}>
        <div className="blog-image-wrapper">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={blog?.title || "Blog image"}
              className="blog-image-premium"
              fill
              sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          ) : (
            <div className="blog-image-placeholder" aria-hidden="true">
              <span>{blog?.category || "Insights"}</span>
            </div>
          )}
          {blog?.category && <span className="blog-card-badge">{blog.category}</span>}
        </div>
        <div className="blog-content-premium">
          <div className="blog-card-meta">
            {blog?.readTime && <span>{blog.readTime}</span>}
            {blog?.publishedDate && <span>{blog.publishedDate}</span>}
          </div>
          <h3 className="blog-title-premium">{blog?.title}</h3>
          <p className="blog-desc-premium">{excerpt}</p>
          <div className="blog-footer-premium">
            <span className="read-more-link">
              Read Full Article
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
});

const OurTopBlogs = ({
  sectionTitle = "Our Top Blogs",
  sectionSubtitle = "Insights from our engineering team",
  limit = null,
  isGrid = true,
  showMoreButton = false,
  wrapperClassName = "py-5",
}) => {
  const carousel = useRef(null);
  const allBlogs = Array.isArray(blogsData) ? blogsData : [];
  const ourBlogs =
    limit !== undefined && limit !== null
      ? allBlogs.slice(0, limit)
      : isGrid
        ? allBlogs
        : allBlogs.slice(0, 3);

  return (
    <Fragment>
      <section className={wrapperClassName}>
        <div className="container">
          <div className="text-center mb-5 section-fade-up mt-10 mb-10">
            <h2
              className="fw-900 mb-3"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                color: BRAND_BLUE,
                letterSpacing: "-0.03em",
              }}
            >
              {sectionTitle}
            </h2>
            <p
              className="mx-auto"
              style={{
                maxWidth: "650px",
                fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
                color: "#64748b",
                fontWeight: "500",
                lineHeight: "1.7",
              }}
            >
              {sectionSubtitle}
            </p>
            <div
              className="mx-auto mt-4"
              style={{
                width: "50px",
                height: "4px",
                background: `linear-gradient(90deg, ${BRAND_BLUE}, #60a5fa)`,
                borderRadius: "10px",
              }}
            />
          </div>

          {ourBlogs.length === 0 ? (
            <div className="empty-blogs-container section-fade-in">
              <div className="mb-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <line x1="10" y1="9" x2="8" y2="9"></line>
                </svg>
              </div>
              <h3>Blogs are currently not available</h3>
              <p className="mb-0">Please check back later for fresh insights and updates.</p>
            </div>
          ) : (
            <Fragment>
              {isGrid ? (
                <div className="row g-4 section-fade-up">
                  {ourBlogs.map((blog, index) => (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 section-fade-up"
                      key={blog?.id || index}
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      <BlogCard blog={blog} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="section-fade-up">
                  <div
                    className="d-flex overflow-auto scrollbar-hidden pb-4"
                    ref={carousel}
                    style={{
                      scrollSnapType: "x mandatory",
                      scrollBehavior: "smooth",
                      gap: "24px",
                    }}
                  >
                    {ourBlogs.map((blog, index) => (
                      <div
                        key={blog?.id || index}
                        className="flex-shrink-0 carousel-item-width"
                        style={{ scrollSnapAlign: "start" }}
                      >
                        <BlogCard blog={blog} />
                      </div>
                    ))}
                  </div>

                  {(showMoreButton || allBlogs.length > ourBlogs.length) && (
                    <div className="d-flex justify-content-center mt-5">
                      <Link href="/blogs" className="explore-more-btn touch-target">
                        Explore More Blogs
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </Fragment>
          )}
        </div>
      </section>

      
    </Fragment>
  );
};

export default memo(OurTopBlogs);
