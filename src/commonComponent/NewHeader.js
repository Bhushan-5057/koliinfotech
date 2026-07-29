import React, { useState, useEffect, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import SVGlogo from "../assets/Logo/koli_logo.png"

const NewHeader = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
      setOpenDropdown(null);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  const BRAND_BLUE = "#3f689f";

  const ChevronDown = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );

  const TRANSPARENT_PAGES = [
    "/",
    "/home-page",
    "/artificial-intelligence-machine-learning",
    "/mobile-app-development",
    "/custom-software-development",
    "/web-development",
    "/cloud-services",
    "/data-security",
    "/qa-testing",
    "/hire-developer",
    "/who-we-are",
    "/about-company",
    "/our-culture",
    "/solution-on-demand",
    "/career",
    "/careers",
    "/blogs",
    "/case-studies",
    "/case-studies/[slug]",
    "/contact-us",
    "/digital-marketing",
    "/portfolio",
  ];
  const isTransparentHeaderPage =
    TRANSPARENT_PAGES.includes(router.pathname) ||
    router.pathname.startsWith("/case-studies");

  const serviceLinks = [
    { name: "AI & ML", link: "/artificial-intelligence-machine-learning" },
    { name: "Mobile App Dev", link: "/mobile-app-development" },
    { name: "Custom Software", link: "/custom-software-development" },
    { name: "Web Development", link: "/web-development" },
    { name: "Cloud & DevOps", link: "/cloud-services" },
    { name: "QA & Testing", link: "/qa-testing" },
    { name: "Data Security", link: "/data-security" },
    { name: "Hire Developers", link: "/hire-developer" },
    { name: "Digital Marketing", link: "/digital-marketing" },
  ];

  const companyLinks = [
    { name: "Who We Are!", link: "/who-we-are" },
    { name: "About Us", link: "/about-company" },
    { name: "Our Portfolio", link: "/portfolio" },
    { name: "Case Studies", link: "/case-studies" },
    { name: "Our Culture", link: "/our-culture" },
    { name: "Blogs", link: "/blogs" },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (key) => {
    setOpenDropdown((current) => (current === key ? null : key));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] lg:transition-all lg:duration-500 ${
        isScrolled
          ? "bg-white/95 lg:bg-white/70 shadow-sm border-b border-gray-100/80 header-scrolled"
          : isTransparentHeaderPage
            ? "bg-transparent shadow-none border-none"
            : "bg-white/95 lg:bg-white/90 shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 py-3">
        <nav className="flex items-center justify-between w-full relative" aria-label="Main navigation">
          <div className="flex items-center shrink-0 self-center">
            <Link href="/" className="flex items-center" aria-label="KOLI Infotech home">
              <Image
                src={SVGlogo}
                alt="KOLI Infotech"
                width={180}
                height={60}
                sizes="150px"
                priority
                className="cst-header-logo object-contain"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8 ml-auto">
            <div
              className="relative flex items-center h-full header-nav-item"
              style={{ animationDelay: "0s" }}
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="flex items-center text-sm font-bold text-black border-transparent hover:text-[#3f689f] transition-all cursor-pointer py-2 gap-1 uppercase tracking-wider touch-target">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </span>

              <div
                className={`absolute top-full -left-10 pt-2 w-72 z-[10000] header-dropdown-panel ${
                  openDropdown === "services" ? "is-open" : ""
                }`}
              >
                <div className="bg-white rounded-lg shadow-2xl border-t-4 border-[#3f689f] py-3 flex flex-col">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      className="px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#3f689f] transition-colors no-underline hover:no-underline"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="relative flex items-center h-full header-nav-item"
              style={{ animationDelay: "0.05s" }}
              onMouseEnter={() => setOpenDropdown("company")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="flex items-center text-sm font-bold text-black border-transparent hover:text-[#3f689f] transition-all cursor-pointer py-2 gap-1 uppercase tracking-wider touch-target">
                Company
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openDropdown === "company" ? "rotate-180" : ""
                  }`}
                />
              </span>

              <div
                className={`absolute top-full left-0 pt-2 w-56 z-[10000] header-dropdown-panel ${
                  openDropdown === "company" ? "is-open" : ""
                }`}
              >
                <div className="bg-white rounded-lg shadow-2xl border-t-4 border-[#3f689f] py-3 flex flex-col">
                  {companyLinks.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      className="px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#3f689f] transition-colors no-underline hover:no-underline"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="header-nav-item" style={{ animationDelay: "0.08s" }}>
              <Link
                href="/solution-on-demand"
                className={`text-sm font-bold border-transparent hover:text-[#3f689f] transition-all uppercase tracking-wider no-underline hover:no-underline touch-target ${
                  router.pathname === "/solution-on-demand" ? "text-[#3f689f]" : "text-black"
                }`}
              >
                Solutions
              </Link>
            </div>

            <div className="header-nav-item" style={{ animationDelay: "0.15s" }}>
              <Link
                href="/careers"
                className={`text-sm font-bold border-transparent hover:text-[#3f689f] transition-all uppercase tracking-wider no-underline hover:no-underline touch-target ${
                  router.pathname === "/careers" ? "text-[#3f689f]" : "text-black"
                }`}
              >
                Careers
              </Link>
            </div>

            <div className="header-nav-item" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/contact-us"
                className="no-underline hover:no-underline block text-white font-bold rounded-full px-6 py-2.5 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl uppercase tracking-wider text-xs touch-target"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center self-center">
            <button
              type="button"
              className={`header-menu-toggle ${mobileMenuOpen ? "is-open" : ""}`}
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              <span className="header-menu-bar" />
              <span className="header-menu-bar" />
              <span className="header-menu-bar" />
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`mobile-nav-backdrop lg:hidden ${mobileMenuOpen ? "is-open" : ""}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-nav-drawer"
        className={`mobile-nav-drawer lg:hidden ${mobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-nav-drawer__header">
          <span className="mobile-nav-drawer__title">Menu</span>
          <button
            type="button"
            className="mobile-nav-drawer__close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="mobile-nav-drawer__body">
          <div className="mobile-nav-group">
            <button
              type="button"
              onClick={() => toggleMobileDropdown("services")}
              aria-expanded={openDropdown === "services"}
              aria-controls="mobile-services-menu"
              className={`mobile-nav-trigger ${openDropdown === "services" ? "is-active" : ""}`}
            >
              Services
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id="mobile-services-menu"
              className={`mobile-submenu ${openDropdown === "services" ? "is-open" : ""}`}
            >
              <div className="mobile-submenu-inner">
                <div className="mobile-submenu-list">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      className="mobile-submenu-link"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-nav-group">
            <button
              type="button"
              onClick={() => toggleMobileDropdown("company")}
              aria-expanded={openDropdown === "company"}
              aria-controls="mobile-company-menu"
              className={`mobile-nav-trigger ${openDropdown === "company" ? "is-active" : ""}`}
            >
              Company
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openDropdown === "company" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id="mobile-company-menu"
              className={`mobile-submenu ${openDropdown === "company" ? "is-open" : ""}`}
            >
              <div className="mobile-submenu-inner">
                <div className="mobile-submenu-list">
                  {companyLinks.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      className="mobile-submenu-link"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/solution-on-demand" className="mobile-nav-link" onClick={closeMobileMenu}>
            Solutions
          </Link>

          <Link href="/careers" className="mobile-nav-link" onClick={closeMobileMenu}>
            Careers
          </Link>

          <Link href="/portfolio" className="mobile-nav-link" onClick={closeMobileMenu}>
            Portfolio
          </Link>

          <div className="pt-4 mt-2">
            <Link
              href="/contact-us"
              className="mobile-nav-cta"
              style={{ backgroundColor: BRAND_BLUE }}
              onClick={closeMobileMenu}
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default memo(NewHeader);
