"use client";

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
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validate = () => {
    const newErrors = { name: "", email: "", phone: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
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

    // Clear error as user types
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
      className="p-6 lg:p-12 lg:py-6 text-black dark:text-white"
      style={{ fontFamily: "var(--font-forum)" }}
    >
      <h2 className="mb-8 text-2xl font-semibold lg:text-4xl">Get in Touch</h2>
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
            placeholder="Enter your name"
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
            placeholder="Enter your email"
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
            placeholder="+1 (555) 123-4567"
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
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
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
