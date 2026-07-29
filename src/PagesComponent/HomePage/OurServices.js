import React, { Fragment, memo } from "react";
import { useRouter } from "next/router";
import ourServices from "@/data/services.json";
import {
  IconLaptopCode,
  IconMobile,
  IconRobot,
  IconCloud,
  IconCogs,
  IconClipboardCheck,
  IconArrowRight,
} from "@/components/icons/InlineIcons";
import { Palette, ShoppingCart, Users, LineChart } from "lucide-react";
import "./OurServices.css";

const LINK_MAP = {
  "Web Application Development": "/web-development",
  "Mobile Application Development": "/mobile-app-development",
  "AI & Machine Learning": "/artificial-intelligence-machine-learning",
  "Cloud & DevOps": "/cloud-services",
  "Custom Software Development": "/custom-software-development",
  "QA & Testing": "/qa-testing",
  "UI/UX Design": "/contact-us",
  "Ecommerce Development": "/web-development",
  "Hire Developers": "/hire-developer",
  "SEO & Digital Marketing": "/digital-marketing",
};

const ICON_MAP = {
  "Web Application Development": IconLaptopCode,
  "Mobile Application Development": IconMobile,
  "AI & Machine Learning": IconRobot,
  "Cloud & DevOps": IconCloud,
  "Custom Software Development": IconCogs,
  "QA & Testing": IconClipboardCheck,
  "UI/UX Design": Palette,
  "Ecommerce Development": ShoppingCart,
  "Hire Developers": Users,
  "SEO & Digital Marketing": LineChart,
};

const OurServices = () => {
  const router = useRouter();

  const handleServiceClick = (serviceLink) => {
    if (serviceLink) router.push(serviceLink);
  };

  const handleLearnMoreClick = (serviceLink) => {
    if (serviceLink) router.push(serviceLink);
  };

  return (
    <Fragment>
      <section className="relative py-16 md:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-12 lg:mb-20 section-fade-down">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight mb-6">
              Our <span className="text-brand-500">Services</span>
            </h2>
            <p className="section-eyebrow font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-brand-500">
              End-to-End Technology Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {ourServices && ourServices.length > 0 ? (
              ourServices.map((service, index) => {
                const serviceLink = LINK_MAP[service.title] || "#";
                const IconComp = ICON_MAP[service.title];
                return (
                  <div
                    key={service.id || index}
                    className="mb-4 section-fade-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                    onClick={() => handleServiceClick(serviceLink)}
                  >
                    <div className="card service-card h-full">
                      <div className="card__liquid"></div>
                      <div className="card__shine"></div>
                      <div className="card__glow"></div>

                      <div className="p-8 flex flex-col h-full relative z-10">
                        <div className="mb-4">
                          <div className="service-icon-wrapper">
                            {/* Prefer local inline SVGs — Cloudinary mask URLs compete with LCP on Slow 4G. */}
                            {IconComp && <IconComp size={30} />}
                          </div>
                        </div>

                        <h3 className="service-title leading-tight mb-3">{service.title}</h3>

                        <p className="service-description flex-grow">{service.description}</p>

                        <div
                          className="learn-more-btn mt-6"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLearnMoreClick(serviceLink);
                          }}
                        >
                          <span className="font-bold">Learn More</span>
                          <IconArrowRight className="arrow-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500 italic">No services available</p>
              </div>
            )}
          </div>

          <div className="text-center mt-10 section-fade-up">
            <p className="text-slate-600 text-sm mb-3">Not sure what you need?</p>
            <button
              type="button"
              onClick={() => router.push("/contact-us")}
              className="text-brand-600 font-bold text-sm hover:underline bg-transparent border-none cursor-pointer"
            >
              Get a free consultation →
            </button>
          </div>
        </div>
      </section>

      
    </Fragment>
  );
};

export default memo(OurServices);
