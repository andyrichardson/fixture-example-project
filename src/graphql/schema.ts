import { buildSchema } from "graphql";

let posts = [
  { id: 1, title: "My blog", content: "Hello" },
  { id: 2, title: "My blog", content: "Hello" },
  { id: 3, title: "My blog", content: "Hello" }
];

export const schema = buildSchema(`
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
`);

export const rootValue = {
  posts: async () => {
    await delay(500);
    return posts;
  },
  createPost: async (args: any) => {
    const newPost = { id: posts.length + 1, ...args };
    await delay(500);
    posts = [newPost, ...posts];
    return newPost;
  }
};

const delay = (t: number) => new Promise(resolve => setTimeout(resolve, t));
