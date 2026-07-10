import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: Array<string | undefined | false | null>) {
  return twMerge(clsx(...classes));
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
