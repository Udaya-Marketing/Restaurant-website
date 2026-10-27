import { ChefTeamMember, FarmPartner } from "@/lib/types";

export const teamMembers: ChefTeamMember[] = [
  {
    name: "Chef Muthuvel V.",
    tamilName: "முத்துவேல் வ.",
    role: "Head Chef & Master of the Chettinad Kitchen",
    bio: "Hailing from a celebrated family of cooks in Karaikudi, Muthuvel has spent 28 years perfecting slow-roast pepper chukkas, country chicken gravies, and the ancient art of stone-ground spice mastery.",
    image: "/images/chef-muthuvel.svg",
    accolades: [
      "Heritage Culinary Icon Tamil Nadu 2024",
      "Master of the Chettinad Spice Box",
      "Guardian of Ancestral Clay Pot Cookery",
    ],
  },
  {
    name: "Meenakshi Ammal",
    tamilName: "மீனாட்சி அம்மாள்",
    role: "Master of Traditional Tiffin & Temple Sweets",
    bio: "Trained across temple kitchens in Thanjavur and Madurai, Meenakshi oversees every batch of naturally fermented idli batter, golden ghee kesari, and our legendary elaneer payasam.",
    image: "/images/chef-meenakshi.svg",
    accolades: [
      "40+ Years Traditional Tiffin Mastery",
      "Author of 'Amma Samayal Rahasiyam'",
      "Specialist in Indigenous Rice Fermentation",
    ],
  },
  {
    name: "Kannan Somasundaram",
    tamilName: "கண்ணன் சோமசுந்தரம்",
    role: "Master of Seeraga Samba Biryani & Parotta",
    bio: "Born into the street food lore of Madurai and Dindigul, Kannan commands the fiery wood embers for our Ambur and Thalappakatti-style dum biryanis and hand-spins layered flaky parottas.",
    image: "/images/chef-kannan.svg",
    accolades: [
      "Madurai Street Food Legend 2022",
      "Wood-Embers Dum Cooking Virtuoso",
      "Master of the Iron Tawa & Kothu",
    ],
  },
];

export const farmPartners: FarmPartner[] = [
  {
    name: "Pollachi Coconut Orchards",
    location: "Pollachi, Coimbatore District",
    produce: "Sweet tender coconuts, thick coconut cream & cold-pressed copra oil",
    tradition: "Three-generation organic groves nestled near the Anamalai foothills",
    distance: "Direct farm sourcing to Chennai kitchen",
  },
  {
    name: "Chettinad Spice Growers Guild",
    location: "Karaikudi & Sivaganga",
    produce: "Sun-dried Tellicherry black pepper, marathi mokku, kalpasi & star anise",
    tradition: "Authentic indigenous wild spices hand-harvested by village co-operatives",
    distance: "Directly transported every fortnight",
  },
  {
    name: "Thanjavur Cauvery Delta Farmers",
    location: "Thanjavur & Kumbakonam",
    produce: "Aged deluxe Ponni boiled rice, fragrant Seeraga Samba & traditional millets",
    tradition: "Cauvery river-fed fertile alluvium rice paddy cultivated sustainably",
    distance: "Traceable farm-to-banana-leaf harvest",
  },
  {
    name: "Erode Turmeric & Cow Ghee Collective",
    location: "Erode & Kangeyam",
    produce: "Golden GI-tagged Salem turmeric and traditional bilona A2 cow ghee",
    tradition: "Grass-fed indigenous Kangeyam cattle providing fragrant golden churned butter",
    distance: "Fresh weekly dairy deliveries",
  },
];

export const reservationFaqs = [
  {
    question: "What are the timings for the Banana Leaf Meals (Sappadu)?",
    answer:
      "Our traditional Banana Leaf Sappadu (both Full Vegetarian and Chettinad Non-Vegetarian) is served during lunch hours daily from 12:00 PM to 4:00 PM. Hot rice, freshly ground sambar, pepper rasam, kootu, poriyal, appalam, and payasam are served with unlimited hospitality. In the evenings, our menu transitions to Tiffin, Parottas, Kari Dosai, and Seeraga Samba Biryanis.",
  },
  {
    question: "Do you offer pure vegetarian and Jain dietary options?",
    answer:
      "Yes, absolutely. We maintain a strictly dedicated vegetarian kitchen section and separate cookware. For Jain patrons, our cooks prepare special dishes without onion, garlic, or root vegetables upon request—simply indicate 'Jain' in the dietary preference dropdown when reserving your table.",
  },
  {
    question: "Can I book a table for large family gatherings or groups?",
    answer:
      "Yes! Our reservation system easily accommodates groups up to 20 guests online. For larger family gatherings, birthday celebrations, or private hall buyouts, our Family Heritage AC Hall and Courtyard can accommodate up to 45 guests. Please mention your group requirements or contact our reservation desk at +91 44 2621 4455.",
  },
  {
    question: "Do I need a reservation for morning tiffin and filter kaapi?",
    answer:
      "For morning tiffin (7:00 AM – 11:30 AM), walk-ins are warmly welcomed on a first-come, first-served basis. However, for weekend lunch (Banana Leaf Sappadu) and weekend dinners, advance table reservations are strongly recommended to avoid waiting times.",
  },
  {
    question: "Is car parking available at your Anna Nagar location?",
    answer:
      "Yes, we provide complimentary valet parking for all our guests right at our 4th Avenue entrance in Anna Nagar, Chennai. Our valet attendants ensure safe and secure parking while you enjoy your meal in peace.",
  },
  {
    question: "Can I request milder spice levels for children or elders?",
    answer:
      "Certainly. While our Chettinad and Madurai preparations honor bold, authentic spice profiles, our kitchen will gladly customize dishes like chicken curry, dosas, and gravies with milder pepper and chilli for young children or elders upon request.",
  },
];
