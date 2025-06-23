export interface Room {
  id: string;
  name: string;
  image: string;
  price: number;
  capacity: number;
  amenities: string[];
  description: string;
}

export interface Car {
  id: string;
  name: string;
  image: string;
  pricePerDay: number;
  pricePerKm: number;
  seating: number;
  features: string[];
  available: boolean;
}

export interface Package {
  id: string;
  name: string;
  image: string;
  duration: string;
  price: number;
  inclusions: string[];
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  message: string;
}