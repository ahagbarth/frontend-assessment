import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const GRAPHQL_URI =
  process.env.NEXT_PUBLIC_GRAPHQL_URI || "https://countries.trevorblades.com";

export const createApolloClient = () => {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.error(`[Network error]: ${networkError}`);
  });

  const httpLink = new HttpLink({
    uri: GRAPHQL_URI,
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  });
};
