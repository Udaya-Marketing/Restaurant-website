export const siteConfig = {
  name: "ANNAM",
  tamilName: "அன்னம்",
  legalName: "Annam Traditional Hospitality Private Limited",
  tagline: "Tamil Nadu on a Banana Leaf",
  taglineTamil: "வாழை இலை விருந்து",
  footerTagline: "Honest food. Tamil soul.",
  description:
    "An honest celebration of Tamil Nadu's kitchens, from Chettinad spice boxes and Madurai street fire to temple-town sweets, served on banana leaf with filter kaapi to finish.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://annamrestaurant.in",
  ogImage: "https://annamrestaurant.in/images/og-image.png",
  cuisine: [
    "South Indian",
    "Tamil",
    "Chettinad",
    "Kongunadu",
    "Madurai Street Food",
    "Banana Leaf Sappadu",
  ],
  priceRange: "₹₹",
  currency: "INR",
  currencySymbol: "₹",
  starRating: "4.9 ★ Rating · 25,000+ Happy Guests · Authentic Tamil Heritage",
  
  contact: {
    address: {
      streetAddress: "Plot 1248, 4th Avenue, 2nd Block, Anna Nagar",
      addressLocality: "Chennai",
      postalCode: "600040",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
      formatted: "Plot 1248, 4th Avenue, Anna Nagar, Chennai 600040, Tamil Nadu, India",
    },
    geo: {
      latitude: 13.0878,
      longitude: 80.2170,
    },
    telephone: "+91 44 2621 4455",
    mobile: "+91 98400 12345",
    email: "vanakkam@annamrestaurant.in",
    reservationsEmail: "reservations@annamrestaurant.in",
    cateringEmail: "events@annamrestaurant.in",
  },

  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      breakfast: "07:00 – 11:30 (Morning Tiffin)",
      lunch: "12:00 – 16:00 (Banana Leaf Sappadu)",
      tiffin: "16:00 – 18:30 (Evening Tiffin & Filter Kaapi)",
      dinner: "18:30 – 22:30 (Kari Dosai, Parotta & Biryani)",
    },
  ],

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "22:30",
    },
  ],

  navLinks: [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Reservations", href: "/reservations" },
    { name: "Contact", href: "/contact" },
  ],

  social: {
    instagram: "https://instagram.com/annam.chennai",
    facebook: "https://facebook.com/annamrestaurantchennai",
    youtube: "https://youtube.com/@annamchennai",
    maps: "https://maps.google.com/?q=Annam+Restaurant+Anna+Nagar+Chennai",
  },
};
