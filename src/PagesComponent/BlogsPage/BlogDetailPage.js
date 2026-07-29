import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { resolveContentImage } from "@/lib/resolveContentImage";
import "./BlogDetailPage.css";

const BRAND_BLUE = "#3f689f";
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://koliinfotech.com"
).replace(/\/$/, "");

const slugify = (text) =>
  String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function renderRichContent(content) {
  if (!content) return null;
  const blocks = String(content).split("\n\n");

  return blocks.map((block, idx) => {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    const isList = lines.length > 0 && lines.every((l) => l.startsWith("- "));

    if (isList) {
      return (
        <ul key={idx} className="blog-detail-list">
          {lines.map((line) => (
            <li key={line}>{line.replace(/^- /, "")}</li>
          ))}
        </ul>
      );
    }

    return (
      <p key={idx} className="blog-detail-paragraph">
        {block}
      </p>
    );
  });
}

const BlogDetailPage = ({ blog, relatedBlogs = [] }) => {
  const [activeSection, setActiveSection] = useState("");
  const [readProgress, setReadProgress] = useState(0);
  const [shareUrl, setShareUrl] = useState("");
  const articleRef = useRef(null);

  const tocItems = useMemo(() => {
    const items = [];
    (blog?.sections || []).forEach((section) => {
      items.push({ id: slugify(section.heading), label: section.heading });
    });
    if (blog?.conclusion) items.push({ id: "conclusion", label: "Conclusion" });
    if (blog?.faqs?.length) items.push({ id: "faqs", label: "FAQs" });
    return items;
  }, [blog]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, [blog?.slug]);

  useEffect(() => {
    if (!tocItems.length) return undefined;
    const observers = [];

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(item.id);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [tocItems, blog?.slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (!articleRef.current) return;
      const rect = articleRef.current.getBoundingClientRect();
      const articleTop = rect.top + window.scrollY;
      const articleHeight = articleRef.current.offsetHeight;
      const scrolled = window.scrollY - articleTop + window.innerHeight * 0.3;
      const progress = Math.min(100, Math.max(0, (scrolled / articleHeight) * 100));
      setReadProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blog?.slug]);

  if (!blog) {
    return (
      <section className="container py-5 text-center">
        <h2 style={{ color: BRAND_BLUE, fontWeight: 800 }}>Blog not found</h2>
        <Link href="/blogs" style={{ color: BRAND_BLUE, fontWeight: 700 }}>
          Back to Blogs
        </Link>
      </section>
    );
  }

  const sections = blog.sections || [];
  const hasSections = sections.length > 0;
  const seoDescription =
    blog.seoDescription || blog.excerpt || blog.description || "";
  const coverImage = resolveContentImage(blog.banner || blog.image);
  const blogUrl = `${SITE_URL}/blogs/${blog.slug}`;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: `${SITE_URL}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: blogUrl,
      },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: seoDescription,
    mainEntityOfPage: blogUrl,
    image: coverImage ? [coverImage] : undefined,
    datePublished: blog.publishedAt || undefined,
    dateModified: blog.updatedAt || blog.publishedAt || undefined,
    author: {
      "@type": "Organization",
      name: "KOLI Infotech",
    },
    publisher: {
      "@type": "Organization",
      name: "KOLI Infotech",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
    },
  };

  const shareLinks = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl || ""
      )}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl || ""
      )}&text=${encodeURIComponent(blog.title || "")}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(
        `${blog.title} ${shareUrl || ""}`
      )}`,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>{blog.title} | KOLI Infotech</title>
        <meta name="description" content={seoDescription.slice(0, 160)} />
        <meta property="og:title" content={`${blog.title} | KOLI Infotech`} />
        <meta property="og:description" content={seoDescription.slice(0, 160)} />
        <meta property="og:url" content={blogUrl} />
        {coverImage && <meta property="og:image" content={coverImage} />}
        <meta name="twitter:title" content={`${blog.title} | KOLI Infotech`} />
        <meta name="twitter:description" content={seoDescription.slice(0, 160)} />
        {coverImage && <meta name="twitter:image" content={coverImage} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleJsonLd),
          }}
        />
      </Head>

      <div className="blog-read-progress" aria-hidden="true">
        <div style={{ width: `${readProgress}%` }} />
      </div>

      <section className="blog-detail-shell">
        <div className="container">
          <nav className="blog-detail-breadcrumb" aria-label="Breadcrumb">
            <Link href="/blogs">Blogs</Link>
            <span>/</span>
            <span>{blog.title}</span>
          </nav>

          <div className="row g-4 g-xl-5">
            <div className="col-lg-8">
              <article ref={articleRef} className="blog-detail-article">
                {coverImage ? (
                  <div className="blog-detail-cover">
                    <Image
                      src={coverImage}
                      alt={blog.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 68vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                ) : (
                  <div className="blog-detail-cover-placeholder" aria-hidden="true">
                    <span>{blog.category || "Insights"}</span>
                  </div>
                )}

                <div className="blog-detail-content">
                  <div className="blog-detail-meta">
                    {blog.category && (
                      <span className="blog-detail-category">{blog.category}</span>
                    )}
                    {blog.readTime && <span>{blog.readTime}</span>}
                    {blog.publishedDate && (
                      <>
                        <span aria-hidden="true">•</span>
                        <span>{blog.publishedDate}</span>
                      </>
                    )}
                  </div>

                  <h1>{blog.title}</h1>
                  <div className="blog-detail-accent" />

                  <p className="blog-detail-excerpt">
                    {blog.excerpt || blog.description}
                  </p>

                  {Array.isArray(blog.tags) && blog.tags.length > 0 && (
                    <div className="blog-detail-tags">
                      {blog.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}

                  <div className="blog-share-row">
                    <span>Share</span>
                    {shareLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Share on ${link.label}`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>

                  {hasSections &&
                    sections.map((section, idx) => {
                      const sectionId = slugify(section.heading);
                      const isCallout = section.type === "callout";
                      return (
                        <section
                          key={sectionId}
                          id={sectionId}
                          className={`blog-detail-section ${
                            isCallout ? "is-callout" : ""
                          }`}
                          style={{
                            marginTop: idx === 0 ? "8px" : undefined,
                          }}
                        >
                          <h2>{section.heading}</h2>
                          {renderRichContent(section.content)}
                        </section>
                      );
                    })}

                  {blog.conclusion && (
                    <section id="conclusion" className="blog-detail-section">
                      <h2>Conclusion</h2>
                      {renderRichContent(blog.conclusion)}
                    </section>
                  )}

                  {Array.isArray(blog.faqs) && blog.faqs.length > 0 && (
                    <section id="faqs" className="blog-detail-section blog-faq">
                      <h2>Frequently Asked Questions</h2>
                      <div className="blog-faq-list">
                        {blog.faqs.map((faq) => (
                          <details key={faq.question} className="blog-faq-item">
                            <summary>{faq.question}</summary>
                            <p>{faq.answer}</p>
                          </details>
                        ))}
                      </div>
                    </section>
                  )}

                  {blog.cta && (
                    <div className="blog-detail-cta">
                      <h3>{blog.cta.heading}</h3>
                      <p>{blog.cta.text}</p>
                      <Link href={blog.cta.buttonLink || "/contact-us"}>
                        {blog.cta.buttonText || "Contact Us"}
                      </Link>
                    </div>
                  )}

                  <div className="blog-author-row">
                    <div className="blog-author-avatar" aria-hidden="true">
                      KI
                    </div>
                    <div>
                      <div className="blog-author-name">
                        {blog.author || "Editorial Team"}
                      </div>
                      <div className="blog-author-org">KOLI Infotech</div>
                    </div>
                  </div>
                </div>
              </article>

              <div className="blog-back-link">
                <Link href="/blogs">← Back to all blogs</Link>
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="blog-detail-aside">
                {tocItems.length > 0 && (
                  <div className="blog-aside-card">
                    <h3>In This Article</h3>
                    <nav className="blog-toc" aria-label="Table of contents">
                      {tocItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={isActive ? "is-active" : ""}
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById(item.id)?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }}
                          >
                            {item.label}
                          </a>
                        );
                      })}
                    </nav>
                  </div>
                )}

                <div className="blog-aside-card">
                  <h3>More Insights</h3>
                  <p className="blog-aside-sub">Explore more articles from our team</p>
                  {relatedBlogs.length === 0 ? (
                    <p className="blog-aside-empty">No other articles available right now.</p>
                  ) : (
                    <div className="blog-related-list">
                      {relatedBlogs.map((item) => {
                        const relatedImage = resolveContentImage(item.image);
                        return (
                        <Link
                          key={item.id || item.slug}
                          href={`/blogs/${item.slug}`}
                          className="blog-related-item"
                        >
                          <div className="blog-related-thumb">
                            {relatedImage ? (
                              <Image
                                src={relatedImage}
                                alt={item.title}
                                fill
                                sizes="80px"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                              />
                            ) : (
                              <span>{(item.category || "KI").slice(0, 2)}</span>
                            )}
                          </div>
                          <div>
                            {item.category && (
                              <span className="blog-related-cat">{item.category}</span>
                            )}
                            <h4>{item.title}</h4>
                            <span className="blog-related-cta">Read article →</span>
                          </div>
                        </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BlogDetailPage;
