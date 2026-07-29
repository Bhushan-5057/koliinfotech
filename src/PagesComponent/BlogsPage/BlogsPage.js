import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import OurTopBlogs from "@/commonComponent/OurTopBlogs";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";
import blogsData from "@/data/blogs.json";
import { resolveContentImage } from "@/lib/resolveContentImage";
import "./BlogsPage.css";

const BRAND_BLUE = "#3f689f";
const SKY = "#60a5fa";

const BlogsPage = () => {
  const allBlogs = Array.isArray(blogsData) ? blogsData : [];
  const featured = allBlogs[0];
  const featuredImage = resolveContentImage(featured?.image);
  const categories = [...new Set(allBlogs.map((b) => b.category).filter(Boolean))];

  return (
    <Fragment>
      <Head>
        <title>Blogs & Insights | KOLI Infotech</title>
        <meta
          name="description"
          content="Read technology insights, software development guides, cloud, AI, and digital transformation articles from KOLI Infotech's expert team."
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
                <span className="blog-hero-badge">Knowledge Center</span>
                <h1
                  className="mb-4"
                  style={{
                    fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)",
                    lineHeight: "1.25",
                    color: BRAND_BLUE,
                    fontWeight: "800",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Insights, Innovations & Engineering Excellence
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
                    maxWidth: "680px",
                    margin: 0,
                    fontWeight: "500",
                  }}
                >
                  Engineering perspectives, product lessons, and delivery playbooks from the
                  KOLI team. Explore in-depth articles across development, cloud, AI, mobile,
                  and business transformation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ServiceHeroBackground>

      {featured && (
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-500 mb-4">
              Featured Article
            </span>
            <Link
              href={`/blogs/${featured.slug}`}
              className="block group"
              style={{ textDecoration: "none" }}
            >
              <div className="blog-featured-card grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:border-brand-200 hover:shadow-lg transition-all">
                <div className="blog-featured-media relative">
                  {featuredImage ? (
                    <Image
                      src={featuredImage}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      priority
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-end p-6"
                      style={{
                        background:
                          "linear-gradient(135deg, #3f689f 0%, #5b8ec4 50%, #60a5fa 100%)",
                      }}
                      aria-hidden="true"
                    >
                      <span className="text-white font-extrabold uppercase tracking-wider text-sm">
                        {featured.category || "Featured"}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-500">
                      {featured.category}
                    </span>
                    {featured.readTime && (
                      <span className="text-xs font-semibold text-slate-400">
                        {featured.readTime}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-2 mb-4 group-hover:text-brand-600 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {featured.excerpt || featured.description}
                  </p>
                  <span className="text-brand-500 font-bold text-sm">
                    Read full article →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="py-8 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold border border-brand-100"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <OurTopBlogs
        isGrid={true}
        sectionTitle="All Articles"
        sectionSubtitle="Browse our complete library of technology insights, guides, and industry perspectives."
        wrapperClassName="pt-5 pb-5"
      />

      <section className="py-16 bg-brand-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
            Need Expert Guidance?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Our team turns insights into action. Whether you need a custom app, cloud migration,
            or AI integration — we&apos;re ready to help.
          </p>
          <Link href="/contact-us" className="px-8 py-3 rounded-full bg-brand-500 text-white font-bold text-sm uppercase tracking-wide hover:bg-brand-600 hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline shadow-md">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default BlogsPage;
