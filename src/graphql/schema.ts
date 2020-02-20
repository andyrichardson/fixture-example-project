import { makeExecutableSchema } from "graphql-tools";

let posts = [
  { id: 1, title: "My blog", content: "Hello" },
  { id: 2, title: "My blog", content: "Hello" },
  { id: 3, title: "My blog", content: "Hello" }
];

export const typeDefs = `
  type Post {
    id: ID
    title: String!
    content: String!
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    createPost(title: String!, content: String!): Post!
  }
`;

const resolvers = {
  Query: {
    posts: async () => {
      await delay(500);
      return posts;
    }
  },
  Mutation: {
    createPost: async (args: any) => {
      await delay(500);
      console.log(args);
    }
  }
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const delay = (t: number) => new Promise(resolve => setTimeout(resolve, t));
