import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ReservationSection } from "@/components/sections/reservation";
import { reservationFaqs } from "@/content/team";
import { FaqAccordion } from "./faq-accordion";
import { siteConfig } from "@/lib/site";
import { RestaurantJsonLd } from "@/components/shared/json-ld";
import { Sparkles, Clock, ShieldCheck, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Table Reservations & Banana Leaf Dining | ANNAM Chennai",
  description:
    "Reserve your table for traditional Banana Leaf Sappadu, Chettinad feasts, and family dining at Annam in Anna Nagar, Chennai. Valet parking & Jain options available.",
  alternates: {
    canonical: "/reservations",
  },
  openGraph: {
    title: "Table Reservations · ANNAM Chennai",
    description:
      "Reserve your table for traditional Banana Leaf Sappadu, Chettinad feasts, and family dining at Annam in Chennai.",
    url: `${siteConfig.url}/reservations`,
  },
};

const seatingAreas = [
  {
    name: "Traditional Banana Leaf Hall",
    capacity: "2 to 12 Guests",
    description: "The signature communal dining hall with tender fresh banana leaves, unlimited accompaniments, and the authentic 'saapteengala?' hospitality.",
    highlight: "Primary Sappadu Experience",
  },
  {
    name: "Courtyard Brass Lamp Pavilion",
    capacity: "2 to 6 Guests",
    description: "Atmospheric dining framed by handcrafted brass kuthuvilakku lamps, fresh jasmine garlands, and gentle carnatic instrumental music.",
    highlight: "Warm Traditional Ambiance",
  },
  {
    name: "Family Heritage AC Dining",
    capacity: "4 to 20 Guests",
    description: "Cool, spacious banquet tables designed for large family gatherings, anniversary feasts, birthday celebrations, and elders' comfort.",
    highlight: "Large Group & Family Seating",
  },
  {
    name: "Chettinad Verandah",
    capacity: "2 to 8 Guests",
    description: "Surrounded by authentic Athangudi tile flooring, carved teakwood pillars, and heritage Chettinad brass ware.",
    highlight: "Heritage Architectural Charm",
  },
];

export default function ReservationsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF7F2] text-pine">
      {/* FAQ & Breadcrumb Schema for SEO */}
      <RestaurantJsonLd
        includeFaqs={reservationFaqs}
        breadcrumbs={[
          { name: "Home", item: siteConfig.url },
          { name: "Reservations", item: `${siteConfig.url}/reservations` },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Reservations" }]} />

        {/* Page Header */}
        <div className="mt-8 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pine/5 border border-pine/15 text-xs font-semibold uppercase tracking-[0.20em] text-pine mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>வாழை இலை முன் பதிவு · Anna Nagar, Chennai</span>
          </div>

          <h1 className="headline-hero font-serif font-normal text-pine">
            Table Reservations <br />
            <span className="italic text-accent">&amp; Dining Halls</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-pine/75 leading-relaxed font-light">
            We welcome guests daily from 7:00 AM to 10:30 PM. Banana leaf meals are served during
            lunch (12:00 PM – 4:00 PM), with evening tiffin, parottas, and biryani for dinner.
          </p>
        </div>

        {/* Seating Areas Grid */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seatingAreas.map((area) => (
            <div
              key={area.name}
              className="rounded-3xl bg-white border border-[#E5DCCD] p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-accent block mb-2">
                  {area.highlight}
                </span>
                <h2 className="font-serif text-2xl text-pine">{area.name}</h2>
                <span className="text-xs font-medium text-pine/60 block mt-1">
                  Capacity: {area.capacity}
                </span>
                <p className="mt-4 text-xs sm:text-sm text-pine/75 leading-relaxed font-light">
                  {area.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E5DCCD] text-[11px] text-[#9E7E38] font-medium">
                Selectable during booking
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Reservation Form Section Component */}
      <div className="rounded-3xl overflow-hidden my-12">
        <ReservationSection />
      </div>

      {/* Reservation Policies Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
            Hospitality Guidelines · உபசரிப்பு வழிகாட்டுதல்
          </span>
          <h2 className="headline-section font-serif text-pine">
            Essential Dining Information
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          <div className="p-6 rounded-2xl bg-white border border-[#E5DCCD] space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
              <Clock className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="font-serif text-xl text-pine">Meal Timings</h3>
            <p className="text-xs sm:text-sm text-pine/75 leading-relaxed font-light">
              Banana Leaf Sappadu is served from 12:00 PM to 4:00 PM daily. Morning tiffin begins at
              7:00 AM, and dinner service runs from 6:30 PM to 10:30 PM.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DCCD] space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="font-serif text-xl text-pine">Pure Veg &amp; Jain Friendly</h3>
            <p className="text-xs sm:text-sm text-pine/75 leading-relaxed font-light">
              We maintain separate pure vegetarian kitchen prep areas. Jain dishes (no onion/garlic)
              are freshly prepared on request.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DCCD] space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
              <Car className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="font-serif text-xl text-pine">Complimentary Valet</h3>
            <p className="text-xs sm:text-sm text-pine/75 leading-relaxed font-light">
              Drive straight to our 4th Avenue portico in Anna Nagar. Our courteous valet team
              provides secure, hassle-free parking.
            </p>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="pt-8 border-t border-[#E5DCCD]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="headline-section font-serif text-pine">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-pine/70 font-light">
              Everything you need to know about planning your family visit to Annam.
            </p>
          </div>

          <FaqAccordion items={reservationFaqs} />
        </div>
      </div>
    </div>
  );
}
