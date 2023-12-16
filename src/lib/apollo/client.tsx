import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as AP,
} from "@apollo/client";
import { ReactNode } from "react";

export const GQL_SCHEMA_URL = "https://graphqlzero.almansi.me/api";

export const client = new ApolloClient({
  uri: GQL_SCHEMA_URL,
  cache: new InMemoryCache(),
});

export const ApolloProvider = ({ children }: { children: ReactNode }) => {
  return <AP client={client}>{children}</AP>;
};
