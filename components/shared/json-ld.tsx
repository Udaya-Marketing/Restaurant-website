import { siteConfig } from "@/lib/site";

interface RestaurantJsonLdProps {
  includeFaqs?: { question: string; answer: string }[];
  breadcrumbs?: { name: string; item: string }[];
}

export function RestaurantJsonLd({
  includeFaqs,
  breadcrumbs,
}: RestaurantJsonLdProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.url}/#restaurant`,
    name: siteConfig.name,
    alternateName: siteConfig.tamilName,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/hero-dish.svg`,
    telephone: siteConfig.contact.telephone,
    email: siteConfig.contact.email,
    priceRange: siteConfig.priceRange,
    servesCuisine: siteConfig.cuisine,
    hasMenu: `${siteConfig.url}/menu`,
    acceptsReservations: "True",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      postalCode: siteConfig.contact.address.postalCode,
      addressRegion: siteConfig.contact.address.addressRegion,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    openingHoursSpecification: siteConfig.openingHoursSpecification,
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/reservations`,
        inLanguage: "en-IN",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "FoodEstablishmentReservation",
        name: `Table Reservation at ${siteConfig.name}`,
      },
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.youtube,
      siteConfig.social.maps,
    ],
  };

  const faqSchema =
    includeFaqs && includeFaqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: includeFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: crumb.name,
            item: crumb.item,
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
}

export function BreadcrumbsJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

