import React, { Fragment, useState, useEffect } from "react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
} from "@/components/icons/InlineIcons";
import { SERVICE_OPTIONS } from "@/lib/constants";
import "./ContactUsScreen.css";

const BRAND_BLUE = "#3f689f";

const EMPTY_FORM = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  description: "",
  companyUrl: "", // honeypot — browsers should not autofill this name
};

const ContactUsScreen = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({ ...EMPTY_FORM });

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;
  const validateEmail = (email) => emailRegex.test(email.trim().toLowerCase());
  const validPhone = (phone) => /^[0-9]{10}$/.test(String(phone).trim());
  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name.trim());

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "fullName") {
      value = value.replace(/[^a-zA-Z\s]/g, "");
      if (value.startsWith(" ")) value = value.trimStart();
    }

    if (name === "phone") {
      value = value.replace(/\D/g, "");
    }

    if (name === "description") {
      if (value.startsWith(" ")) value = value.trimStart();
    }

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (submitError) setSubmitError("");
  };

  const validateForm = () => {
    const { fullName, email, phone, description } = data;
    const nextErrors = {};

    if (!fullName || !fullName.trim()) {
      nextErrors.fullName = "Full name is required!";
    } else if (!validateName(fullName)) {
      nextErrors.fullName = "Name cannot contain numbers or special characters!";
    }

    if (!email || !email.trim()) {
      nextErrors.email = "Email is required!";
    } else if (!validateEmail(email)) {
      nextErrors.email =
        "Please enter a valid email address (e.g. name@domain.com)!";
    }

    if (!phone || !phone.trim()) {
      nextErrors.phone = "Phone number is required!";
    } else if (!validPhone(phone)) {
      nextErrors.phone = "Phone number must be exactly 10 digits!";
    }

    if (!description || !description.trim()) {
      nextErrors.description = "Message cannot be empty!";
    } else if (description.trim().length < 10) {
      nextErrors.description =
        "Please provide a bit more detail (at least 10 characters)!";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName.trim(),
          email: data.email.trim().toLowerCase(),
          phone: data.phone.trim(),
          service: data.service || "",
          description: data.description.trim(),
          // Keep server honeypot key as `website` for API compatibility
          website: data.companyUrl || "",
        }),
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (response.ok && result.success) {
        setShowPopup(true);
        setData({ ...EMPTY_FORM });
        setErrors({});
        setSubmitError("");
      } else {
        if (result.errors) {
          setErrors(result.errors);
        }
        setSubmitError(
          result.message ||
            "Failed to send message. Please email us at info@koliinfotech.com"
        );
      }
    } catch {
      setSubmitError(
        "Network error. Please try again or email us at info@koliinfotech.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendAnother = () => {
    setShowPopup(false);
    setData({ ...EMPTY_FORM });
    setErrors({});
    setSubmitError("");
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopup]);

  return (
    <Fragment>
      <section className="contact-page relative bg-[#f8fafc] min-h-screen overflow-hidden pt-10 md:pt-20">
        <div className="container mx-auto px-4 relative z-20 pb-20 md:pb-32 -mt-10 md:-mt-16">
          <div className="max-w-5xl mx-auto bg-white rounded-[24px] md:rounded-[30px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row min-h-[auto] lg:min-h-[600px]">
            {/* Left Decorative Panel */}
            <div className="w-full lg:w-[40%] bg-[#3f689f] relative p-6 md:px-12 md:py-4 lg:p-10 flex flex-col justify-start lg:justify-center text-white overflow-hidden transition-all duration-300">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10"></div>
              <div className="absolute top-10 -right-10 w-24 h-24 rounded-full bg-white/5"></div>
              <div className="absolute top-[15%] right-[20%] w-16 h-16 rounded-full bg-white/5"></div>
              <div className="absolute top-[20%] left-[10%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-white/10 rotate-45"></div>
              <div className="absolute bottom-[30%] right-[15%] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-white/5 -rotate-12"></div>
              <div className="absolute top-[40%] left-[5%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-white/5 rotate-[120deg]"></div>
              <div className="absolute bottom-[10%] right-[40%] w-3 h-3 rounded-full bg-white/10"></div>
              <div className="absolute top-[60%] right-[5%] w-2 h-2 rounded-full bg-white/10"></div>

              <div className="relative z-10 text-left">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-black m-0 mb-1 md:mb-1 lg:mb-6 uppercase tracking-tight">
                  Get in touch
                </h2>
                <p className="text-white/80 text-[10.5px] md:text-[13px] lg:text-sm font-medium m-0 mb-2 md:mb-2 lg:mb-12 leading-relaxed max-w-xl lg:max-w-xs transition-all opacity-90">
                  Share your project details — we&apos;ll respond within 24 hours with a
                  clear plan.
                </p>

                <div className="flex flex-col gap-0 lg:gap-6 pt-0">
                  <div className="flex items-center gap-3 md:gap-4 justify-start group mb-2 lg:mb-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex flex-shrink-0 items-center justify-center text-xs md:text-lg transition-all group-hover:bg-white/20">
                      <IconMail size={20} />
                    </div>
                    <div className="text-left">
                      <p className="text-[7px] md:text-[10px] uppercase tracking-widest text-white/50 m-0 p-0 leading-none">
                        Email Us
                      </p>
                      <p className="text-[10.5px] md:text-sm font-bold m-0 p-0 leading-tight">
                        info@koliinfotech.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4 justify-start group mb-2 lg:mb-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex flex-shrink-0 items-center justify-center text-xs md:text-lg transition-all group-hover:bg-white/20">
                      <IconPhone size={20} />
                    </div>
                    <div className="text-left">
                      <p className="text-[7px] md:text-[10px] uppercase tracking-widest text-white/50 m-0 p-0 leading-none">
                        Call Us
                      </p>
                      <p className="text-[10.5px] md:text-sm font-bold m-0 p-0 leading-tight">
                        +91-6353131771
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4 justify-start group">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex flex-shrink-0 items-center justify-center text-xs md:text-lg transition-all group-hover:bg-white/20">
                      <IconMapPin size={20} />
                    </div>
                    <div className="text-left">
                      <p className="text-[7px] md:text-[10px] uppercase tracking-widest text-white/50 m-0 p-0 leading-none">
                        Visit Us
                      </p>
                      <p className="text-[10.5px] md:text-sm lg:text-xs font-bold leading-tight m-0 p-0">
                        Surat, Gujarat, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="w-full lg:w-[60%] px-3 py-6 md:p-12 flex flex-col justify-start md:justify-center bg-white relative z-10 duration-300">
              <form
                onSubmit={handleSubmit}
                className="space-y-5 md:space-y-5"
                noValidate
              >
                {/* Honeypot — hidden from users; odd name avoids browser autofill */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-10000px",
                    top: "auto",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                  }}
                >
                  <label htmlFor="companyUrl">Company URL</label>
                  <input
                    type="text"
                    id="companyUrl"
                    name="companyUrl"
                    tabIndex={-1}
                    autoComplete="off"
                    value={data.companyUrl || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={data.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      autoComplete="name"
                      className="w-full bg-white border border-gray-200 rounded-lg h-[45px] md:h-[55px] px-3 text-[14px] font-semibold focus:outline-none focus:border-[#3f689f] transition-colors placeholder:text-gray-400"
                    />
                    {errors.fullName && (
                      <small className="text-red-500 text-[10px] mt-1 block font-bold">
                        {errors.fullName}
                      </small>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      autoComplete="email"
                      className="w-full bg-white border border-gray-200 rounded-lg h-[45px] md:h-[55px] px-3 text-[14px] font-semibold focus:outline-none focus:border-[#3f689f] transition-colors placeholder:text-gray-400"
                    />
                    {errors.email && (
                      <small className="text-red-500 text-[10px] mt-1 block font-bold">
                        {errors.email}
                      </small>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <input
                      type="text"
                      name="phone"
                      value={data.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      maxLength={10}
                      inputMode="numeric"
                      autoComplete="tel"
                      className="w-full bg-white border border-gray-200 rounded-lg h-[45px] md:h-[55px] px-3 text-[14px] font-semibold focus:outline-none focus:border-[#3f689f] transition-colors placeholder:text-gray-400"
                    />
                    {errors.phone && (
                      <small className="text-red-500 text-[10px] mt-1 block font-bold">
                        {errors.phone}
                      </small>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <select
                      name="service"
                      value={data.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-lg h-[45px] md:h-[55px] px-3 text-[14px] font-semibold focus:outline-none focus:border-[#3f689f] transition-colors text-gray-700"
                    >
                      <option value="">Select a Service (Optional)</option>
                      {SERVICE_OPTIONS.map((option, index) => (
                        <option key={`${option}-${index}`} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <textarea
                      name="description"
                      value={data.description}
                      onChange={handleChange}
                      placeholder="Your Message (at least 10 characters)"
                      rows="2"
                      className="w-full bg-white border border-gray-200 rounded-lg py-3 px-3 text-[14px] font-semibold focus:outline-none focus:border-[#3f689f] transition-colors resize-none placeholder:text-gray-400 min-h-[100px] md:min-h-[120px]"
                    />
                    {errors.description && (
                      <small className="text-red-500 text-[10px] mt-1 block font-bold px-1">
                        {errors.description}
                      </small>
                    )}
                  </div>
                </div>

                <div className="pt-2 md:pt-4 flex flex-col items-start gap-3">
                  {submitError && (
                    <p className="text-red-500 text-xs font-bold m-0" role="alert">
                      {submitError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="apply-now-btn !w-[10em] !h-[2.8em] md:!w-[9em] md:!h-[2.6em] !rounded-[8px] md:!rounded-[6px] !text-[16px] md:!text-[17px] !font-bold md:!font-medium shadow-sm flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "white", lineHeight: "2.5em" }}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {showPopup && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 10000,
              background: "rgba(10, 20, 40, 0.45)",
              backdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            onClick={handleSendAnother}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                width: "100%",
                maxWidth: "440px",
                padding: "48px 36px 40px",
                textAlign: "center",
                boxShadow: "0 40px 100px rgba(0,0,0,0.2)",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: `${BRAND_BLUE}10`,
                  border: `2px solid ${BRAND_BLUE}30`,
                  color: BRAND_BLUE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 22px",
                  fontSize: "1.8rem",
                  fontWeight: 900,
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontWeight: 900,
                  color: "#0f172a",
                  fontSize: "1.35rem",
                  margin: "0 0 12px",
                  letterSpacing: "-0.02em",
                }}
              >
                Thank You for Contacting Us!
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontWeight: 500,
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  margin: "0 auto 28px",
                  maxWidth: "320px",
                }}
              >
                Our representative will contact you within 24 hours.
              </p>
              <button
                type="button"
                onClick={handleSendAnother}
                className="apply-now-btn !w-auto !min-w-[12em] !h-[2.8em] !px-6 !rounded-[8px] !text-[15px] !font-bold shadow-sm flex items-center justify-center mx-auto transition-all active:scale-95"
                style={{ background: "white", lineHeight: "2.5em" }}
              >
                <span className="relative z-10">Send Another Message</span>
              </button>
            </div>
          </div>
        )}

        <div className="w-full h-[400px] md:h-[500px] grayscale relative grayscale-map">
          <iframe
            src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL}
            className="w-full h-full border-0"
            title="KOLI Infotech office location map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-t from-[#fcfcfc] via-transparent to-transparent"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactUsScreen;
