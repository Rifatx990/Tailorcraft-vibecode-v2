import { Product, Order, User, Worker, CustomOrder } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Italian Wool Suit',
    category: 'Suits',
    price: 299.99,
    description: 'Hand-stitched premium wool suit tailored for perfection.',
    image: 'https://picsum.photos/400/500?random=1',
    stock: 15,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Classic White Cotton Shirt',
    category: 'Shirts',
    price: 49.99,
    description: 'Breathable, high-quality cotton shirt suitable for formal events.',
    image: 'https://picsum.photos/400/500?random=2',
    stock: 50,
    rating: 4.5
  },
  {
    id: '3',
    name: 'Silk Tie - Midnight Blue',
    category: 'Accessories',
    price: 24.99,
    description: '100% silk tie to complement your formal attire.',
    image: 'https://picsum.photos/400/500?random=3',
    stock: 30,
    rating: 4.7
  },
  {
    id: '4',
    name: 'Casual Linen Trousers',
    category: 'Pants',
    price: 59.99,
    description: 'Comfortable linen trousers perfect for summer.',
    image: 'https://picsum.photos/400/500?random=4',
    stock: 20,
    rating: 4.3
  },
  {
    id: '5',
    name: 'Bespoke Blazer',
    category: 'Blazers',
    price: 199.99,
    description: 'Custom fitted blazer with gold buttons.',
    image: 'https://picsum.photos/400/500?random=5',
    stock: 8,
    rating: 4.9
  },
  {
    id: '6',
    name: 'Leather Belt',
    category: 'Accessories',
    price: 35.00,
    description: 'Genuine leather belt with classic buckle.',
    image: 'https://picsum.photos/400/500?random=6',
    stock: 45,
    rating: 4.6
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    userId: 'u1',
    items: [
      { ...MOCK_PRODUCTS[0], quantity: 1, selectedSize: 'L' }
    ],
    total: 299.99,
    status: 'completed',
    date: '2023-10-15',
    type: 'online'
  },
  {
    id: 'ORD-002',
    userId: 'u1',
    items: [
      { ...MOCK_PRODUCTS[1], quantity: 2, selectedSize: 'M' }
    ],
    total: 99.98,
    status: 'processing',
    date: '2023-10-20',
    type: 'online'
  }
];

export const MOCK_CUSTOM_ORDERS: CustomOrder[] = [
  {
    id: 'CUST-001',
    userId: 'u1',
    garmentType: 'Suit 3-Piece',
    measurements: {
      neck: 16,
      chest: 40,
      waist: 34,
      hips: 42,
      shoulder: 18,
      sleeveLength: 25,
      shirtLength: 30,
      notes: 'Slim fit preferences.'
    },
    status: 'processing',
    deliveryDate: '2023-11-01',
    assignedWorkerId: 'w1'
  }
];

export const MOCK_WORKERS: Worker[] = [
  { id: 'w1', name: 'Rahim Uddin', specialty: 'Suits', activeOrders: 3 },
  { id: 'w2', name: 'Karim Hasan', specialty: 'Shirts', activeOrders: 5 },
];

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'John Doe', email: 'customer@mehedi.com', role: 'customer' },
  { id: 'a1', name: 'Mehedi Owner', email: 'admin@mehedi.com', role: 'admin' },
  { id: 'w1', name: 'Rahim Uddin', email: 'worker@mehedi.com', role: 'worker' }
];