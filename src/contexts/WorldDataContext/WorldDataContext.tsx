"use client";

import { useQuery } from "@apollo/client";
import {  createContext, useContext, useMemo } from "react";
import type  { PropsWithChildren } from "react";
import type { WorldDataContextType } from "./types";
import { GET_COUNTRIES } from "./queries";
import { DEFAULT_WORLD_DATA } from "./constants";


const WorldDataContext = createContext<WorldDataContextType | undefined>(
  DEFAULT_WORLD_DATA
);

export const WorldDataProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  const result = useMemo(
    () => ({
      data: data?.countries ?? [],
      loading,
      error,
    }),
    [data, loading, error]
  );

  return (
    <WorldDataContext.Provider value={result}>
      {children}
    </WorldDataContext.Provider>
  );
};

export const useWorldData = () => {
  const context = useContext(WorldDataContext);
  if (context === undefined) {
    throw new Error("useWorldData must be used within a WorldDataProvider");
  }

  return context;
};
