export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  isFavorite: boolean;
  dietary: string[];
  preparationTime: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  itemCount: number;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: number;
  validUntil: string;
  image: string;
  isActive: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  preferences: {
    dietary: string[];
    favoriteCategories: string[];
  };
  orderHistory: Order[];
}

export interface Order {
  id: string;
  items: MenuItem[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  orderDate: string;
  estimatedTime: number;
}

// Menu Categories
export const categories: Category[] = [
  { id: 'wines', name: 'Wines', icon: '🍷', description: 'Premium wines from around the world', itemCount: 24 },
  { id: 'cocktails', name: 'Cocktails', icon: '🍸', description: 'Craft cocktails and mixed drinks', itemCount: 18 },
  { id: 'beers', name: 'Beers', icon: '🍺', description: 'Local and imported beers', itemCount: 12 },
  { id: 'appetizers', name: 'Appetizers', icon: '🥨', description: 'Light bites and starters', itemCount: 15 },
  { id: 'main-courses', name: 'Main Courses', icon: '🍽️', description: 'Hearty main dishes', itemCount: 22 },
  { id: 'desserts', name: 'Desserts', icon: '🍰', description: 'Sweet treats and pastries', itemCount: 8 },
  { id: 'snacks', name: 'Snacks', icon: '🥨', description: 'Quick bites and snacks', itemCount: 10 },
];

// Menu Items
export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Burger',
    description: 'Juicy beef patty, cheddar, lettuce, tomato, and our special sauce',
    price: 12.99,
    category: 'main-courses',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    reviews: 120,
    isFavorite: false,
    dietary: [],
    preparationTime: 15,
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, tomato sauce, and basil on crispy crust',
    price: 16.99,
    category: 'main-courses',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=400&q=80',
    rating: 4.6,
    reviews: 89,
    isFavorite: true,
    dietary: ['vegetarian'],
    preparationTime: 20,
  },
  {
    id: '3',
    name: 'Cabernet Sauvignon',
    description: 'Full-bodied red wine with notes of black cherry and oak',
    price: 45.00,
    category: 'wines',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    reviews: 67,
    isFavorite: true,
    dietary: ['vegan'],
    preparationTime: 0,
  },
  {
    id: '4',
    name: 'Mojito',
    description: 'Refreshing cocktail with rum, mint, lime, and soda',
    price: 11.99,
    category: 'cocktails',
    image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&w=400&q=80',
    rating: 4.7,
    reviews: 45,
    isFavorite: false,
    dietary: ['vegan'],
    preparationTime: 8,
  },
  {
    id: '5',
    name: 'Truffle Fries',
    description: 'Crispy fries tossed with truffle oil and parmesan',
    price: 8.99,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80',
    rating: 4.5,
    reviews: 78,
    isFavorite: false,
    dietary: ['vegetarian'],
    preparationTime: 12,
  },
  {
    id: '6',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
    price: 9.99,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    reviews: 56,
    isFavorite: true,
    dietary: ['vegetarian'],
    preparationTime: 10,
  },
];

// Offers
export const offers: Offer[] = [
  {
    id: '1',
    title: 'Free Delivery',
    description: 'Enjoy exclusive discounts on tasty food today!',
    discount: 0,
    validUntil: '2024-12-31',
    image: '🍔',
    isActive: true,
  },
  {
    id: '2',
    title: 'Wine Tasting Event',
    description: 'Join us for an exclusive wine tasting experience',
    discount: 20,
    validUntil: '2024-11-30',
    image: '🍷',
    isActive: true,
  },
  {
    id: '3',
    title: 'Happy Hour',
    description: '50% off all cocktails from 4-7 PM',
    discount: 50,
    validUntil: '2024-12-31',
    image: '🍸',
    isActive: true,
  },
];

// User Profile (mock data)
export const userProfile: UserProfile = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  preferences: {
    dietary: ['vegetarian'],
    favoriteCategories: ['wines', 'cocktails'],
  },
  orderHistory: [],
};

// Helper functions
export const getMenuItemsByCategory = (categoryId: string): MenuItem[] => {
  return menuItems.filter(item => item.category === categoryId);
};

export const getFavoriteItems = (): MenuItem[] => {
  return menuItems.filter(item => item.isFavorite);
};

export const getActiveOffers = (): Offer[] => {
  return offers.filter(offer => offer.isActive);
};

export const getFastestItems = (): MenuItem[] => {
  return menuItems
    .filter(item => item.preparationTime <= 15)
    .sort((a, b) => a.preparationTime - b.preparationTime)
    .slice(0, 5);
}; 