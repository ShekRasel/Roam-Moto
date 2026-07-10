export interface Motorcycle {
  id: string;
  slug: string;
  model: string;
  type: "Sport" | "Touring" | "Cruiser" | "Adventure" | "Electric";
  image: string;
  images: string[];
  price: number;
  engine: string;
  horsepower: number;
  torque: number;
  weight: number;
  topSpeed: number;
  acceleration: string;
  fuelCapacity: string;
  colors: string[];
  description: string;
  features: string[];
  specifications: {
    engine: string;
    power: string;
    torque: string;
    weight: string;
    fuelCapacity: string;
    topSpeed: string;
    acceleration: string;
  };
  relatedModels: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface BookingFormData {
  model: string;
  color: string;
  package: string;
  date: Date;
  location: string;
  name: string;
  email: string;
  phone: string;
  licenseNumber: string;
  specialRequests?: string;
  termsAccepted: boolean;
}
