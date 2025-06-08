import CustomDataGrid from "@/components/CustomDataGrid";
import styles from "./page.module.scss";
import { Typography } from "@mui/material";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <div className={styles.page}>
      <Typography variant="h3" textAlign="center" fontWeight={600}>
        World Data
      </Typography>
      <SearchInput/>
      <CustomDataGrid />
    </div>
  );
}
