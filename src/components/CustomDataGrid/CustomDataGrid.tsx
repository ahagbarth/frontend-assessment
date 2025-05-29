"use client";

import { useWorldData } from "@/contexts/WorldDataContext/WorldDataContext";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./customDataGrid.module.scss";

export default function CustomDataGrid() {
  const {} = useWorldData();

  return (
    <div className={styles.gridContainer}>
      <DataGrid columns={[]} rows={[]} />
    </div>
  );
}
