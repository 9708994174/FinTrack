import {
  ShoppingCart,
  Car,
  Film,
  Lightbulb,
  Home,
  DollarSign,
  Utensils,
  ShoppingBag,
  Package,
  LucideIcon,
} from 'lucide-react';
import { Category, CategoryInfo } from '@/types';

export const categoryIcons: Record<Category, CategoryInfo> = {
  Groceries: { icon: ShoppingCart, color: 'text-green-500' },
  Transportation: { icon: Car, color: 'text-blue-500' },
  Entertainment: { icon: Film, color: 'text-purple-500' },
  Utilities: { icon: Lightbulb, color: 'text-yellow-500' },
  Rent: { icon: Home, color: 'text-red-500' },
  Salary: { icon: DollarSign, color: 'text-emerald-500' },
  Restaurants: { icon: Utensils, color: 'text-orange-500' },
  Shopping: { icon: ShoppingBag, color: 'text-pink-500' },
  Other: { icon: Package, color: 'text-gray-500' },
};

export const getCategoryIcon = (category: Category): LucideIcon => {
    return categoryIcons[category]?.icon || Package;
};
