import React, { Fragment } from "react";
import KoliLogo1 from "../assets/Logo/KOLI_LOGO.png";
import hiring from "../assets/images/hiring.webp";
import IndianFlag from "../assets/images/indian-flag.svg"
import CanadaFlag from "../assets/images/canada-flag.svg"
import Image from "next/image";
import Link from "next/link";
import {
  IconFacebook,
  IconTwitter,
  IconInstagram,
  IconYoutube,
  IconLinkedin,
  IconMail,
  IconPhone,
} from "@/components/icons/InlineIcons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Fragment>
      <footer
        className="footer-section relative w-full overflow-hidden border-t border-gray-100"
        style={{
          background: '#ffffff'
        }}
      >
        <div className="container px-3 px-md-4 px-lg-5 relative z-10">
          <div className="footer-content">
            <div className="row mt-4 mt-md-4 mt-lg-5 text-start footer-main-row">
              {/* Logo & Contact Column */}
              <div className="col-lg-3 col-md-6 mb-3 mb-lg-4">
                <div className="footer-column text-start">
                  <Image
                    src={KoliLogo1}
                    alt="KOLI Infotech Logo"
                    className="cst-footer-logo mb-3"
                    width={180}
                    height={60}
                    loading="lazy"
                    sizes="180px"
                  />
                  <p className="footer-description text-start mb-3">
                    Your trusted technology partner delivering custom software, web, and mobile solutions worldwide.
                  </p>
                  <div className="d-flex flex-wrap justify-content-start gap-2 mb-4 footer-social">
                    <Link
                      href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                      className="nav-link active p-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="KOLI Infotech on Facebook"
                    >
                      <IconFacebook className="social-icon" />
                    </Link>
                    <Link
                      href={process.env.NEXT_PUBLIC_TWITTER_URL}
                      className="nav-link active p-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="KOLI Infotech on Twitter"
                    >
                      <IconTwitter className="social-icon" />
                    </Link>
                    <Link
                      href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                      className="nav-link active p-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="KOLI Infotech on Instagram"
                    >
                      <IconInstagram className="social-icon" />
                    </Link>
                    <Link
                      href={process.env.NEXT_PUBLIC_YOUTUBE_URL}
                      className="nav-link active p-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="KOLI Infotech on YouTube"
                    >
                      <IconYoutube className="social-icon" />
                    </Link>
                    <Link
                      href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                      className="nav-link active p-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="KOLI Infotech on LinkedIn"
                    >
                      <IconLinkedin className="social-icon" />
                    </Link>
                  </div>
                  <div className="footer-contact-info text-start">
                    <p className="footer-subheading text-start">Contact Us</p>
                    <p className="mb-2 d-flex align-items-center justify-content-start gap-2">
                      <IconMail size={20} />
                      <Link href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="footer-link">
                        {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                      </Link>
                    </p>
                    <p className="mb-0 d-flex align-items-center justify-content-start gap-2">
                      <IconPhone size={14} />
                      <Link href={`tel:+${process.env.NEXT_PUBLIC_WHATSAPP_FULL_NUMBER}`} className="footer-link">
                        {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Services Column */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="footer-column">
                  <p className="footer-heading text-start">Services</p>
                  <ul className="list-unstyled footer-links text-start">
                    <li>
                      <Link href="/artificial-intelligence-machine-learning" className="footer-link">
                        Artificial Intelligence & Machine Learning
                      </Link>
                    </li>
                    <li>
                      <Link href="/mobile-app-development" className="footer-link">
                        Mobile Application Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/custom-software-development" className="footer-link">
                        Custom Software Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-development" className="footer-link">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/cloud-services" className="footer-link">
                        Cloud & DevOps
                      </Link>
                    </li>
                    <li>
                      <Link href="/qa-testing" className="footer-link">
                        QA & Testing
                      </Link>
                    </li>
                    <li>
                      <Link href="/data-security" className="footer-link">
                        Data Security
                      </Link>
                    </li>
                    <li>
                      <Link href="/hire-developer" className="footer-link">
                        Hire Developers
                      </Link>
                    </li>
                    <li>
                      <Link href="/digital-marketing" className="footer-link">
                        SEO & Digital Marketing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pages Column */}
              <div className="col-lg-2 col-md-6 col-12">
                <div className="footer-column">
                  <p className="footer-heading text-start">Company</p>
                  <ul className="list-unstyled footer-links text-start">
                    <li>
                      <Link href="/about-company" className="footer-link">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/who-we-are" className="footer-link">
                        Who We Are
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="footer-link">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-culture" className="footer-link">
                        Our Culture
                      </Link>
                    </li>
                    <li>
                      <Link href="/blogs" className="footer-link">
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Our Offices Column */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-column">
                  <p className="footer-heading text-start">Our Offices</p>
                  <div className="office-info text-start mb-3">
                    <div className="d-flex align-items-center justify-content-start gap-2 mb-1">
                      <Image src={CanadaFlag} alt="Canada flag" width={20} height={20} loading="lazy" />
                      <p className="office-title mb-0">Branch Office – Canada</p>
                    </div>
                    <p className="office-address mb-1">
                      3300 Hwy 7, Concord, ON L4K 4M3, Canada
                    </p>
                    <p className="office-phone mb-0">
                      <IconPhone size={12} /> +1 (289) 275-8902
                    </p>
                  </div>
                  <div className="office-info text-start mb-3">
                    <div className="d-flex align-items-center justify-content-start gap-2 mb-1">
                      <Image src={IndianFlag} alt="India flag" width={20} height={20} loading="lazy" />
                      <p className="office-title mb-0">Head Quarter - Surat</p>
                    </div>
                    <p className="office-address mb-1">
                      4087- 4094, Rajmahal mall, Dindoli Surat, Gujarat - 394210
                    </p>
                    <p className="office-phone mb-0 d-flex align-items-center justify-content-start gap-1">
                      <IconPhone size={12} /> {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                    </p>
                  </div>
                  <div className="office-info text-start mb-3">
                    <div className="d-flex align-items-center justify-content-start gap-2 mb-1">
                      <Image src={IndianFlag} alt="India flag" width={20} height={20} loading="lazy" />
                      <p className="office-title mb-0">Branch Office - Ahmedabad</p>
                    </div>
                    <p className="office-address mb-1">
                      A - 501, Sahajanand Complex Shahibaug, Ahmedabad - 380004
                    </p>
                    <p className="office-phone mb-0">
                      <IconPhone size={12} /> +91-7600224225
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="hiring-section">
        <div className="container px-3 px-md-4 py-4">
          <div className="hiring-content flex w-full flex-col items-center gap-3 text-center md:flex-row md:items-center md:justify-between md:gap-6 md:text-left">
            <div className="hiring-text">
              <div className="mb-2 flex flex-row items-center justify-center gap-3 md:justify-start">
                <p className="hiring-title mb-0">WE ARE HIRING!</p>
                <Image
                  src={hiring}
                  alt="Hiring Icon"
                  width={35}
                  height={35}
                  className="hiring-icon"
                  loading="lazy"
                />
              </div>
              <p className="hiring-subtitle mb-0 md:text-start">
                Join Our Team and Grow Your Career.
              </p>
            </div>
            <div className="hiring-cta shrink-0">
              <Link href="/careers" className="apply-now-btn">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="copyright-section mb-16 pb-6 md:mb-12 md:pb-4">
        <div className="container text-center small">
          <span>Copyright &copy; {year} KOLI Infotech Pvt. Ltd. | All rights reserved.</span>
          <span className="d-block mt-2">
            <Link href="/privacy-policy" className="footer-link mx-2">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="footer-link mx-2">
              Terms of Service
            </Link>
          </span>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
