"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl border border-[#E8DECE] bg-white overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggle(idx)}
              type="button"
              className="w-full px-6 py-5 flex items-center justify-between text-left text-pine font-serif text-lg sm:text-xl font-normal hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-pine/40 transition-transform duration-300 shrink-0 ml-4 ${
                  isOpen ? "rotate-180 text-accent" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-pine/75 leading-relaxed font-light border-t border-[#E8DECE]/60 pt-4 animate-in fade-in duration-200">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
