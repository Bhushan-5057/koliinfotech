import React, { Fragment, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import caseStudiesData from "@/data/caseStudies.json";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";
import { resolveContentImage } from "@/lib/resolveContentImage";
import "./CaseStudiesPage.css";

const BRAND_BLUE = "#3f689f";
const SKY = "#60a5fa";

const CaseStudiesPage = () => {
  const studies = useMemo(
    () => (Array.isArray(caseStudiesData) ? caseStudiesData : []),
    []
  );
  const industries = useMemo(
    () => ["All", ...new Set(studies.map((s) => s.industry).filter(Boolean))],
    [studies]
  );

  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState("All");
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisibleStats(true), 250);
    return () => clearTimeout(timer);
  }, []);

  const filtered = studies.filter((item) => {
    const matchesIndustry = industry === "All" || item.industry === industry;
    const q = query.trim().toLowerCase();
    if (!q) return matchesIndustry;
    const haystack = [
      item.title,
      item.industry,
      item.clientType,
      ...(item.technologies || []),
    ]
      .join(" ")
      .toLowerCase();
    return matchesIndustry && haystack.includes(q);
  });

  const aggregateStats = [
    { label: "Case Studies", value: `${studies.length}+` },
    { label: "Industries", value: `${industries.length - 1}` },
    { label: "Avg. Engagement", value: "5 mo" },
    { label: "Client Satisfaction", value: "98%" },
  ];

  return (
    <Fragment>
      <Head>
        <title>Case Studies | KOLI Infotech</title>
        <meta
          name="description"
          content="Explore KOLI Infotech case studies across healthcare, logistics, FinTech, e-commerce, ERP, education, and more — real challenges, solutions, and measurable results."
        />
      </Head>

      <ServiceHeroBackground>
        <section
          className="d-flex align-items-center"
          style={{
            flexGrow: 1,
            width: "100%",
            paddingTop: "clamp(80px, 12vh, 140px)",
            paddingBottom: "clamp(60px, 8vh, 100px)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8 text-center">
                <span className="cs-hero-badge">Case Studies</span>
                <h1
                  className="mb-4"
                  style={{
                    fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)",
                    lineHeight: "1.25",
                    color: BRAND_BLUE,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Outcomes Engineered for Real Businesses
                </h1>
                <div
                  className="mx-auto"
                  style={{
                    width: "40px",
                    height: "3px",
                    background: `linear-gradient(90deg, ${BRAND_BLUE}, ${SKY})`,
                    marginBottom: "2.5rem",
                    borderRadius: "4px",
                  }}
                />
                <p
                  className="mx-auto"
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "1.8",
                    color: "#555",
                    maxWidth: "700px",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  Explore how KOLI Infotech partners with ambitious teams to solve complex
                  product, platform, and operations challenges — with measurable impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ServiceHeroBackground>

      <section className="cs-stats-strip">
        <div className="container">
          <div className="cs-stats-grid">
            {aggregateStats.map((stat) => (
              <div key={stat.label} className={`cs-stat ${visibleStats ? "is-visible" : ""}`}>
                <div className="cs-stat-value">{stat.value}</div>
                <div className="cs-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-filters-section">
        <div className="container">
          <div className="cs-filters-bar">
            <div className="cs-search-wrap">
              <label htmlFor="cs-search" className="visually-hidden">
                Search case studies
              </label>
              <input
                id="cs-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, industry, or technology..."
                className="cs-search-input"
              />
            </div>
            <div className="cs-industry-filters" role="tablist" aria-label="Filter by industry">
              {industries.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={industry === item}
                  className={`cs-filter-chip ${industry === item ? "is-active" : ""}`}
                  onClick={() => setIndustry(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="cs-results-meta">
            Showing <strong>{filtered.length}</strong> case{" "}
            {filtered.length === 1 ? "study" : "studies"}
          </div>

          <div className="row g-4">
            {filtered.map((study) => {
              const imageSrc = resolveContentImage(study.image);
              return (
                <div className="col-lg-6" key={study.id || study.slug}>
                  <Link href={`/case-studies/${study.slug}`} className="cs-card-link">
                    <article className="cs-card">
                      <div className="cs-card-media">
                        {imageSrc ? (
                          <Image
                            src={imageSrc}
                            alt={study.title}
                            fill
                            sizes="(max-width: 992px) 100vw, 50vw"
                            className="cs-card-image"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                          />
                        ) : (
                          <div className="cs-card-placeholder" aria-hidden="true">
                            <span>{study.industry}</span>
                          </div>
                        )}
                        <div className="cs-card-media-overlay" aria-hidden="true" />
                        <span className="cs-card-media-label">{study.industry}</span>
                      </div>
                      <div className="cs-card-body">
                        <div className="cs-card-meta">
                          <span className="cs-card-industry">{study.industry}</span>
                          <span className="cs-card-duration">{study.duration}</span>
                        </div>
                        <h2 className="cs-card-title">{study.title}</h2>
                        <p className="cs-card-client">{study.clientType}</p>
                        <p className="cs-card-excerpt">{study.challenge}</p>
                        <div className="cs-tech-row">
                          {(study.technologies || []).slice(0, 4).map((tech) => (
                            <span key={tech} className="cs-tech-badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="cs-card-cta">View case study →</span>
                      </div>
                    </article>
                  </Link>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="cs-empty">
              <h3>No matching case studies</h3>
              <p>Try another industry filter or clear your search.</p>
            </div>
          )}
        </div>
      </section>

      <section className="cs-cta-section">
        <div className="container text-center">
          <h2>Have a challenge like these?</h2>
          <p>
            Share your product or platform goals — we will help you shape a clear delivery plan.
          </p>
          <Link href="/contact-us" className="cs-cta-btn">
            Start a Conversation
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default CaseStudiesPage;
