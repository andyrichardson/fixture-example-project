import { makeExecutableSchema } from "graphql-tools";

let blogs = [
  { id: 1, title: "My blog", content: "Hello" },
  { id: 2, title: "My blog", content: "Hello" },
  { id: 3, title: "My blog", content: "Hello" }
];

export const typeDefs = `
  type Blog {
    id: ID
    title: String!
    content: String!
  }

  type Query {
    blogs: [Blog]
  }
`;

const resolvers = {
  Query: {
    blogs: async () =>
      new Promise(resolve => {
        setTimeout(() => resolve(blogs), 500);
      })
  }
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
