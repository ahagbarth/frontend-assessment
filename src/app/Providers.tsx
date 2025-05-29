"use client";

import { WorldDataProvider } from "@/contexts/WorldDataContext/WorldDataContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WorldDataProvider>
      <body>{children}</body>
    </WorldDataProvider>
  );
}
