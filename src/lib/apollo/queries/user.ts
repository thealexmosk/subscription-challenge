import { gql } from "../__generated__";

export const CREATE_USER = gql(`
  mutation CreateUser($name: String!, $username: String!, $email: String!) {
    createUser(input: { name: $name, username: $username, email: $email }) {
      name
      username
      email
    }
  }
`);
