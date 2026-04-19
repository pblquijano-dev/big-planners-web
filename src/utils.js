import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility to merge tailwind classes with clsx, handling conditional classes
 * and resolving tailwind conflicts (e.g. px-2 py-2 and p-4).
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
