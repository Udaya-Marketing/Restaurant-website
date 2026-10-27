import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { siteConfig } from "@/lib/site";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy & Data Protection Policy | ANNAM Chennai",
  description:
    "Our commitments to guest privacy, reservation data protection, and Indian DPDP Act compliance at Annam Restaurant in Chennai, Tamil Nadu.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy · ANNAM Chennai",
    description:
      "Our commitments to guest privacy and reservation data security at Annam in Chennai.",
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF7F2] text-pine">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        {/* Page Header */}
        <div className="mt-8 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pine/5 border border-pine/15 text-xs font-semibold uppercase tracking-[0.20em] text-pine mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>Digital Personal Data Protection (DPDP) Compliant</span>
          </div>

          <h1 className="headline-hero font-serif font-normal text-pine">
            Privacy &amp; Data Ethics
          </h1>

          <p className="mt-4 text-base sm:text-lg text-pine/70 font-light max-w-xl mx-auto leading-relaxed">
            At Annam, the deep respect we hold for our guests extends from our banana leaf service to our digital data security.
          </p>

          <span className="text-xs text-pine/50 block mt-3">
            Effective Date: 2026 · Annam Traditional Hospitality Pvt. Ltd.
          </span>
        </div>

        {/* Policy Content Card */}
        <div className="rounded-3xl bg-white border border-[#E5DCCD] p-8 sm:p-12 shadow-sm space-y-10 text-pine/85 leading-relaxed font-light text-sm sm:text-base">
          {/* Section 1 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-pine font-serif text-2xl font-normal">
              <FileText className="w-5 h-5 text-accent" />
              <h2>1. Data Controller Information</h2>
            </div>
            <p>
              The responsible entity for personal data processed through this website and table reservation services is:
            </p>
            <div className="p-4 rounded-2xl bg-cream-surface border border-[#E5DCCD] text-xs font-mono space-y-1">
              <p className="font-bold text-pine">{siteConfig.legalName}</p>
              <p>{siteConfig.contact.address.formatted}</p>
              <p>Email: {siteConfig.contact.email}</p>
              <p>Telephone: {siteConfig.contact.telephone}</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-pine font-serif text-2xl font-normal">
              <Lock className="w-5 h-5 text-accent" />
              <h2>2. Information We Collect</h2>
            </div>
            <p>
              To process dining table bookings, organize banana leaf seating, and respect dietary preferences (such as pure vegetarian, Jain, or specific allergies), we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Guest Name and contact information (mobile telephone number and email address)</li>
              <li>Booking details: date, meal timing, party size, and requested dining hall</li>
              <li>Special dietary notes (e.g. Jain food without onion/garlic, high chairs for toddlers, mild spice for elders)</li>
              <li>Technical metadata: standard server access logs and browser session analytics</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-pine font-serif text-2xl font-normal">
              <Eye className="w-5 h-5 text-accent" />
              <h2>3. Purpose &amp; Non-Disclosure</h2>
            </div>
            <p>
              We collect this information strictly to manage your dining reservations, send SMS / WhatsApp booking confirmations, and accommodate special food preferences. We do not sell, rent, or trade your personal information to third-party marketing brokers under any circumstances.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-pine font-serif text-2xl font-normal">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <h2>4. Security &amp; Data Rights</h2>
            </div>
            <p>
              Under the Digital Personal Data Protection Act, 2023 (DPDP Act) of India, you retain the right to review, update, or request the erasure of your reservation contact records at any time. For questions regarding your personal information, please write to our data officer at <a href={`mailto:${siteConfig.contact.email}`} className="text-accent underline">{siteConfig.contact.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
