"use client";

import { useQuery } from "@apollo/client";
import {  createContext, useContext, useMemo, useState } from "react";
import type  { PropsWithChildren } from "react";
import type { WorldDataContextType } from "./types";
import { GET_COUNTRIES } from "./queries";
import { DEFAULT_WORLD_DATA } from "./constants";


const WorldDataContext = createContext<WorldDataContextType | undefined>(
  DEFAULT_WORLD_DATA
);

export const WorldDataProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<string>("");

const filterVariable = filter
  ? { name: { regex: filter } }
  : undefined;



  const { data, loading, error } = useQuery(GET_COUNTRIES, {
     variables: { filter: filterVariable },
  });

  const result = useMemo(
    () => ({
      data: data?.countries ?? [],
      loading,
      error,
      filter,
      setFilter,
    }),
    [data, loading, error, filter]
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
