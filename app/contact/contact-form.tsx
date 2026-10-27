"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-3xl bg-white border border-[#E5DCCD] text-center space-y-4 shadow-sm animate-in fade-in">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-2xl text-pine">Vanakkam! Message Received</h3>
        <p className="text-sm text-pine/70 max-w-md mx-auto font-light leading-relaxed">
          Thank you for reaching out to Annam. Our guest hospitality desk in Anna Nagar will get back
          to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          type="button"
          className="text-xs uppercase tracking-wider font-semibold text-accent hover:text-accent-hover pt-2 cursor-pointer"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5DCCD] shadow-sm space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-pine/80 mb-2">
            Your Name *
          </label>
          <input
            id="name"
            required
            type="text"
            placeholder="e.g. Karthik Sundaram"
            className="w-full px-4 py-3 rounded-xl bg-cream-surface border border-[#E5DCCD] text-pine placeholder-pine/40 text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-pine/80 mb-2">
            Email Address *
          </label>
          <input
            id="email"
            required
            type="email"
            placeholder="karthik@example.com"
            className="w-full px-4 py-3 rounded-xl bg-cream-surface border border-[#E5DCCD] text-pine placeholder-pine/40 text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-pine/80 mb-2">
            Telephone / Mobile Number (+91)
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98400 12345"
            className="w-full px-4 py-3 rounded-xl bg-cream-surface border border-[#E5DCCD] text-pine placeholder-pine/40 text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="inquiryType" className="block text-xs uppercase tracking-wider font-semibold text-pine/80 mb-2">
            Nature of Inquiry
          </label>
          <select
            id="inquiryType"
            className="w-full px-4 py-3 rounded-xl bg-cream-surface border border-[#E5DCCD] text-pine text-sm focus:outline-none focus:border-accent transition-colors"
          >
            <option>Table Reservation Inquiry</option>
            <option>Banana Leaf Sappadu Family Party</option>
            <option>Private Heritage Hall Booking (20–45 Guests)</option>
            <option>Outdoor Catering &amp; Wedding Sappadu</option>
            <option>Dietary &amp; Jain Food Preparation</option>
            <option>Feedback &amp; Compliments</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-pine/80 mb-2">
          Your Message *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder="Please share your questions, desired party size, or dates..."
          className="w-full px-4 py-3 rounded-xl bg-cream-surface border border-[#E5DCCD] text-pine placeholder-pine/40 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold tracking-wide transition-all shadow-md shadow-accent/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {loading ? (
          <span>Sending Message...</span>
        ) : (
          <>
            <span>Send Message to Reception</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
