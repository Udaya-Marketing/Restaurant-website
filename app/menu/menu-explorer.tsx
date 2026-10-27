"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MenuItem } from "@/lib/types";

interface MenuExplorerProps {
  items: MenuItem[];
}

const categories = [
  { id: "all", label: "All Offerings", tamilLabel: "அனைத்தும்" },
  { id: "tiffin", label: "Tiffin & Breakfast", tamilLabel: "டிபன் & காலை உணவு" },
  { id: "meals", label: "Banana Leaf Sappadu", tamilLabel: "வாழை இலை சாப்பாடு" },
  { id: "chettinad", label: "Chettinad Specials", tamilLabel: "செட்டிநாடு சிறப்பு" },
  { id: "street-parotta", label: "Street & Parotta", tamilLabel: "பரோட்டா கார்னர்" },
  { id: "biryani", label: "Seeraga Samba Biryani", tamilLabel: "சீரக சம்பா பிரியாணி" },
  { id: "sweets-beverages", label: "Sweets & Filter Kaapi", tamilLabel: "இனிப்பு & காபி" },
];

export function MenuExplorer({ items }: MenuExplorerProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [dietaryFilter, setDietaryFilter] = useState<"all" | "veg" | "non-veg">("all");

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesDietary =
      dietaryFilter === "all" ||
      (dietaryFilter === "veg" && item.isVeg) ||
      (dietaryFilter === "non-veg" && !item.isVeg);
    return matchesCategory && matchesDietary;
  });

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer flex flex-col items-center ${
              activeCategory === cat.id
                ? "bg-pine text-cream shadow-md shadow-pine/25"
                : "bg-white/85 text-pine/70 hover:text-pine hover:bg-white border border-[#E5DCCD]"
            }`}
          >
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Veg / Non-Veg Secondary Filter Pill Toggle */}
      <div className="flex items-center justify-center gap-2">
        <span className="text-xs uppercase tracking-wider font-semibold text-pine/60 mr-1">
          Dietary:
        </span>
        <button
          onClick={() => setDietaryFilter("all")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            dietaryFilter === "all"
              ? "bg-[#18110B] text-white shadow-sm"
              : "bg-white text-pine/70 border border-[#E5DCCD] hover:bg-black/5"
          }`}
        >
          All Options ({items.length})
        </button>
        <button
          onClick={() => setDietaryFilter("veg")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            dietaryFilter === "veg"
              ? "bg-emerald-700 text-white shadow-sm"
              : "bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-50"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Pure Veg ({items.filter((i) => i.isVeg).length})
        </button>
        <button
          onClick={() => setDietaryFilter("non-veg")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            dietaryFilter === "non-veg"
              ? "bg-red-800 text-white shadow-sm"
              : "bg-white text-red-800 border border-red-300 hover:bg-red-50"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-red-600" />
          Non-Veg ({items.filter((i) => !i.isVeg).length})
        </button>
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {filteredItems.map((dish) => (
          <div
            key={dish.id}
            id={dish.id}
            className="group flex flex-col rounded-3xl bg-white border border-[#E5DCCD] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Dish Image */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#122B1E] flex items-center justify-center p-6 mb-5">
              <Image
                src={dish.image}
                alt={`${dish.name} - ${dish.tamilName}`}
                width={360}
                height={360}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />

              {/* Standard Indian Veg/Non-Veg Symbol */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                <span
                  className={`w-5 h-5 rounded-md border flex items-center justify-center bg-white/95 shadow-sm ${
                    dish.isVeg ? "border-emerald-600" : "border-red-600"
                  }`}
                  title={dish.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      dish.isVeg ? "bg-emerald-600" : "bg-red-600"
                    }`}
                  />
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md text-[#C5A059] border border-white/10">
                  {dish.isVeg ? "Pure Veg" : "Non-Veg"}
                </span>
              </div>

              {/* Spice Indicator */}
              {dish.spiceLevel && dish.spiceLevel > 1 && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md text-amber-300 border border-white/10">
                  {"🌶️".repeat(dish.spiceLevel)}
                </div>
              )}
            </div>

            {/* Dish Content */}
            <div className="flex flex-col flex-grow">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-2xl text-pine group-hover:text-accent transition-colors">
                  {dish.name}
                </h3>
                <span className="font-sans text-lg font-bold text-accent shrink-0">
                  {dish.price}
                </span>
              </div>

              {dish.tamilName && (
                <p className="font-tamil text-xs text-[#9E7E38] mt-1 font-medium">
                  {dish.tamilName}
                </p>
              )}

              <p className="mt-3 text-xs sm:text-sm text-pine/75 leading-relaxed flex-grow">
                {dish.description}
              </p>

              {/* Origin / Serving Details */}
              <div className="mt-4 pt-3 border-t border-[#E5DCCD] flex items-center justify-between text-xs text-pine/60">
                <span className="truncate">{dish.region}</span>
                {dish.serving && (
                  <span className="font-medium text-pine/80 truncate">
                    {dish.serving}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="py-16 text-center text-pine/60 space-y-2">
          <p className="font-serif text-2xl text-pine">No dishes found in this category.</p>
          <p className="text-sm">Please try selecting &apos;All Options&apos; to view our full menu.</p>
        </div>
      )}
    </div>
  );
}
