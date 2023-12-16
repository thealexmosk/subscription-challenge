import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphqlzero.almansi.me/api",
  documents: ["./src/**/*.{ts,tsx}"],
  generates: {
    "./src/lib/apollo/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
