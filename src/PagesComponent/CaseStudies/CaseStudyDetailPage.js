import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { resolveContentImage } from "@/lib/resolveContentImage";
import "./CaseStudyDetailPage.css";

const BRAND_BLUE = "#3f689f";
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://koliinfotech.com"
).replace(/\/$/, "");

const CaseStudyDetailPage = ({ study, related = [] }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(t);
  }, [study?.slug]);

  if (!study) {
    return (
      <section className="container py-5 text-center">
        <h2 style={{ color: BRAND_BLUE, fontWeight: 800 }}>Case study not found</h2>
        <Link href="/case-studies" style={{ color: BRAND_BLUE, fontWeight: 700 }}>
          Back to Case Studies
        </Link>
      </section>
    );
  }

  const coverImage = resolveContentImage(study.image);
  const caseStudyUrl = `${SITE_URL}/case-studies/${study.slug}`;
  const seoDescription = `${study.title} - ${study.industry} case study by KOLI Infotech. ${String(
    study.challenge || ""
  ).slice(0, 120)}`;
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
        name: "Case Studies",
        item: `${SITE_URL}/case-studies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: caseStudyUrl,
      },
    ],
  };
  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: seoDescription,
    url: caseStudyUrl,
    about: study.industry,
    provider: {
      "@type": "Organization",
      name: "KOLI Infotech",
      url: SITE_URL,
    },
    image: coverImage || undefined,
  };

  const timeline = [
    { title: "Challenge", body: study.challenge },
    { title: "Solution", body: study.solution },
    {
      title: "Implementation",
      body: (study.implementation || []).join(" "),
      list: study.implementation,
    },
    { title: "Results", body: (study.results || []).join(" "), list: study.results },
  ];

  return (
    <Fragment>
      <Head>
        <title>{study.title} | Case Study | KOLI Infotech</title>
        <meta
          name="description"
          content={seoDescription}
        />
        <meta property="og:title" content={`${study.title} | Case Study | KOLI Infotech`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={caseStudyUrl} />
        {coverImage && <meta property="og:image" content={coverImage} />}
        <meta name="twitter:title" content={`${study.title} | Case Study | KOLI Infotech`} />
        <meta name="twitter:description" content={seoDescription} />
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
            __html: JSON.stringify(caseStudyJsonLd),
          }}
        />
      </Head>

      <section className="csd-hero">
        <div className="container">
          <nav className="csd-breadcrumb" aria-label="Breadcrumb">
            <Link href="/case-studies">Case Studies</Link>
            <span>/</span>
            <span>{study.title}</span>
          </nav>

          <div className="csd-hero-grid">
            <div>
              <div className="csd-hero-tags">
                <span>{study.industry}</span>
                <span>{study.duration}</span>
              </div>
              <h1>{study.title}</h1>
              <p className="csd-client">{study.clientType}</p>
              <p className="csd-lead">{study.challenge}</p>
            </div>
            <div className={`csd-stat-panel ${animated ? "is-visible" : ""}`}>
              {(study.statistics || []).map((stat) => (
                <div key={stat.label} className="csd-stat-item">
                  <div className="csd-stat-value">{stat.value}</div>
                  <div className="csd-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="csd-body">
        <div className="container">
          <div className="row g-4 g-xl-5">
            <div className="col-lg-8">
              {coverImage ? (
                <div className="csd-cover">
                  <Image
                    src={coverImage}
                    alt={study.title}
                    fill
                    priority
                    sizes="(max-width: 992px) 100vw, 66vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              ) : (
                <div className="csd-media-placeholder" aria-hidden="true">
                  <span>{study.industry} Project Visual</span>
                </div>
              )}

              <ol className="csd-timeline">
                {timeline.map((step, idx) => (
                  <li key={step.title} className="csd-timeline-item">
                    <div className="csd-timeline-index">{idx + 1}</div>
                    <div>
                      <h2>{step.title}</h2>
                      {step.list?.length ? (
                        <ul>
                          {step.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{step.body}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>

              <div className="csd-impact">
                <h2>Business Impact</h2>
                <p>{study.businessImpact}</p>
              </div>

              {study.testimonial?.quote && (
                <blockquote className="csd-quote">
                  <p>“{study.testimonial.quote}”</p>
                  <footer>
                    <strong>{study.testimonial.author}</strong>
                    <span>{study.testimonial.role}</span>
                  </footer>
                </blockquote>
              )}
            </div>

            <div className="col-lg-4">
              <aside className="csd-aside">
                <div className="csd-aside-card">
                  <h3>Project Snapshot</h3>
                  <dl>
                    <div>
                      <dt>Industry</dt>
                      <dd>{study.industry}</dd>
                    </div>
                    <div>
                      <dt>Client Type</dt>
                      <dd>{study.clientType}</dd>
                    </div>
                    <div>
                      <dt>Duration</dt>
                      <dd>{study.duration}</dd>
                    </div>
                  </dl>
                </div>

                <div className="csd-aside-card">
                  <h3>Technologies</h3>
                  <div className="csd-tech-wrap">
                    {(study.technologies || []).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="csd-aside-card csd-aside-cta">
                  <h3>Build something similar?</h3>
                  <p>Let’s map your challenge into a practical delivery plan.</p>
                  <Link href="/contact-us" className="csd-btn">
                    Talk to Our Team
                  </Link>
                </div>

                {related.length > 0 && (
                  <div className="csd-aside-card">
                    <h3>Related Case Studies</h3>
                    <div className="csd-related">
                      {related.map((item) => {
                        const relatedImage = resolveContentImage(item.image);
                        return (
                          <Link key={item.slug} href={`/case-studies/${item.slug}`}>
                            <div className="csd-related-row">
                              <div className="csd-related-thumb">
                                {relatedImage ? (
                                  <Image
                                    src={relatedImage}
                                    alt={item.title}
                                    fill
                                    sizes="64px"
                                    style={{
                                      objectFit: "cover",
                                      objectPosition: "center",
                                    }}
                                  />
                                ) : (
                                  <span>{(item.industry || "CS").slice(0, 2)}</span>
                                )}
                              </div>
                              <div>
                                <span className="csd-related-industry">{item.industry}</span>
                                <strong>{item.title}</strong>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CaseStudyDetailPage;
