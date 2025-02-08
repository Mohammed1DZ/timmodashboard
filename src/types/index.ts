export interface User {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'inside_agent' | 'field_agent';
  avatar?: string;
}

export interface Property {
  id: string;
  title: string;
  type: string;
  location: string;
  price: number;
  status: 'available' | 'sold' | 'pending';
  images: string[];
  agent?: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  properties: string[];
  performance: {
    closed: number;
    active: number;
    revenue: number;
  };
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'buyer' | 'seller' | 'renter' | 'landlord';
  source: 'facebook' | 'agent' | 'collaborators' | 'business_card' | 'phone_calls';
  assignedAgent?: string;
  propertyInterest?: string[];
}