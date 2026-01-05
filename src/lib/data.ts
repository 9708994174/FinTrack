import { Transaction, Budget, Goal } from "@/types";

export const transactions: Transaction[] = [
  { id: '1', date: new Date(new Date().setDate(1)).toISOString(), description: "Monthly Salary", amount: 5000, type: 'income', category: 'Salary' },
  { id: '2', date: new Date(new Date().setDate(2)).toISOString(), description: "Grocery Shopping at FreshMart", amount: 150.75, type: 'expense' },
  { id: '3', date: new Date(new Date().setDate(2)).toISOString(), description: "Monthly Rent Payment", amount: 1200, type: 'expense', category: 'Rent' },
  { id: '4', date: new Date(new Date().setDate(3)).toISOString(), description: "SQ *SPOTIFY", amount: 10.99, type: 'expense' },
  { id: '5', date: new Date(new Date().setDate(4)).toISOString(), description: "Gas Bill", amount: 75.20, type: 'expense', category: 'Utilities' },
  { id: '6', date: new Date(new Date().setDate(5)).toISOString(), description: "Dinner at The Italian Place", amount: 65.50, type: 'expense' },
  { id: '7', date: new Date(new Date().setDate(7)).toISOString(), description: "New pair of shoes", amount: 120, type: 'expense', category: 'Shopping' },
  { id: '8', date: new Date(new Date().setDate(10)).toISOString(), description: "Uber trip", amount: 25.30, type: 'expense', category: 'Transportation' },
  { id: '9', date: new Date(new Date().setDate(12)).toISOString(), description: "Cinema tickets for 'Dune'", amount: 35, type: 'expense', category: 'Entertainment' },
  { id: '10', date: new Date(new Date().setDate(15)).toISOString(), description: "Weekly Groceries", amount: 85.40, type: 'expense', category: 'Groceries' },
  { id: '11', date: new Date(new Date().setDate(16)).toISOString(), description: "VENMO CASHOUT", amount: 50, type: 'income', category: 'Other' },
];

export const budgets: Budget[] = [
  { id: '1', category: 'Groceries', amount: 400 },
  { id: '2', category: 'Transportation', amount: 150 },
  { id: '3', category: 'Entertainment', amount: 200 },
  { id: '4', category: 'Restaurants', amount: 250 },
  { id: '5', category: 'Shopping', amount: 300 },
  { id: '6', category: 'Utilities', amount: 150 },
];

export const goals: Goal[] = [
    {
        id: '1',
        name: "Vacation to Hawaii",
        targetAmount: 3000,
        currentAmount: 1250,
        deadline: new Date(new Date().getFullYear() + 1, 5, 1).toISOString(),
    },
    {
        id: '2',
        name: "New Laptop",
        targetAmount: 1500,
        currentAmount: 400,
        deadline: new Date(new Date().getFullYear(), 11, 31).toISOString(),
    }
];
