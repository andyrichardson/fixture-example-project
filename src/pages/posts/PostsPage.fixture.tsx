import React from "react";
import { never, fromValue } from "wonka";
import { Provider as UrqlProvider, CombinedError } from "urql";
import { PostsPage } from "./PostsPage";

const fetchingState = {
  executeQuery: () => never
} as any;

const errorState = {
  executeQuery: (query: any) =>
    fromValue({
      operation: query.operation,
      error: new CombinedError({})
    })
} as any;

const responseState = {
  executeQuery: (query: any) =>
    fromValue({
      operation: query.operation,
      data: {
        posts: [
          { id: 1, title: "Post title", content: "This is a post" },
          { id: 2, title: "Next post", content: "Here is another post" },
          { id: 3, title: "Final post", content: "Final post here" }
        ]
      }
    })
} as any;

const emptyState = {
  executeQuery: (query: any) =>
    fromValue({
      operation: query.operation,
      data: { posts: [] }
    })
} as any;

export default {
  fetching: (
    <UrqlProvider value={fetchingState}>
      <PostsPage />
    </UrqlProvider>
  ),
  error: (
    <UrqlProvider value={errorState}>
      <PostsPage />
    </UrqlProvider>
  ),
  response: (
    <UrqlProvider value={responseState}>
      <PostsPage />
    </UrqlProvider>
  ),
  empty: (
    <UrqlProvider value={emptyState}>
      <PostsPage />
    </UrqlProvider>
  )
};
