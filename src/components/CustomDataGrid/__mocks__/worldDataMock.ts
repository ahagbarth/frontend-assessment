import { Country } from "@/contexts/WorldDataContext/types";

export const mockCountry = ({
    code = "US",
    name = "United States",
    capital = "Washington, D.C.",
    continent = { name: "Americas" },
    currency = "usd",
    emoji = "🇺🇸",
}: Partial<Country> = {}): Country => ({
    code,
    name,
    capital,
    continent,
    currency,
    emoji,
});

export const mockWorldData = ({
  data = [],
  loading = false,
  error,
}: {
  data?: Country[];
  loading?: boolean;
  error?: Error;
}) => ({
  data,
  loading,
  error,
});
