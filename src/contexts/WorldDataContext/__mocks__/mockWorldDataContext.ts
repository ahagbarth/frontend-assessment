import { mockCountry } from "@/components/CustomDataGrid/__mocks__/worldDataMock";
import { GET_COUNTRIES } from "../queries";

const mockCountries = [
  mockCountry({ code: "US", name: "United States" }),
  mockCountry({ code: "CA", name: "Canada" }),
];

const mockMultipleCountries = (amount: number) =>
  Array.from({ length: amount }, (_, i) => ({
    code: `C${i}`,
    name: `Country${i}`,
    capital: `Capital${i}`,
    emoji: "🏳️",
    currency: "CUR",
    continent: { name: "Test" },
  }));

export const mockWorldDataContext = [
  {
    request: {
      query: GET_COUNTRIES,
    },
    result: {
      data: {
        countries: mockCountries,
      },
    },
  },
];

export const mockMultiplePages = [
  {
    request: { query: GET_COUNTRIES },
    result: { data: { countries: mockMultipleCountries(101) } },
  },
];
