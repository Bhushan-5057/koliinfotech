import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { createApplyJob } from "@/Redux/module/createApplyJob";
import Link from "next/link";
import { toast } from "react-toastify";

const generateCaptcha = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: 6 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
};

const fieldClass =
  "w-full rounded border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-[#3f689f] focus:ring-1 focus:ring-[#3f689f]";
const labelClass = "mb-1 block text-sm font-medium text-gray-700";
const errorClass = "mt-1 block text-xs text-red-600";

const FormSection = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const ID = router.query;

  const ApplyResult = useSelector((state) => state?.createApplyJob);
  const isLoading = ApplyResult?.loading;
  const isSuccess = ApplyResult?.isSuccess;

  const [selectedFile, setSelectedFile] = useState(null);
  const [captchaText, setCaptchaText] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const [data, setData] = useState({
    opening_ref_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    experience_years: "",
    in_days: "",
    current_location: "",
    skills: "",
    gender: "",
    errors: {},
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setData((prev) => ({
          ...prev,
          [name]: numericValue,
          errors: { ...prev.errors, [name]: "" },
        }));
      }
      return;
    }

    setData((prev) => ({
      ...prev,
      [name]: value,
      errors: { ...prev.errors, [name]: "" },
    }));
  };

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const resetForm = () => {
    setSubmitted(false);
    setSelectedFile(null);
    setCaptchaText(generateCaptcha());
    setCaptchaInput("");
    setData({
      opening_ref_id: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      experience_years: "",
      in_days: "",
      current_location: "",
      skills: "",
      gender: "",
      errors: {},
    });
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast.success(
        ApplyResult?.applyData?.data?.message ||
          "Application submitted successfully!",
        { autoClose: 2500 }
      );
      resetForm();
    } else if (ApplyResult?.error?.data?.message) {
      toast.error(
        ApplyResult?.error?.data?.message ||
          "Submission failed. Please try again."
      );
    }
  }, [isSuccess, ApplyResult]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const errors = {};
    if (!data.first_name) errors.first_name = "First name is required";
    if (!data.last_name) errors.last_name = "Last name is required";
    if (!emailRegex.test(data.email)) errors.email = "Valid email is required";
    if (!phoneRegex.test(data.phone))
      errors.phone = "Valid 10-digit number required";
    if (!data.gender) errors.gender = "Please select gender";
    if (!data.experience_years) errors.experience = "Experience is required";
    if (!data.in_days) errors.in_days = "Availability required";
    if (!data.current_location) errors.current_location = "Location required";
    if (!selectedFile) errors.resume = "Resume is required";
    if (captchaInput.trim().toLowerCase() !== captchaText.toLowerCase())
      errors.captcha = "Captcha does not match";

    if (Object.keys(errors).length > 0) {
      setData((prev) => ({ ...prev, errors }));
      toast.error("Please correct the errors before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("opening_ref_id", ID.Id || "");
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("gender", data.gender);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("experience", data.experience_years);
    formData.append("in_days", data.in_days);
    formData.append("current_location", data.current_location);
    formData.append("skills", data.skills);
    formData.append("resume", selectedFile);

    dispatch(createApplyJob(formData));
  };

  return (
    <Fragment>
      <div
        className="mx-auto mt-6 max-w-[1300px] rounded-lg p-6"
        data-aos="zoom-in"
      >
        <h2 className="mb-2 text-center text-2xl font-semibold text-gray-900 md:text-3xl">
          Apply for this Job
        </h2>
        <div className="cst-hr-for-process mb-5"></div>
        <form onSubmit={handleSubmit}>
          <div className="mx-auto mt-8 max-w-[900px]">
            <div className="mb-6 rounded-lg border border-dashed border-gray-300 bg-gray-100 p-4 text-center">
              <label className="mb-2 inline-block cursor-pointer rounded border border-[#3f689f] px-4 py-2 text-sm font-medium text-[#3f689f] hover:bg-[#3f689f] hover:text-white">
                Upload Resume
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.rtf,.odt"
                  onChange={onFileChange}
                />
              </label>
              <p className="block text-xs text-gray-600">
                Max 10MB (Allowed: .doc, .pdf, .docx, .rtf, .odt)
              </p>
              {selectedFile && (
                <p className="mt-1 text-xs text-gray-700">
                  Selected: <strong>{selectedFile.name}</strong>
                </p>
              )}
              {submitted && data.errors.resume && (
                <span className={errorClass}>{data.errors.resume}</span>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first_name" className={labelClass}>
                  First Name
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  className={fieldClass}
                  value={data.first_name}
                  onChange={handleChange}
                  aria-invalid={submitted && !!data.errors.first_name}
                />
                {submitted && data.errors.first_name && (
                  <span className={errorClass}>{data.errors.first_name}</span>
                )}
              </div>

              <div>
                <label htmlFor="last_name" className={labelClass}>
                  Last Name
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  className={fieldClass}
                  value={data.last_name}
                  onChange={handleChange}
                  aria-invalid={submitted && !!data.errors.last_name}
                />
                {submitted && data.errors.last_name && (
                  <span className={errorClass}>{data.errors.last_name}</span>
                )}
              </div>

              <div>
                <label htmlFor="gender" className={labelClass}>
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className={fieldClass}
                  value={data.gender}
                  onChange={handleChange}
                  aria-invalid={submitted && !!data.errors.gender}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {submitted && data.errors.gender && (
                  <span className={errorClass}>{data.errors.gender}</span>
                )}
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={fieldClass}
                  value={data.email}
                  onChange={handleChange}
                  aria-invalid={submitted && !!data.errors.email}
                />
                {submitted && data.errors.email && (
                  <span className={errorClass}>{data.errors.email}</span>
                )}
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  inputMode="numeric"
                  className={fieldClass}
                  value={data.phone}
                  onChange={handleChange}
                  aria-invalid={submitted && !!data.errors.phone}
                />
                {submitted && data.errors.phone && (
                  <span className={errorClass}>{data.errors.phone}</span>
                )}
              </div>

              <div>
                <label htmlFor="experience_years" className={labelClass}>
                  Years of Experience
                </label>
                <input
                  id="experience_years"
                  name="experience_years"
                  type="number"
                  className={fieldClass}
                  value={data.experience_years}
                  onChange={handleChange}
                  aria-invalid={submitted && !!data.errors.experience}
                />
                {submitted && data.errors.experience && (
                  <span className={errorClass}>{data.errors.experience}</span>
                )}
              </div>

              <div>
                <label htmlFor="in_days" className={labelClass}>
                  Availability (in days)
                </label>
                <input
                  id="in_days"
                  name="in_days"
                  type="number"
                  className={fieldClass}
                  value={data.in_days}
                  onChange={handleChange}
                  aria-invalid={submitted && !!data.errors.in_days}
                />
                {submitted && data.errors.in_days && (
                  <span className={errorClass}>{data.errors.in_days}</span>
                )}
              </div>

              <div>
                <label htmlFor="current_location" className={labelClass}>
                  Current Location
                </label>
                <input
                  id="current_location"
                  name="current_location"
                  className={fieldClass}
                  value={data.current_location}
                  onChange={handleChange}
                  aria-invalid={submitted && !!data.errors.current_location}
                />
                {submitted && data.errors.current_location && (
                  <span className={errorClass}>
                    {data.errors.current_location}
                  </span>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="skills" className={labelClass}>
                  Skills
                </label>
                <input
                  id="skills"
                  name="skills"
                  className={fieldClass}
                  value={data.skills}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-2">
                <div className="flex flex-wrap items-center gap-3">
                  {hasMounted && (
                    <div
                      className="select-none rounded border border-gray-300 px-3 py-2 font-semibold tracking-wider"
                      aria-hidden="true"
                    >
                      {captchaText}
                    </div>
                  )}
                  <div className="min-w-[180px] flex-1">
                    <label htmlFor="captcha" className={labelClass}>
                      Enter Captcha
                    </label>
                    <input
                      id="captcha"
                      name="captcha"
                      className={fieldClass}
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      aria-invalid={submitted && !!data.errors?.captcha}
                    />
                    {submitted && data.errors?.captcha && (
                      <span className={errorClass}>{data.errors.captcha}</span>
                    )}
                  </div>
                  <button
                    type="button"
                    className="mt-5 rounded border border-gray-300 px-3 py-2 text-lg"
                    onClick={() => setCaptchaText(generateCaptcha())}
                    aria-label="Refresh captcha"
                  >
                    ↻
                  </button>
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="agree" className="mt-1" />
                  <label htmlFor="agree" className="text-sm text-gray-700">
                    I agree to the{" "}
                    <Link href="/contact-us" className="text-[#2f75ff] underline">
                      Privacy Policy
                    </Link>{" "}
                    and consent to data processing.
                  </label>
                </div>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 inline-flex items-center rounded bg-[#3f689f] px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60"
                >
                  {isLoading ? "Submitting..." : "Apply Now"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default FormSection;
