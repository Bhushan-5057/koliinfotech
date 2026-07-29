import React, { Fragment, memo } from "react";
import Link from "next/link";
import "./WhyChooseKOLIinfotech.css";

const WhyChooseKOLIinfotech = () => {
  const brandBlue = "#3f689f";

  const steps = [
    {
      number: "1",
      title: "Strategic Discovery",
      description:
        "We dive deep into your business goals and requirements to define a clear roadmap before development begins.",
      position: "top-0 right-[5%]",
    },
    {
      number: "2",
      title: "Agile Engineering",
      description:
        "Weekly demos, transparent progress, and modern tech stacks to build scalable, high-performance solutions.",
      position: "top-[40%] left-[55%] md:left-[45%]",
    },
    {
      number: "3",
      title: "Quality Guaranteed",
      description:
        "Rigorous QA, security best practices, and post-launch support ensure your product is stable and ready to scale.",
      position: "bottom-0 left-[10%] md:left-[5%]",
    },
  ];

  return (
    <Fragment>
      <section className="relative pt-12 pb-6 md:pt-20 md:pb-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-10 lg:mb-14 section-fade-down">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase mb-6">
              Why Choose <span className="text-[#3f689f]">Us</span>
            </h2>
            <p className="section-eyebrow font-bold uppercase tracking-[0.2em] text-xs md:text-sm italic text-gray-900">
              Empowering Innovation with Strategic Excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 section-fade-right">
              <span className="text-brand-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 block">
                Why 150+ Businesses Trust Us
              </span>
              <p className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
                Your Trusted <span className="text-brand-500">Technology</span>{" "}
                <br />
                Partner
              </p>
              <p className="text-gray-600 font-medium text-lg leading-relaxed mb-8 max-w-md">
                We&apos;re not just developers — we&apos;re your long-term technology partner.
                From Surat to Canada, we deliver on time, on budget, and built to last.
              </p>
              <Link href="/contact-us" className="px-8 py-3 rounded-full bg-brand-500 text-white font-bold text-sm uppercase tracking-wide hover:bg-brand-600 hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline shadow-md">
                Get Free Consultation
              </Link>
            </div>

            <div className="lg:col-span-7 relative h-[600px] md:h-[700px] mt-12 lg:mt-0 section-fade-left">
              <svg
                viewBox="0 0 800 600"
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none hidden md:block"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M50,550 C150,550 250,500 350,300 C450,100 550,50 750,50"
                  stroke={brandBlue}
                  strokeWidth="4"
                  strokeDasharray="10 10"
                />
              </svg>

              <div className="relative w-full h-full">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`absolute ${step.position} max-w-[280px] group section-fade-up`}
                    style={{ animationDelay: `${index * 0.12}s` }}
                  >
                    <div className="absolute top-0 -left-8 text-gray-200 text-[120px] md:text-[180px] font-black pointer-events-none z-0 group-hover:text-gray-300 transition-colors duration-500 leading-none">
                      {step.number}
                    </div>

                    <div className="relative z-10 pt-4">
                      <div className="hidden md:block w-4 h-4 bg-white border-4 border-[#3f689f] rounded-full mb-6 shadow-glow"></div>

                      <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#3f689f] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm font-semibold leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </Fragment>
  );
};

export default memo(WhyChooseKOLIinfotech);
