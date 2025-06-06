import { Country } from "@/contexts/WorldDataContext/types";

export const HEADER_COLUMNS = [
  {
    field: "emoji",
    headerName: "Flag",
    editable: false,
  },
  {
    field: "name",
    headerName: "Name",
    editable: false,
    flex: 1,
    minWidth: 150,
  },
  {
    field: "capital",
    headerName: "Capital",
    editable: false,
    flex: 1,
    minWidth: 150,
  
  },
  {
    field: "continent",
    headerName: "Continent",
    editable: false,
    valueGetter: (row: Country['continent']) => row?.name || "—",
    flex: 1,
    minWidth: 150
  },
  {
    field: "currency",
    headerName: "Currency",
    editable: false,
    flex: 1,
    minWidth: 150,

  },
];
