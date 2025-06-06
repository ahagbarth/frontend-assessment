"use client";

import { useWorldData } from "@/contexts/WorldDataContext/WorldDataContext";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./customDataGrid.module.scss";
import { HEADER_COLUMNS } from "./constants";
import { CircularProgress, Typography } from "@mui/material";
import { useMemo } from "react";

const CustomDataGrid = () => {
  const { data, loading, error } = useWorldData();
  const columns = useMemo(() => HEADER_COLUMNS, []);

  // NOTE: with more time i would have created a custom error component same with loading spinner
  if (error) {
    return (
      <div data-testid="error-message">
        <Typography>There has been an error fetching the data... </Typography>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.loadingSpinnerContainer}>
        <CircularProgress
          aria-label="Loading spinner"
          data-testid="loading-spinner"
        />
      </div>
    );
  }

  return (
    <div className={styles.gridContainer} aria-label="World Data Grid">
      <DataGrid
        className={styles.grid}
        columns={columns}
        rows={data}
        getRowId={(row) => row.code}
        data-testid="world-data-grid"
      />
    </div>
  );
};

export default CustomDataGrid;
