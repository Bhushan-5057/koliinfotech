import React, { Fragment, useEffect, useState, useRef } from "react";import openingData from "@/data/opening.json";
import "./CareerScreen.css";

const BRAND_BLUE = "#3f689f";



const EXPERIENCE_YEARS = [
  "Fresher (0 – 1 Year)",
  "1 – 2 Years",
  "2 – 3 Years",
  "3 – 5 Years",
  "5+ Years",
];

const FloatingField = ({ label, error, children, hasValue, isFocused }) => (
  <div style={{ position: "relative", paddingTop: "20px" }}>
    <label style={{
      position: "absolute",
      left: 2,
      top: hasValue || isFocused ? 0 : "20px",
      fontSize: hasValue || isFocused ? "0.72rem" : "0.95rem",
      color: isFocused ? BRAND_BLUE : (hasValue ? "#64748b" : "#94a3b8"),
      fontWeight: isFocused ? "700" : "500",
      transition: "all 0.2s ease",
      pointerEvents: "none",
      letterSpacing: hasValue || isFocused ? "0.04em" : "0",
    }}>
      {label}
    </label>
    {children}
    {error && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: 4, fontWeight: "600" }}>{error}</p>}
  </div>
);


const ApplyModal = ({ job, onClose, jobs = [] }) => {
  const fileRef = useRef();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: job?.job_title || job?.title || "",
    experienceYear: job?.experience || "",
    currentLocation: "",
    file: null,
  });
  const [focused, setFocused] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email is required.";
    if (!form.phone.trim() || !/^\d{7,15}$/.test(form.phone))
      e.phone = "Valid phone number is required.";
    if (!form.experienceYear) e.experienceYear = "Please select experience.";
    if (!form.currentLocation.trim()) e.currentLocation = "Location is required.";
    if (!form.file) e.file = "Please upload your CV (PDF only).";
    else if (form.file.type !== "application/pdf") e.file = "Only PDF files are accepted.";
    return e;
  };

  const hc = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleFile = (e) => { hc("file", e.target.files[0] || null); };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    // Static site — no API call; show thank-you popup
    setSubmitted(true);
  };

  const underline = (field) => ({
    width: "100%", height: "38px", boxSizing: "border-box", border: "none",
    borderBottom: `1.5px solid ${errors[field] ? "#ef4444" : focused[field] ? BRAND_BLUE : "#d1d9e0"}`,
    borderRadius: 0, padding: "10px 2px 4px",
    fontSize: "0.97rem", color: "#0f172a",
    fontFamily: "inherit", fontWeight: "500",
    outline: "none", background: "transparent",
    transition: "border-color 0.2s",
  });

  const onFocus = (f) => setFocused((p) => ({ ...p, [f]: true }));
  const onBlur = (f) => setFocused((p) => ({ ...p, [f]: false }));

  return (
    <div
      onClick={onClose}
      className="apply-modal-wrapper"
      style={{
        position: "fixed", inset: 0,
        background: "rgba(10, 20, 40, 0.35)",
        backdropFilter: "blur(6px)",
        zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#ffffff", borderRadius: "20px",
          width: "95%", maxWidth: "600px",
          maxHeight: "90vh",
          display: "flex", flexDirection: "column",
          boxShadow: "0 40px 100px rgba(0,0,0,0.2)",
          overflow: "hidden",
        }}
      >
        {/* Header — title + close only, no subtitle */}
        <div
          className="apply-modal-header"
          style={{
            padding: "26px 34px 18px",
            borderBottom: "1.5px solid #edf2f8",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}
        >
          <h3 style={{ fontWeight: "900", color: "#0f172a", fontSize: "1.3rem", margin: 0, letterSpacing: "-0.02em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>
            Apply for <span style={{ color: BRAND_BLUE }}>{job?.title === "Other" ? "General Position" : job?.title}</span>
          </h3>
          <button
            onClick={onClose}
            style={{
              width: 34, height: 34, borderRadius: "50%",
              border: `2px solid ${BRAND_BLUE}30`,
              background: `${BRAND_BLUE}08`,
              color: BRAND_BLUE, fontWeight: "900", fontSize: "1rem",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s", lineHeight: 1, flexShrink: 0,
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = BRAND_BLUE; e.currentTarget.style.color = "#fff"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = `${BRAND_BLUE}08`; e.currentTarget.style.color = BRAND_BLUE; }}
          >✕</button>
        </div>

        {submitted ? (
          <div style={{ padding: "60px 36px", textAlign: "center", overflowY: "auto" }}>
            <div style={{
              width: 72, height: 72, borderRadius: "50%",
              background: `${BRAND_BLUE}10`, border: `2px solid ${BRAND_BLUE}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px", fontSize: "1.8rem", color: BRAND_BLUE, fontWeight: "900",
            }}>✓</div>
            <h4 style={{ fontWeight: "900", color: "#0f172a", fontSize: "1.4rem", marginBottom: "12px" }}>Thank You for Applying!</h4>
            <p style={{ color: "#64748b", fontWeight: "500", fontSize: "1rem", maxWidth: "360px", margin: "0 auto 28px", lineHeight: 1.65 }}>
              Thank you for applying. We will reach you soon.
            </p>
            <button onClick={onClose} style={{
              background: BRAND_BLUE, color: "#fff", border: "none",
              borderRadius: "999px", padding: "12px 32px",
              fontWeight: "800", fontSize: "0.9rem", cursor: "pointer",
              boxShadow: `0 8px 20px ${BRAND_BLUE}30`,
            }}>Close</button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="apply-modal-content"
            style={{ overflowY: "auto", overflowX: "hidden" }}
          >
            {/* Row 1 */}
            <div className="row gx-3 gy-0 mb-1">
              <div className="col-md-6 col-12">
                <FloatingField label="First name" error={errors.firstName} hasValue={!!form.firstName} isFocused={focused.firstName}>
                  <input value={form.firstName} onChange={(e) => hc("firstName", e.target.value)} onFocus={() => onFocus("firstName")} onBlur={() => onBlur("firstName")} style={underline("firstName")} />
                </FloatingField>
              </div>
              <div className="col-md-6 col-12">
                <FloatingField label="Last name" error={errors.lastName} hasValue={!!form.lastName} isFocused={focused.lastName}>
                  <input value={form.lastName} onChange={(e) => hc("lastName", e.target.value)} onFocus={() => onFocus("lastName")} onBlur={() => onBlur("lastName")} style={underline("lastName")} />
                </FloatingField>
              </div>
            </div>

            {/* Row 2 */}
            <div className="row gx-3 gy-0 mb-1">
              <div className="col-md-6 col-12">
                <FloatingField label="Email address" error={errors.email} hasValue={!!form.email} isFocused={focused.email}>
                  <input type="email" value={form.email} onChange={(e) => hc("email", e.target.value)} onFocus={() => onFocus("email")} onBlur={() => onBlur("email")} style={underline("email")} />
                </FloatingField>
              </div>
              <div className="col-md-6 col-12">
                {/* Phone — fixed height for perfect baseline alignment */}
                <div style={{ position: "relative", paddingTop: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", height: "38px", boxSizing: "border-box", borderBottom: `1.5px solid ${errors.phone ? "#ef4444" : focused.phone ? BRAND_BLUE : "#d1d9e0"}`, transition: "border-color 0.2s", padding: "10px 2px 4px" }}>
                    <span style={{ fontSize: "0.9rem", color: "#334155", fontWeight: "700", paddingRight: "4px", whiteSpace: "nowrap", flexShrink: 0 }}>🇮🇳 +91 </span>
                    <input
                      type="tel"
                      placeholder="6353131771"
                      className="phone-input"
                      value={form.phone}
                      onChange={(e) => hc("phone", e.target.value.replace(/\D/, ""))}
                      onFocus={() => onFocus("phone")}
                      onBlur={() => onBlur("phone")}
                      style={{ flex: 1, border: "none", padding: 0, fontSize: "0.97rem", background: "transparent", outline: "none", fontFamily: "inherit", fontWeight: "500", color: "#0f172a", height: "100%" }}
                    />
                  </div>
                  {errors.phone && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: 4, fontWeight: "600" }}>{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="row gx-3 gy-0 mb-1">
              <div className="col-md-6 col-12">
                <div style={{ position: "relative", paddingTop: "20px" }}>
                  <label style={{ position: "absolute", left: 2, top: 0, fontSize: "0.72rem", color: "#64748b", fontWeight: "700", letterSpacing: "0.04em", pointerEvents: "none" }}>Please Select Position</label>
                  <select value={form.position} onChange={(e) => hc("position", e.target.value)} style={{ width: "100%", height: "38px", border: "none", borderBottom: `1.5px solid #d1d9e0`, borderRadius: 0, padding: "10px 2px 4px", fontSize: "0.97rem", color: "#0f172a", fontFamily: "inherit", fontWeight: "500", outline: "none", background: "transparent", cursor: "pointer", appearance: "auto" }}>
                    {jobs.map((j) => (<option key={j.id} value={j.job_title || j.title}>{j.job_title || j.title}</option>))}
                    <option value="Other">Other / Not Listed</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div style={{ position: "relative", paddingTop: "20px" }}>
                  <label style={{ position: "absolute", left: 2, top: 0, fontSize: "0.72rem", color: focused.exp ? BRAND_BLUE : "#64748b", fontWeight: "700", letterSpacing: "0.04em", transition: "color 0.2s", pointerEvents: "none" }}>Select Experience Year</label>
                  <select value={form.experienceYear} onChange={(e) => hc("experienceYear", e.target.value)} onFocus={() => onFocus("exp")} onBlur={() => onBlur("exp")} style={{ width: "100%", height: "38px", border: "none", borderBottom: `1.5px solid ${errors.experienceYear ? "#ef4444" : focused.exp ? BRAND_BLUE : "#d1d9e0"}`, borderRadius: 0, padding: "10px 2px 4px", fontSize: "0.97rem", color: form.experienceYear ? "#0f172a" : "#94a3b8", fontFamily: "inherit", fontWeight: "500", outline: "none", background: "transparent", cursor: "pointer", appearance: "auto", transition: "border-color 0.2s" }}>
                    <option value="" disabled>Select Experience Year</option>
                    {EXPERIENCE_YEARS.map((y) => (<option key={y} value={y}>{y}</option>))}
                  </select>
                  {errors.experienceYear && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: 4, fontWeight: "600" }}>{errors.experienceYear}</p>}
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="row gx-3 gy-0 mb-1">
              <div className="col-md-6 col-12">
                <FloatingField label="Current Location" error={errors.currentLocation} hasValue={!!form.currentLocation} isFocused={focused.currentLocation}>
                  <input value={form.currentLocation} onChange={(e) => hc("currentLocation", e.target.value)} onFocus={() => onFocus("currentLocation")} onBlur={() => onBlur("currentLocation")} style={underline("currentLocation")} />
                </FloatingField>
              </div>
              <div className="col-md-6 col-12">
                {/* Upload — use same FloatingField + underline structure as inputs */}
                <FloatingField label="Upload Resume" error={errors.file} hasValue={!!form.file} isFocused={false}>
                  <div style={{ position: "relative" }}>
                    <div
                      onClick={() => fileRef.current.click()}
                      style={{
                        ...underline("file"),
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        paddingRight: "100px", /* for button */
                      }}
                    >
                      <span style={{ fontSize: "0.9rem", color: form.file ? "#0f172a" : "transparent", fontWeight: "500", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {form.file ? form.file.name : ""}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => fileRef.current.click()}
                      style={{
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: BRAND_BLUE,
                        color: "#fff",
                        border: "none",
                        borderRadius: "999px",
                        padding: "5px 14px",
                        fontWeight: "700",
                        fontSize: "0.78rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        boxShadow: `0 4px 10px ${BRAND_BLUE}20`,
                      }}
                    >
                      Select File
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    </button>
                    <input ref={fileRef} type="file" accept=".pdf" onChange={handleFile} style={{ display: "none" }} />
                  </div>
                </FloatingField>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" style={{
              background: BRAND_BLUE, color: "#fff", border: "none",
              borderRadius: "999px", padding: "13px 36px",
              fontWeight: "800", fontSize: "0.95rem",
              cursor: "pointer",
              boxShadow: `0 10px 24px ${BRAND_BLUE}30`,
              transition: "all 0.25s ease",
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              Send CV Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// ─── Job Row (List-style Accordion) ──────────────────────────────────────────
const JobRow = ({ job, index, onApply }) => {
  const [expanded, setExpanded] = useState(false);

  const requirements = Array.isArray(job.requirements)
    ? job.requirements
    : typeof job.requirement === "string"
      ? job.requirement.split("\n").filter((r) => r.trim() !== "")
      : (job.responsibilities || []);

  const skillList = Array.isArray(job.skills)
    ? job.skills
    : typeof job.skills === "string"
      ? job.skills.split(",").map((s) => s.trim()).filter((s) => s !== "")
      : [];

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 80}
      style={{
        background: "#ffffff",
        borderRadius: "14px",
        marginBottom: "12px",
        border: `1.5px solid ${expanded ? BRAND_BLUE + "30" : "#edf2f8"}`,
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: expanded ? `0 12px 40px ${BRAND_BLUE}10` : "0 2px 8px rgba(0,0,0,0.03)",
      }}
    >
      {/* Row Header — the list item */}
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px 28px",
          cursor: "pointer",
          userSelect: "none",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        {/* Title */}
        <div style={{ flex: "2 1 180px", minWidth: 0 }}>
          <h4 style={{
            margin: 0,
            fontWeight: "800",
            color: expanded ? BRAND_BLUE : "#0f172a",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            letterSpacing: "-0.01em",
            transition: "color 0.3s",
          }}>
            {job.job_title || job.title}
          </h4>
        </div>

        {/* Experience */}
        <div style={{ flex: "1 1 260px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <span style={{ fontSize: "0.88rem", color: BRAND_BLUE, fontWeight: "700" }}>
            {job.experience}
          </span>
        </div>

        {/* Location */}
        <div style={{ flex: "1 1 100px", display: "flex", alignItems: "center", gap: "6px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={BRAND_BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <span style={{ fontSize: "0.88rem", fontWeight: "700", color: "#475569" }}>{job.location}</span>
        </div>

        {/* Chevron Arrow */}
        <div style={{
          width: 32, height: 32,
          borderRadius: "50%",
          border: `1.5px solid ${BRAND_BLUE}22`,
          background: expanded ? `${BRAND_BLUE}0f` : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.35s ease",
          transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={BRAND_BLUE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      {/* Expanded Content Wrapper — Smooth height transition */}
      <div style={{
        display: "grid",
        gridTemplateRows: expanded ? "1fr" : "0fr",
        transition: "grid-template-rows 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{ borderTop: `1.5px solid ${BRAND_BLUE}10`, padding: "28px 28px 32px", background: "#fafcff" }}>
            {/* Description */}
            <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: "1.8", fontWeight: "500", marginBottom: "20px" }}>
              {job.description}
            </p>

            {/* Requirements */}
            <h5 style={{ fontWeight: "800", color: "#0f172a", fontSize: "1.0rem", marginBottom: "16px", letterSpacing: "-0.01em" }}>
              Requirements
            </h5>
            <div className="d-flex flex-column gap-2 mb-4">
              {requirements.map((r, i) => (
                <div key={i} style={{
                  display: "flex", gap: "12px", alignItems: "flex-start",
                  padding: "12px 16px",
                  background: "#ffffff",
                  border: `1px solid ${BRAND_BLUE}10`,
                  borderLeft: `3px solid ${BRAND_BLUE}40`,
                  borderRadius: "0 8px 8px 0",
                }}>
                  <span style={{ color: "#334155", fontSize: "0.93rem", lineHeight: "1.65", fontWeight: "500" }}>{r}</span>
                </div>
              ))}
            </div>

            {/* Key Skills */}
            <div className="d-flex flex-wrap gap-2 mb-5">
              {skillList.map((s, i) => (
                <span key={i} style={{
                  background: `${BRAND_BLUE}0c`, color: BRAND_BLUE,
                  border: `1px solid ${BRAND_BLUE}20`,
                  padding: "4px 14px", borderRadius: "999px",
                  fontSize: "0.8rem", fontWeight: "700",
                }}>{s}</span>
              ))}
            </div>

            {/* Apply Now — inside expanded area */}
            <button
              onClick={() => onApply(job)}
              style={{
                background: BRAND_BLUE, color: "#fff", border: "none",
                borderRadius: "999px", padding: "12px 30px",
                fontWeight: "800", fontSize: "0.92rem",
                letterSpacing: "0.04em", cursor: "pointer",
                boxShadow: `0 8px 20px ${BRAND_BLUE}30`,
                transition: "all 0.25s ease",
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Screen ──────────────────────────────────────────────────────────────
const CareerScreen = () => {
  const [activeJob, setActiveJob] = useState(null);
  const jobs = openingData || [];
return (
    <Fragment>
      {activeJob && <ApplyModal job={activeJob} onClose={() => setActiveJob(null)} jobs={jobs} />}

      <section
        id="openings"
        style={{
          background: "linear-gradient(180deg, #f4f8fd 0%, #ffffff 50%)",
          paddingTop: "90px", paddingBottom: "110px",
          position: "relative", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(${BRAND_BLUE}06 1.5px, transparent 1.5px)`, backgroundSize: "30px 30px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-15%", right: "-8%", width: "40%", height: "70%", background: `radial-gradient(circle, ${BRAND_BLUE}07 0%, transparent 65%)`, pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1000px" }}>

          {/* Header */}
          <div className="text-center mb-4" data-aos="fade-up">
            <span style={{
              display: "inline-block", background: `${BRAND_BLUE}0f`, color: BRAND_BLUE,
              fontWeight: "800", fontSize: "0.72rem", letterSpacing: "0.18em",
              padding: "7px 20px", borderRadius: "999px",
              border: `1px solid ${BRAND_BLUE}22`, marginBottom: "22px", textTransform: "uppercase",
            }}>We're Hiring</span>
            <h2 style={{
              color: "#0f172a", fontWeight: "900",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.04em", lineHeight: "1.05", marginBottom: "18px",
            }}>
              Join the Team at <span style={{ color: BRAND_BLUE }}>KOLI Infotech</span>
            </h2>
            <p style={{ color: "#64748b", fontSize: "1.05rem", lineHeight: "1.75", maxWidth: "580px", margin: "0 auto 48px", fontWeight: "500" }}>
              We architect the future of technology. Explore our current openings and find a role that aligns with your professional evolution.
            </p>
          </div>


          {/* Column Header Row */}
          <div
            data-aos="fade-up"
            className="d-none d-md-flex align-items-center"
            style={{ padding: "0 28px 12px", gap: "16px" }}
          >
            <div style={{ flex: "2 1 180px", fontSize: "0.75rem", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>Position</div>
            <div style={{ flex: "1 1 260px", textAlign: "center", fontSize: "0.75rem", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>Experience</div>
            <div style={{ flex: "1 1 100px", fontSize: "0.75rem", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>Location</div>
            <div style={{ width: 32 }} />
          </div>

          {/* Job List */}
          {jobs && jobs.length > 0 ? (
            jobs.map((job, index) => (
              <JobRow key={job.id} job={job} index={index} onApply={setActiveJob} />
            ))
          ) : (
            <div className="text-center py-5" data-aos="fade-up">
              <div style={{
                width: "80px",
                height: "80px",
                background: `${BRAND_BLUE}08`,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                border: `1.5px dashed ${BRAND_BLUE}20`
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={BRAND_BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3 style={{ fontWeight: "800", color: "#0f172a", fontSize: "1.5rem", marginBottom: "12px" }}>No Vacancy Available</h3>
              <p style={{ color: "#64748b", fontSize: "1rem", fontWeight: "500", maxWidth: "450px", margin: "0 auto" }}>
                We don't have any open positions at the moment, but we're always growing. Please check back later!
              </p>
            </div>
          )}

          {/* Other Positions Section */}
          <div
            data-aos="fade-up"
            style={{
              marginTop: "50px",
              padding: "40px",
              background: "#ffffff",
              borderRadius: "20px",
              border: `1.5px dashed ${BRAND_BLUE}40`,
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
            }}
          >
            <div style={{
              width: "60px",
              height: "60px",
              background: `${BRAND_BLUE}10`,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BRAND_BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" />
              </svg>
            </div>
            <h3 style={{ fontWeight: "900", color: "#0f172a", fontSize: "1.4rem", marginBottom: "12px" }}>Didn't find what you're looking for?</h3>
            <p style={{ color: "#64748b", fontSize: "1.05rem", fontWeight: "500", maxWidth: "500px", margin: "0 auto 30px", lineHeight: "1.6" }}>
              We're always on the lookout for talented individuals. If you don't see a role that fits but think you'd be a great addition to the team, we'd love to hear from you.
            </p>
            <button
              onClick={() => setActiveJob({ title: "Other" })}
              style={{
                background: BRAND_BLUE,
                color: "#fff",
                borderRadius: "999px",
                padding: "14px 40px",
                fontWeight: "800",
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
                boxShadow: `0 10px 25px ${BRAND_BLUE}30`,
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              General Application
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CareerScreen;
