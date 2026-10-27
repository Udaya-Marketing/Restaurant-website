import { Hero } from "@/components/sections/hero";
import { PopularMenu } from "@/components/sections/popular-menu";
import { About } from "@/components/sections/about";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ReservationSection } from "@/components/sections/reservation";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      {/* 2. Hero */}
      <Hero />

      {/* 3. Popular Menu */}
      <PopularMenu />

      {/* 4. About Us */}
      <About />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Reservation */}
      <ReservationSection />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Contact */}
      <ContactSection />

      {/* 9. Final CTA banner */}
      <FinalCta />
    </>
  );
}
