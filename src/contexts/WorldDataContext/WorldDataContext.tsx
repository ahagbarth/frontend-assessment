"use client";

import { createContext, useContext } from "react";

// Create a simple context with a default value
const WorldDataContext = createContext<string | undefined>(undefined);

export const WorldDataProvider = ({ children }: { children: React.ReactNode }) => <WorldDataContext.Provider value="Hello from context!">{children}</WorldDataContext.Provider>;

export const useWorldData = () => {
  // Use the Apollo Client to fetch data or perform mutations
  // This is just a placeholder; you can replace it with your actual Apollo Client instance:
  // import { useApolloClient } from "@apollo/client";
  // const client = useApolloClient();

  const context = useContext(WorldDataContext);
  if (context === undefined) {
    throw new Error("useWorldData must be used within a WorldDataProvider");
  }
  return context;
};
