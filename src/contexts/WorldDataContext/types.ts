
export type Country = {
    code: string;
    name: string;
    capital: string;
    emoji: string;
    currency: string;
    continent: { name: string };
  };
  
  export type WorldDataContextType = {
    data: Country[];
    loading: boolean;
    error?: Error;
  }