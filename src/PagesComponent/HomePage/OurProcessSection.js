import React, { Fragment, memo } from "react";
import workProcess from "@/data/ourProcess.json";
import "./OurProcessSection.css";

const OurProcessSection = () => {
  const brandBlue = "#3f689f";

  const dynamicSteps = (workProcess || []).map((step, index) => ({
    ...step,
    id: String(step.step),
    align: index % 2 === 0 ? "left" : "right",
  }));

  return (
    <Fragment>
      <section className="bg-slate-50 py-24 md:py-32 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3f689f]/5 via-transparent to-[#3f689f]/5 opacity-40"></div>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(${brandBlue} 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-24 lg:mb-32 section-fade-down">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter inline-block relative">
              Our Work <span className="text-[#3f689f]">Process</span>
            </h2>
            <p className="mt-6 text-gray-600 font-semibold uppercase tracking-[0.25em] text-xs md:text-sm italic">
              How we bring your ideas to life
            </p>
          </div>

          <div className="relative">
            {dynamicSteps.length > 0 && (
              <div
                className="absolute top-0 left-0 w-full h-full hidden lg:block pointer-events-none"
                style={{ zIndex: 0 }}
              >
                <svg className="w-full h-full" viewBox="0 0 1000 1504" fill="none" preserveAspectRatio="none">
                  <path
                    className="process-path-line"
                    d="M 225 200 C 225 324, 775 324, 775 448"
                    stroke={brandBlue}
                    strokeWidth="2"
                    strokeDasharray="8,8"
                    fill="none"
                  />
                  <path
                    className="process-path-line"
                    d="M 775 628 C 775 752, 225 752, 225 876"
                    stroke={brandBlue}
                    strokeWidth="2"
                    strokeDasharray="8,8"
                    fill="none"
                  />
                  <path
                    className="process-path-line"
                    d="M 225 1056 C 225 1180, 775 1180, 775 1294"
                    stroke={brandBlue}
                    strokeWidth="2"
                    strokeDasharray="8,8"
                    fill="none"
                  />
                </svg>
              </div>
            )}

            {dynamicSteps.length > 0 ? (
              dynamicSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-col lg:flex-row items-center relative section-fade-up ${
                    step.align === "right" ? "lg:justify-end" : "lg:justify-start"
                  } ${index === dynamicSteps.length - 1 ? "mb-0" : "mb-20 lg:mb-52"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-full lg:w-[450px] relative flex flex-col ${
                      step.align === "left" ? "lg:items-start" : "lg:items-end"
                    }`}
                  >
                    <div className="process-card-v2 bg-white p-6 md:p-10 relative z-20 min-h-[200px] md:min-h-[220px] w-full shadow-[0_20px_50px_rgba(63,104,159,0.06)] border border-blue-50/50 transition-all duration-500 hover:shadow-[0_40px_90px_rgba(63,104,159,0.12)] group hover:-translate-y-2 overflow-hidden">
                      <div className="absolute inset-0 z-10 opacity-[0.05] pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-500">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `linear-gradient(${brandBlue} 1px, transparent 1px), linear-gradient(90deg, ${brandBlue} 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                          }}
                        ></div>
                        <div
                          className={`absolute top-4 ${
                            step.align === "left" ? "left-4" : "right-4"
                          } w-8 h-8 border-t-2 border-l-2 border-[#3f689f] opacity-40`}
                        ></div>
                        <div
                          className={`absolute bottom-4 ${
                            step.align === "left" ? "right-4" : "left-4"
                          } w-8 h-8 border-b-2 border-r-2 border-[#3f689f] opacity-40`}
                        ></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(63,104,159,0.1)_0%,transparent_70%)] blur-2xl"></div>
                      </div>

                      <div
                        className={`absolute top-6 ${
                          step.align === "left" ? "left-8" : "right-8"
                        } text-5xl md:text-7xl font-black text-[#3f689f] opacity-25 group-hover:opacity-45 transition-all duration-500 z-20`}
                      >
                        {step.id}
                      </div>

                      <div className="absolute bottom-6 md:bottom-10 lg:bottom-5 left-0 w-full flex justify-center px-4 z-30">
                        <div
                          className="bg-[#3f689f] text-white px-4 md:px-7 py-2 md:py-3.5 rounded-lg md:rounded-2xl shadow-[0_12px_25px_rgba(63,104,159,0.3)] transform rotate-[-0.5deg] group-hover:rotate-0 transition-all duration-500"
                          style={{ minWidth: "150px", textAlign: "center" }}
                        >
                          <h3 className="text-xs md:text-base lg:text-lg font-black uppercase tracking-widest m-0 pointer-events-none whitespace-nowrap">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`mt-8 lg:mt-0 lg:absolute ${
                        step.align === "left"
                          ? "lg:left-full lg:ml-12 lg:top-1/2 lg:-translate-y-1/2"
                          : "lg:right-full lg:mr-12 lg:top-1/2 lg:-translate-y-1/2"
                      } w-full lg:w-[350px]`}
                    >
                      <div
                        className={`p-8 md:p-10 bg-white/100 backdrop-blur-xl rounded-[40px] border border-[#3f689f]/10 shadow-sm relative ${
                          step.align === "right" ? "lg:text-right" : ""
                        } lg:min-h-[220px] flex items-center justify-center`}
                      >
                        <p className="text-gray-600 font-bold text-base md:text-lg leading-relaxed m-0 italic text-center lg:text-inherit">
                          &ldquo;{step.description}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-[#3f689f] font-medium italic">
                No work process available.
              </div>
            )}
          </div>
        </div>

        
      </section>
    </Fragment>
  );
};

export default memo(OurProcessSection);
