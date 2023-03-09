import { gql } from "@apollo/client";

export const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;
