import type { LucideIcon } from "lucide-react";

export type Category =
  | 'Groceries'
  | 'Transportation'
  | 'Entertainment'
  | 'Utilities'
  | 'Rent'
  | 'Salary'
  | 'Restaurants'
  | 'Shopping'
  | 'Other';

export const categories: Category[] = [
  'Groceries',
  'Transportation',
  'Entertainment',
  'Utilities',
  'Rent',
  'Salary',
  'Restaurants',
  'Shopping',
  'Other',
];

export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category?: Category;
};

export type Budget = {
  id: string;
  category: Category;
  amount: number;
};

export type Goal = {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
};

export type CategoryInfo = {
  icon: LucideIcon;
  color: string;
};
