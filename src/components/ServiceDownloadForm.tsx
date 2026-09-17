"use client";

import { useEffect, useState } from "react";
import { Download, RefreshCw, ShieldCheck } from "lucide-react";

const services = [
  {
    value: "service-1",
    label: "Roofing",
    pdf: "/pdf/roofing.pdf",
  },
  {
    value: "service-2",
    label: "Waterproofing",
    pdf: "/pdf/waterproofing.pdf",
  },
  {
    value: "service-3",
    label: "Masonry",
    pdf: "/pdf/masonry.pdf",
  },
  {
    value: "service-4",
    label: "Facade Restoration",
    pdf: "/pdf/facade-restoration.pdf",
  },
  {
    value: "service-5",
    label: "Stoop Restoration",
    pdf: "/pdf/stoop-restoration.pdf",
  },
  {
    value: "service-6",
    label: "Concrete Services",
    pdf: "/pdf/concrete-services.pdf",
  },
];

type FormErrors = {
  name: string;
  email: string;
  phone: string;
  service: string;
  captcha: string;
};

export default function ServiceDownloadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    captcha: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    service: "",
    captcha: "",
  });

  const [captcha, setCaptcha] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [responseType, setResponseType] = useState<
    "success" | "error" | null
  >(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const newCaptcha = Math.floor(
      1000 + Math.random() * 9000
    ).toString();

    setCaptcha(newCaptcha);

    setFormData((previous) => ({
      ...previous,
      captcha: "",
    }));

    setErrors((previous) => ({
      ...previous,
      captcha: "",
    }));

    setResponseMessage(null);
    setResponseType(null);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setResponseMessage(null);
    setResponseType(null);
  };

  const validate = () => {
    let isValid = true;

    const newErrors: FormErrors = {
      name: "",
      email: "",
      phone: "",
      service: "",
      captcha: "",
    };

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const service = formData.service.trim();
    const userCaptcha = formData.captcha.trim();

    // Name
    if (!name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }

    // Phone
    const phoneDigitsOnly = phone.replace(/\D/g, "");

    if (!phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(phoneDigitsOnly)) {
      newErrors.phone = "Phone number must be 10 to 15 digits";
      isValid = false;
    }

    // Service
    if (!service) {
      newErrors.service = "Please select a service";
      isValid = false;
    }

    // CAPTCHA
    if (!userCaptcha) {
      newErrors.captcha = "Please enter the CAPTCHA";
      isValid = false;
    } else if (userCaptcha !== captcha) {
      newErrors.captcha = "Incorrect CAPTCHA";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const areAllFieldsFilled =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.service.trim() !== "" &&
    formData.captcha.trim() !== "";

  const isCaptchaCorrect =
    formData.captcha.trim() !== "" &&
    formData.captcha.trim() === captcha;

  const showSubmitButton =
    areAllFieldsFilled && isCaptchaCorrect;

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setResponseMessage(null);
    setResponseType(null);

    if (!validate()) {
      return;
    }

    if (!isCaptchaCorrect) {
      setErrors((previous) => ({
        ...previous,
        captcha: "Incorrect CAPTCHA",
      }));

      return;
    }

    const selectedService = services.find(
      (service) => service.value === formData.service
    );

    if (!selectedService) {
      setResponseMessage("Please select a service.");
      setResponseType("error");
      return;
    }

    setLoading(true);

    try {
      // Send the service request through the same API
      // used by the existing contact form.
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: selectedService.label,
        }),
      });

      let result: {
        success?: boolean;
        message?: string;
        error?: string;
      };

      try {
        result = await response.json();
      } catch {
        result = {
          success: false,
          error: "Invalid response from the server.",
        };
      }

      // Do NOT download the PDF if the email request failed.
      if (!response.ok || !result.success) {
        setResponseMessage(
          result.error ||
            "Failed to submit your request. Please try again."
        );
        setResponseType("error");
        return;
      }

      // Email was successfully sent.
      // Download ONLY the selected service PDF.
      const link = document.createElement("a");

      link.href = selectedService.pdf;
      link.download =
        selectedService.pdf.split("/").pop() || "service.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setResponseMessage("Submitted successfully");
      setResponseType("success");

      // Reset form after successful submission.
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        captcha: "",
      });

      // Generate a fresh CAPTCHA.
      const newCaptcha = Math.floor(
        1000 + Math.random() * 9000
      ).toString();

      setCaptcha(newCaptcha);

      setErrors({
        name: "",
        email: "",
        phone: "",
        service: "",
        captcha: "",
      });
    } catch (error) {
      console.error("Service PDF form error:", error);

      // If the API request itself failed,
      // no PDF download will happen.
      setResponseMessage(
        "Something went wrong. Please try again."
      );
      setResponseType("error");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="w-full rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:p-7 md:p-8 lg:p-10"
      style={{ fontFamily: "var(--font-forum)" }}
    >
      {/* Header */}
      <div className="mb-7">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-stone-700">
          <Download
            className="h-3.5 w-3.5"
            aria-hidden="true"
          />
          Service Guide
        </div>

        <h2 className="text-2xl font-semibold leading-tight text-stone-900 md:text-3xl">
          Download Your Service Guide
        </h2>

        <p className="mt-2 max-w-xl text-base leading-7 text-stone-600">
          Select the service you are interested in, enter your
          details, and receive the corresponding PDF guide after
          submission.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="service-download-name"
            className="mb-2 block text-base font-medium text-stone-800"
          >
            Name <span className="text-red-600">*</span>
          </label>

          <input
            type="text"
            id="service-download-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={
              errors.name
                ? "service-download-name-error"
                : undefined
            }
            className={`h-12 w-full rounded-lg border bg-white px-4 text-base text-stone-900 outline-none transition placeholder:text-stone-400 ${
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-stone-300 focus:border-stone-800"
            }`}
          />

          {errors.name && (
            <p
              id="service-download-name-error"
              className="mt-1.5 text-sm text-red-600"
            >
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="service-download-email"
            className="mb-2 block text-base font-medium text-stone-800"
          >
            Email Address <span className="text-red-600">*</span>
          </label>

          <input
            type="email"
            id="service-download-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email
                ? "service-download-email-error"
                : undefined
            }
            className={`h-12 w-full rounded-lg border bg-white px-4 text-base text-stone-900 outline-none transition placeholder:text-stone-400 ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-stone-300 focus:border-stone-800"
            }`}
          />

          {errors.email && (
            <p
              id="service-download-email-error"
              className="mt-1.5 text-sm text-red-600"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="service-download-phone"
            className="mb-2 block text-base font-medium text-stone-800"
          >
            Phone Number <span className="text-red-600">*</span>
          </label>

          <input
            type="tel"
            id="service-download-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={
              errors.phone
                ? "service-download-phone-error"
                : undefined
            }
            className={`h-12 w-full rounded-lg border bg-white px-4 text-base text-stone-900 outline-none transition placeholder:text-stone-400 ${
              errors.phone
                ? "border-red-500 focus:border-red-500"
                : "border-stone-300 focus:border-stone-800"
            }`}
          />

          {errors.phone && (
            <p
              id="service-download-phone-error"
              className="mt-1.5 text-sm text-red-600"
            >
              {errors.phone}
            </p>
          )}
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service-download-service"
            className="mb-2 block text-base font-medium text-stone-800"
          >
            Select Service <span className="text-red-600">*</span>
          </label>

          <select
            id="service-download-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={
              errors.service
                ? "service-download-service-error"
                : undefined
            }
            className={`h-12 w-full rounded-lg border bg-white px-4 text-base text-stone-900 outline-none transition ${
              errors.service
                ? "border-red-500 focus:border-red-500"
                : "border-stone-300 focus:border-stone-800"
            }`}
          >
            <option value="">Select a service</option>

            {services.map((service) => (
              <option
                key={service.value}
                value={service.value}
              >
                {service.label}
              </option>
            ))}
          </select>

          {errors.service && (
            <p
              id="service-download-service-error"
              className="mt-1.5 text-sm text-red-600"
            >
              {errors.service}
            </p>
          )}
        </div>

        {/* CAPTCHA */}
        <div>
          <label
            htmlFor="service-download-captcha"
            className="mb-2 block text-base font-medium text-stone-800"
          >
            Security Check <span className="text-red-600">*</span>
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* CAPTCHA Display */}
            <div
              className="flex h-12 min-w-[120px] items-center justify-center rounded-lg border border-stone-300 bg-stone-100 px-4 select-none"
              aria-label={`CAPTCHA code ${captcha}`}
            >
              <span className="text-lg font-bold tracking-[0.25em] text-stone-900">
                {captcha}
              </span>
            </div>

            {/* Refresh CAPTCHA */}
            <button
              type="button"
              onClick={generateCaptcha}
              aria-label="Refresh CAPTCHA"
              title="Refresh CAPTCHA"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-stone-300 bg-white text-stone-700 transition hover:bg-stone-100 sm:h-12 sm:w-12"
            >
              <RefreshCw
                className="h-4 w-4"
                aria-hidden="true"
              />
            </button>

            {/* CAPTCHA Input */}
            <input
              type="text"
              id="service-download-captcha"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              placeholder="Enter CAPTCHA"
              inputMode="numeric"
              autoComplete="off"
              aria-invalid={Boolean(errors.captcha)}
              aria-describedby={
                errors.captcha
                  ? "service-download-captcha-error"
                  : undefined
              }
              className={`h-12 w-full rounded-lg border bg-white px-4 text-base text-stone-900 outline-none transition placeholder:text-stone-400 ${
                errors.captcha
                  ? "border-red-500 focus:border-red-500"
                  : "border-stone-300 focus:border-stone-800"
              }`}
            />
          </div>

          {errors.captcha && (
            <p
              id="service-download-captcha-error"
              className="mt-1.5 text-sm text-red-600"
            >
              {errors.captcha}
            </p>
          )}
        </div>

        {/* Security Note */}
        <div className="flex items-start gap-3 rounded-lg border border-stone-200 bg-stone-50 px-4 py-3.5">
          <ShieldCheck
            className="mt-0.5 h-5 w-5 shrink-0 text-stone-700"
            aria-hidden="true"
          />

          <p className="text-sm leading-6 text-stone-600">
            Your information is used to process your service guide
            request. After successful submission, only the PDF for
            your selected service will be downloaded.
          </p>
        </div>

        {/* Submit Button */}
        {showSubmitButton && (
          <button
            type="submit"
            disabled={loading}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-stone-900 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <RefreshCw
                  className="h-5 w-5 animate-spin"
                  aria-hidden="true"
                />
                Processing...
              </>
            ) : (
              <>
                <Download
                  className="h-5 w-5"
                  aria-hidden="true"
                />
                Submit & Download Guide
              </>
            )}
          </button>
        )}

        {/* Response Message */}
        {responseMessage && (
          <div
            role={
              responseType === "success"
                ? "status"
                : "alert"
            }
            className={`rounded-lg border px-4 py-3 text-center text-sm ${
              responseType === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {responseMessage}
          </div>
        )}
      </form>
    </div>
  );
}