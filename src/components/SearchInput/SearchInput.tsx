"use client";

import { useWorldData } from "@/contexts/WorldDataContext/WorldDataContext";
import React from "react";
import styles from "./searchInput.module.scss";

const SearchInput = () => {
  const { filter, setFilter } = useWorldData();

  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => setFilter?.(e.target.value)}
      placeholder="Search countries..."
      className={styles.input}
    />
  );
};

export default SearchInput;
