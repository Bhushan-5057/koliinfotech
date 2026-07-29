import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

const SolutionOnDemandHeroSection = dynamic(
  () => import("@/PagesComponent/SolutionOnDemand/HeroSection")
);
const SolutionOnDemandScreen = dynamic(
  () => import("@/PagesComponent/SolutionOnDemand/SolutionOnDemandScreen")
);
const ConsultationCTA = dynamic(() => import("@/commonComponent/ConsultationCTA"));
const FinalCTA = dynamic(() => import("@/commonComponent/FinalCTA"));

const SolutionOnDemand = () => {
  return (
    <Fragment>
      <Head>
        <title>On-Demand App Solutions | KOLI Infotech</title>
        <meta
          name="description"
          content="Custom on-demand apps with booking, payments, tracking & real-time chat. 40+ apps built for startups and enterprises by KOLI Infotech."
        />
      </Head>
      <SolutionOnDemandHeroSection />

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-500 mb-3">
                On-Demand Economy
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight mb-5">
                Build Apps That Connect Services With Customers Instantly
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The on-demand economy is transforming how businesses deliver services. From food
                delivery and ride-hailing to home services and healthcare — customers expect
                instant booking, real-time tracking, and seamless payments.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                At KOLI Infotech, we&apos;ve built 40+ on-demand applications for startups and
                enterprises. We understand the unique challenges — scalability, real-time
                communication, payment integration, and user experience — and we deliver solutions
                that work.
              </p>
              <Link href="/contact-us" className="apply-now-btn">
                Discuss Your App Idea
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "40+", label: "On-Demand Apps Built" },
                { value: "15+", label: "Industries Served" },
                { value: "99.9%", label: "Uptime Delivered" },
                { value: "24/7", label: "Support Available" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-50 rounded-2xl border border-brand-100 p-6 text-center"
                >
                  <p className="text-2xl md:text-3xl font-black text-brand-500 m-0">{stat.value}</p>
                  <p className="text-xs font-semibold text-slate-500 m-0 mt-2 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
              Industries We Build For
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our on-demand solutions power businesses across multiple sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Food & Delivery",
              "Healthcare",
              "Transport & Logistics",
              "Home Services",
              "Beauty & Wellness",
              "Education",
              "Real Estate",
              "Ecommerce",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-white rounded-xl border border-slate-100 px-4 py-5 text-center font-semibold text-sm text-slate-700 hover:border-brand-200 hover:text-brand-600 transition-colors"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionOnDemandScreen />

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
            Our On-Demand Development Process
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            From concept to launch, we follow a proven process to deliver on-demand apps on time
            and on budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {[
              { step: "01", title: "Discovery", desc: "Understand your business model, users, and competitive landscape." },
              { step: "02", title: "Design", desc: "Wireframes and UI mockups optimized for mobile-first on-demand flows." },
              { step: "03", title: "Development", desc: "Agile sprints with weekly demos — booking, payments, tracking built in." },
              { step: "04", title: "Launch", desc: "App store deployment, monitoring setup, and post-launch support." },
            ].map((item) => (
              <div key={item.step} className="relative pl-4 border-l-2 border-brand-500/30 bg-slate-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-white">
                <span className="text-brand-500 font-black text-sm">{item.step}</span>
                <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 m-0 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
      <FinalCTA />
    </Fragment>
  );
};

export default SolutionOnDemand;
