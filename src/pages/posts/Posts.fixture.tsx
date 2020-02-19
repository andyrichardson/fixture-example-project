import React from "react";
import { never, fromValue } from "wonka";
import { Provider as UrqlProvider, CombinedError } from "urql";
import { Posts } from "./Posts";

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
        blogs: [
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
      data: { blogs: [] }
    })
} as any;

export default {
  fetching: (
    <UrqlProvider value={fetchingState}>
      <Posts />
    </UrqlProvider>
  ),
  error: (
    <UrqlProvider value={errorState}>
      <Posts />
    </UrqlProvider>
  ),
  response: (
    <UrqlProvider value={responseState}>
      <Posts />
    </UrqlProvider>
  ),
  empty: (
    <UrqlProvider value={emptyState}>
      <Posts />
    </UrqlProvider>
  )
};
