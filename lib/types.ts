export interface MenuItem {
  id: string;
  name: string;
  tamilName: string;
  description: string;
  price: string;
  category:
    | "tiffin"
    | "meals"
    | "chettinad"
    | "street-parotta"
    | "biryani"
    | "sweets-beverages";
  image: string;
  popular?: boolean;
  isVeg: boolean;
  spiceLevel?: 1 | 2 | 3;
  region?: string;
  serving?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location?: string;
  favoriteDish?: string;
  rating: number;
  quote: string;
  avatar: string;
  date: string;
}

export interface WhyChooseUsCard {
  number: string;
  title: string;
  tamilTitle?: string;
  subtitle: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface ChefTeamMember {
  name: string;
  tamilName?: string;
  role: string;
  bio: string;
  image: string;
  accolades: string[];
}

export interface FarmPartner {
  name: string;
  location: string;
  produce: string;
  tradition: string;
  distance: string;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  seatingArea?: string;
  dietaryPreference?: "veg" | "non-veg" | "jain" | "all";
  dietaryNotes?: string;
  termsAccepted: boolean;
}

export interface ReservationResponse {
  success: boolean;
  message: string;
  reservationId?: string;
  details?: {
    name: string;
    date: string;
    time: string;
    guests: string;
    area: string;
  };
}
