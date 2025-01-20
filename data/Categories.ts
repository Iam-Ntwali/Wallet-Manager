import { TransactionType } from "@prisma/client";

type Category = {
  name: string;
  type: TransactionType;
  subcategories: string[];
};

export const mockCategories: Category[] = [
  // Income Categories
  {
    name: "Salary",
    type: TransactionType.INCOME,
    subcategories: ["Regular Pay", "Bonus", "Overtime", "Commission"],
  },
  {
    name: "Business",
    type: TransactionType.INCOME,
    subcategories: ["Sales", "Services", "Consulting", "Royalties"],
  },
  {
    name: "Investments",
    type: TransactionType.INCOME,
    subcategories: ["Dividends", "Interest", "Capital Gains", "Rental Income"],
  },
  {
    name: "Gifts",
    type: TransactionType.INCOME,
    subcategories: ["Cash Gifts", "Rewards", "Inheritance"],
  },

  // Expense Categories
  {
    name: "Food & Dining",
    type: TransactionType.EXPENSE,
    subcategories: ["Groceries", "Restaurants", "Coffee Shops", "Fast Food"],
  },
  {
    name: "Transportation",
    type: TransactionType.EXPENSE,
    subcategories: ["Fuel", "Public Transit", "Car Maintenance", "Parking"],
  },
  {
    name: "Housing",
    type: TransactionType.EXPENSE,
    subcategories: ["Rent", "Utilities", "Maintenance", "Insurance"],
  },
  {
    name: "Entertainment",
    type: TransactionType.EXPENSE,
    subcategories: ["Movies", "Games", "Sports", "Hobbies"],
  },
  {
    name: "Shopping",
    type: TransactionType.EXPENSE,
    subcategories: ["Clothing", "Electronics", "Home Goods", "Personal Care"],
  },
];
