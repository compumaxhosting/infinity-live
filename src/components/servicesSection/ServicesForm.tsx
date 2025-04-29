"use client"

import React, { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner"; // You can replace this with any loader of your choice.

const ServicesForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  // Use effect hook to ensure this logic runs only on the client side
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set to true after mount to prevent SSR mismatch
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
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

  if (!mounted) {
    // Render nothing or a placeholder while server-side rendering
    return null;
  }

  return (
    <div
      className="p-6 lg:p-12 lg:py-6 text-black dark:text-white"
      style={{ fontFamily: "var(--font-forum)" }}
    >
      <h2 className="mb-8 text-2xl font-semibold lg:text-4xl">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        </div>

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
        </div>

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

        <div>
          <button
            type="submit"
            className="py-3 px-4 bg-secondary transition-all duration-200 hover:bg-stone-900 text-white rounded-lg"
            disabled={loading}
          >
            {loading ? (
              <Oval color="white" strokeWidth={5} height={24} width={92} secondaryColor="wheat" />
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
