import { gql } from "@apollo/client";


export const typeDefs = gql`

    type Query {
        Links: [Link]
    }

    type Link {
        id: ID
        title
        url: String
    }
`

