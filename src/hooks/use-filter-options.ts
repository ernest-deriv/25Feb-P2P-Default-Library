import { useEffect, useState } from "react";
import { tradersApi, type Trader } from "@/services/api";

interface FilterOptions {
  currencies: string[];
  paymentMethods: {
    value: string;
    label: string;
  }[];
}

export function useFilterOptions() {
  const [options, setOptions] = useState<FilterOptions>({
    currencies: [],
    paymentMethods: [
      { value: "all", label: "Payment (All)" },
      { value: "bank", label: "Bank" },
      { value: "bank_transfer", label: "Bank Transfer" },
      { value: "other", label: "Other Methods" },
    ],
  });

  useEffect(() => {
    const loadOptions = async () => {
      try {
        const traders = await tradersApi.getTraders({});

        // Extract unique currencies
        const uniqueCurrencies = Array.from(
          new Set(traders.map((t) => t.currency)),
        ).sort();

        // Extract unique payment methods
        const uniqueMethods = new Set<string>();
        traders.forEach((trader) => {
          trader.methods.forEach((method) => uniqueMethods.add(method));
        });

        // Update options
        setOptions((prev) => ({
          currencies: uniqueCurrencies,
          paymentMethods: prev.paymentMethods, // Keep the predefined payment method categories
        }));
      } catch (error) {
        console.error("Error loading filter options:", error);
      }
    };

    loadOptions();
  }, []);

  return options;
}
