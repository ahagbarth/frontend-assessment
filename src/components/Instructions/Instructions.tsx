import { Chip, Paper, Typography } from "@mui/material";
import styles from "./instructions.module.scss";

export default function Instructions() {
  const label = "This component should not be rendered in the submitted version";

  return (
    <Paper className={styles.main}>
      <Typography variant="h5">Instructions</Typography>
      <Typography>in the README.md file</Typography>

      <Chip label={label} color="error" className={styles.chip} />
    </Paper>
  );
}
