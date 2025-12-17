export type UserRole = 'admin' | 'customer' | 'worker';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  stock: number;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  date: string;
  type: 'online' | 'custom';
}

export interface CustomMeasurement {
  neck: number;
  chest: number;
  waist: number;
  hips: number;
  shoulder: number;
  sleeveLength: number;
  shirtLength: number;
  notes: string;
}

export interface CustomOrder {
  id: string;
  userId: string;
  garmentType: string;
  fabricId?: string;
  measurements: CustomMeasurement;
  status: OrderStatus;
  deliveryDate: string;
  assignedWorkerId?: string;
}

export interface Worker {
  id: string;
  name: string;
  specialty: string;
  activeOrders: number;
}