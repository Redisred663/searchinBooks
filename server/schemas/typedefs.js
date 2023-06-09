const { gql } = require('apollo-server-express');

const typedefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int!
    savedBooks: [Book]!
}

type Book {
    bookId: ID!
    title: String
    author: [String]!
    description: String
    image: String
    link: String
}

input BookInput {
    bookId: ID!
    title: String!
    authors: [String]
    description: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    user(username: String!): User
    me: USer
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typedefs;