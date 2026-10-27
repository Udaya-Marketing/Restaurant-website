import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactForm } from "./contact-form";
import { siteConfig } from "@/lib/site";
import { MapPin, Phone, Mail, Clock, Car, Train, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Location | ANNAM Anna Nagar, Chennai",
  description:
    "Find Annam Restaurant on 4th Avenue, Anna Nagar, Chennai. Contact our reception desk for table reservations, family gatherings, catering, and valet parking.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Location · ANNAM Chennai",
    description:
      "Find Annam Restaurant in Anna Nagar, Chennai. Contact desk, directions, and hours.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF7F2] text-pine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Contact & Location" }]} />

        {/* Header */}
        <div className="mt-8 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pine/5 border border-pine/15 text-xs font-semibold uppercase tracking-[0.20em] text-pine mb-4">
            <Navigation className="w-3.5 h-3.5 text-accent" />
            <span>Anna Nagar Heritage · Chennai</span>
          </div>

          <h1 className="headline-hero font-serif font-normal text-pine">
            Connect with Our <br />
            <span className="italic text-accent">Hospitality Team</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-pine/75 leading-relaxed font-light">
            Whether inquiring about family gatherings, dietary accommodations, outdoor catering, or
            private dining halls, our team is always pleased to assist you.
          </p>
        </div>

        {/* 2-Column: Form + Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                Direct Inquiries · தொடர்பு கொள்ள
              </span>
              <h2 className="font-serif text-3xl text-pine mt-1">Send a Message</h2>
            </div>
            <ContactForm />
          </div>

          {/* Contact & Hours Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white border border-[#E5DCCD] p-8 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl text-pine">Restaurant Details</h3>

              <div className="space-y-4 text-sm text-pine/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-pine block">{siteConfig.legalName}</strong>
                    <span>{siteConfig.contact.address.formatted}</span>
                    <span className="text-xs text-pine/50 block mt-0.5">
                      Coordinates: 13.0878° N, 80.2170° E (Anna Nagar)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-pine block">Direct Reception Line</strong>
                    <a
                      href={`tel:${siteConfig.contact.telephone}`}
                      className="hover:text-accent font-medium block"
                    >
                      {siteConfig.contact.telephone}
                    </a>
                    <a
                      href={`tel:${siteConfig.contact.mobile}`}
                      className="text-xs text-accent hover:underline block mt-0.5"
                    >
                      WhatsApp / Mobile: {siteConfig.contact.mobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-pine block">Email Inquiries</strong>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-accent block"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <a
                      href={`mailto:${siteConfig.contact.reservationsEmail}`}
                      className="text-xs text-accent hover:underline block mt-0.5"
                    >
                      {siteConfig.contact.reservationsEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#E5DCCD]">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-pine block">Daily Meal Hours (All 7 Days)</strong>
                    <p className="text-xs text-pine/70 mt-1">
                      Breakfast &amp; Tiffin: 07:00 AM – 11:30 AM
                    </p>
                    <p className="text-xs text-pine/70 mt-0.5">
                      Banana Leaf Sappadu (Lunch): 12:00 PM – 04:00 PM
                    </p>
                    <p className="text-xs text-pine/70 mt-0.5">
                      Evening Tiffin &amp; Kaapi: 04:00 PM – 06:30 PM
                    </p>
                    <p className="text-xs text-pine/70 mt-0.5">
                      Dinner (Parotta, Kari Dosai &amp; Biryani): 06:30 PM – 10:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions & Valet Note */}
            <div className="rounded-3xl bg-[#122B1E] text-cream p-8 shadow-xl border border-white/10 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                Arrival Guide
              </span>
              <h4 className="font-serif text-xl text-cream">Valet Parking &amp; Transit</h4>

              <div className="space-y-3 text-xs text-cream/75 leading-relaxed font-light">
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    <strong>Complimentary Valet:</strong> Available directly outside our 4th Avenue entrance in Anna Nagar throughout all meal hours.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Train className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    <strong>Chennai Metro:</strong> 5-minute auto ride from Anna Nagar Tower Metro Station or Thirumangalam Metro Station.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Visual Card */}
        <div id="map" className="rounded-3xl bg-white border border-[#E5DCCD] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5DCCD] gap-4">
            <div>
              <h3 className="font-serif text-2xl text-pine">Anna Nagar Location Map</h3>
              <p className="text-xs sm:text-sm text-pine/60 mt-1 font-light">
                {siteConfig.contact.address.formatted}
              </p>
            </div>
            <a
              href={siteConfig.social.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-pine text-cream text-xs uppercase tracking-wider font-semibold hover:bg-pine-light transition-colors"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Visual stylized map card representation */}
          <div className="relative mt-6 w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-[#122B1E] flex items-center justify-center border border-white/10">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* Avenue Grid Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="200" x2="1200" y2="200" stroke="#C5A059" strokeWidth="4" />
              <line x1="600" y1="0" x2="600" y2="600" stroke="#C5A059" strokeWidth="4" />
              <circle cx="600" cy="200" r="80" stroke="#D46213" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            </svg>

            {/* Restaurant Pin Marker */}
            <div className="relative z-10 flex flex-col items-center animate-bounce">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-2xl border-2 border-white">
                <MapPin className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="mt-2 px-3 py-1 rounded-md bg-white text-pine text-xs font-bold shadow-lg border border-[#E5DCCD] flex items-center gap-1.5">
                <span>{siteConfig.name}</span>
                <span className="font-tamil text-accent">அன்னம்</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
