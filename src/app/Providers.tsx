"use client";

import { WorldDataProvider } from "@/contexts/WorldDataContext/WorldDataContext";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "../../apollo-client";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const apolloClient = createApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <WorldDataProvider>{children}</WorldDataProvider>
    </ApolloProvider>
  );
}


export default  Providers