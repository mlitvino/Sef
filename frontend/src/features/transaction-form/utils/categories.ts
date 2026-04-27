import type { TransactionCategory, TransactionType } from '@/types/Transaction';

export const INCOME_CATEGORIES = [
  'salary',
  'freelance',
  'gift',
  'investment',
  'other',
] as const satisfies readonly TransactionCategory[];

export const EXPENSE_CATEGORIES = [
  'food',
  'transport',
  'housing',
  'entertainment',
  'shopping',
  'health',
  'other',
] as const satisfies readonly TransactionCategory[];

export function getCategoriesByType(type: TransactionType): TransactionCategory[] {
  return type === 'income'
    ? [...INCOME_CATEGORIES]
    : [...EXPENSE_CATEGORIES];
}
