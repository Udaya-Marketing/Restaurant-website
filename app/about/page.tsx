import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { teamMembers, farmPartners } from "@/content/team";
import { siteConfig } from "@/lib/site";
import { Award, Leaf, Sparkles, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Story & Heritage | ANNAM Chennai",
  description:
    "Learn the story of Annam in Chennai: family recipes from Chettinad, Madurai, and Thanjavur, stone-ground batters, hand-pounded spices, and authentic Tamil hospitality.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Our Story & Culinary Masters · ANNAM Chennai",
    description:
      "Learn the story of Annam: Chettinad spices, Thanjavur rice, stone-ground batters, and banana leaf dining.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF7F2] text-pine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Our Story & Heritage" }]} />

        {/* Hero Header */}
        <div className="mt-8 mb-16 sm:mb-24 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pine/5 border border-pine/15 text-xs font-semibold uppercase tracking-[0.20em] text-pine mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>பாரம்பரியமும் கதையும் · Family Recipes Since 1978</span>
          </div>

          <h1 className="headline-hero font-serif font-normal text-pine">
            Born from Tamil Soul, <br />
            <span className="italic text-accent">Served on a Banana Leaf</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-pine/75 leading-relaxed font-light max-w-2xl mx-auto">
            In our culture, &lsquo;Annam&rsquo; is revered as sacred sustenance. We created this table
            as a living sanctuary for authentic home kitchens, ancestral spice blends, and the
            unconditional hospitality of Tamil Nadu.
          </p>
        </div>

        {/* Narrative Section 1: Our Story (The Roots & The Banana Leaf) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold block">
              The Journey of Annam · வரலாறு
            </span>
            <h2 className="headline-section font-serif text-pine">
              No Artificial Shortcuts. <br />
              <span className="italic text-[#9E7E38]">Only Slow, Sacred Craft.</span>
            </h2>
            <p className="text-base text-pine/80 leading-relaxed font-light">
              Annam was born from a desire to safeguard what modern convenience was quietly eroding:
              the fragrant morning thrum of the wet stone grinder (aattukal), the sharp snap of
              mustard seeds in cold-pressed gingelly oil, and the patient braising of country chicken
              in heavy seasoned earthenware.
            </p>
            <p className="text-base text-pine/80 leading-relaxed font-light">
              Our recipes originate from our elders in Karaikudi, Madurai, and Thiruvaiyaru. We do
              not buy pre-packaged masala powders or commercial curry pastes. Every batch of podi,
              sambar masala, and pepper chukka spice is hand-roasted in small batches and stone-ground
              right here in our Chennai kitchen.
            </p>
            <p className="text-base text-pine/80 leading-relaxed font-light">
              Dining on a fresh tender banana leaf is not merely tradition—it is an art of conscious
              nourishment. The warmth of hot rice releases natural polyphenols from the leaf,
              deepening flavor and digestion, while eating with fingers connects all five senses to
              the meal.
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden bg-[#122B1E] shadow-2xl p-8 flex items-center justify-center">
            <Image
              src="/images/dark-ambiance.svg"
              alt="Traditional Annam courtyard with brass kuthuvilakku lamps and kolam"
              fill
              className="object-cover"
            />
            <div className="relative z-10 text-center space-y-2 p-6 rounded-2xl bg-[#122B1E]/90 backdrop-blur-md border border-white/10 max-w-sm">
              <span className="font-serif text-3xl text-cream block">100%</span>
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold block">
                Cold-Pressed Oils &amp; A2 Ghee
              </span>
              <p className="text-xs text-cream/70">
                Ground fresh daily with zero artificial colors, MSG, or chemical preservatives.
              </p>
            </div>
          </div>
        </div>

        {/* Master Cooks Team Section */}
        <div className="mb-24 pt-8 border-t border-[#E5DCCD]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
              Masters of the Kitchen · சமையல் கலைஞர்கள்
            </span>
            <h2 className="headline-section font-serif text-pine">
              Hands That Preserve Our Heritage
            </h2>
            <p className="mt-2 text-sm sm:text-base text-pine/70 font-light">
              Generational cooks who have spent lifetimes mastering the wood fire, iron tawa, and stone mortars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl bg-white border border-[#E5DCCD] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#122B1E] mb-6 flex items-center justify-center p-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain p-6"
                    />
                  </div>

                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl text-pine">{member.name}</h3>
                    {member.tamilName && (
                      <span className="font-tamil text-xs text-[#9E7E38] font-medium">
                        {member.tamilName}
                      </span>
                    )}
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-accent block mt-1">
                    {member.role}
                  </span>
                  <p className="mt-4 text-sm text-pine/75 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5DCCD] space-y-1.5">
                  {member.accolades.map((acc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#9E7E38]">
                      <Award className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{acc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Soil & Farm Partners */}
        <div className="mb-24 rounded-3xl bg-[#122B1E] text-cream p-8 sm:p-14 border border-white/10 shadow-2xl">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-widest font-semibold mb-3">
              <Leaf className="w-4 h-4" />
              <span>Traceable Tamil Nadu Farm Sourcing · தூய விளைபொருட்கள்</span>
            </div>
            <h2 className="headline-section font-serif text-cream">
              Our Soil &amp; Farming Collectives
            </h2>
            <p className="mt-3 text-sm sm:text-base text-cream/75 font-light">
              We partner directly with small-scale indigenous agricultural families across Tamil Nadu
              who share our reverence for the land, pesticide-free cultivation, and traditional seed preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {farmPartners.map((partner) => (
              <div
                key={partner.name}
                className="p-6 rounded-2xl bg-[#183626] border border-white/10 space-y-3"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl text-cream">{partner.name}</h3>
                  <span className="text-xs text-[#C5A059] font-medium">{partner.location}</span>
                </div>
                <p className="text-xs text-accent uppercase tracking-wider font-semibold">
                  {partner.produce}
                </p>
                <p className="text-sm text-cream/80 leading-relaxed font-light">
                  {partner.tradition}
                </p>
                <div className="pt-2 text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{partner.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bottom Banner */}
        <div className="text-center max-w-xl mx-auto space-y-5">
          <h2 className="headline-section font-serif text-pine">
            Taste the Story for Yourself
          </h2>
          <p className="text-sm sm:text-base text-pine/70 font-light">
            We invite your family to experience the warmth of our banana leaf feast in Anna Nagar.
          </p>
          <div className="pt-2">
            <Button href="/reservations" variant="accent" size="lg" withArrow>
              Reserve A Table
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
