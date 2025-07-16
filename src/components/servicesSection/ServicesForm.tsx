"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
const ServicesForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    const phoneTrimmed = formData.phone.trim();
    const phoneDigitsOnly = phoneTrimmed.replace(/\D/g, "");
    if (!phoneTrimmed) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(phoneDigitsOnly)) {
      newErrors.phone = "Phone number must be 10 to 15 digits";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the field-level error
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage(null);

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setResponseMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div
      className="p-8 lg:p-12 bg-orange-50 border border-stone-200 rounded-xl shadow-lg
              dark:bg-gray-900 dark:border-gray-800 text-stone-800 dark:text-gray-200"
      style={{ fontFamily: "var(--font-forum)" }}
    >
      <h2 className="mb-2 md:mb-4 text-2xl lg:text-4xl font-semibold">Get in Touch</h2>
      <div className="mb-2 md:mb-4 flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-4 text-center sm:text-left">
        <p className="text-lg text-stone-700 dark:text-gray-300">
          Or speak to us directly
        </p>
        <Link
          href="tel:3479395779"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary bg-primary text-white font-semibold shadow-md transition-all duration-300 hover:bg-white hover:text-primary"
        >
          <Phone className="w-5 h-5" />
          <span className="tracking-wide text-base">(347) 939 5779</span>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name*"
            className="w-full px-4 py-2 mt-2 rounded-lg text-black dark:text-white dark:bg-slate-950"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email*"
            className="w-full px-4 py-2 mt-2 rounded-lg text-black dark:text-white dark:bg-slate-950"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-lg">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number*"
            className="w-full px-4 py-2 mt-2 rounded-lg text-black dark:text-white dark:bg-slate-950"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-lg">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Enter your message"
            className="w-full px-4 py-2 mt-2 rounded-lg text-black dark:text-white dark:bg-slate-950"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="py-3 px-4 bg-secondary transition-all duration-200 hover:bg-stone-900 text-white rounded-lg"
            disabled={loading}
          >
            {loading ? (
              <Oval
                color="white"
                strokeWidth={5}
                height={24}
                width={92}
                secondaryColor="wheat"
              />
            ) : (
              "Send Message"
            )}
          </button>
        </div>

        {responseMessage && (
          <p className="mt-4 text-center text-lg">{responseMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ServicesForm;
