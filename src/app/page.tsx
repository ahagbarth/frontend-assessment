import CustomDataGrid from "@/components/CustomDataGrid";
import Instructions from "@/components/Instructions";
import { Typography } from "@mui/material";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Instructions />
      <Typography variant="body1" component="p">
        This project serves as a comprehensive demonstration and boilerplate for advanced data management in modern web applications. It leverages a powerful stack including:
        Next.js 14+ (App Router): For server-side rendering, routing, and API routes.MUI Apollo Client: To efficiently fetch and manage GraphQL data from your backend. DataGrid:
        For a feature-rich, high-performance table component. TypeScript: Ensuring robust type checking throughout the application. Vitest: For fast and reliable unit and
        integration testing. Key Features: Server-Side DataGrid Control: Illustrates how to drive MUI DataGrid&apos;s state (pagination, sorting, filtering, row selection) directly
        from your GraphQL server queries. Apollo Client Integration via Context: Data is fetched using Apollo Client and made globally available to the DataGrid through a custom
        React Context, promoting clean data flow. Dynamic Query Manipulation: Witness how user interactions with the DataGrid (e.g., changing pages, applying filters, sorting
        columns) automatically translate into updated Apollo Client query variables and options, triggering new server-side data fetches. Scalable Architecture: Provides a solid
        foundation for building applications that require efficient handling of large datasets with GraphQL.
      </Typography>
      <CustomDataGrid />
    </div>
  );
}
