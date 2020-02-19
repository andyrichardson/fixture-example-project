import React from "react";
import { useQuery } from "urql";
import { Main, Button } from "../../components";
import gql from "graphql-tag";
import { Spinner } from "../../components/Spinner";
import styled from "styled-components";
import { BlogPost } from "./components/BlogPost";

export const Posts = () => {
  const [getBlogs] = useQuery<any>({
    query: gql`
      {
        blogs {
          id
          title
          content
        }
      }
    `
  });

  if (getBlogs.fetching) {
    return (
      <MainCentered>
        <Spinner />
      </MainCentered>
    );
  }

  if (getBlogs.error) {
    return (
      <MainCentered>
        <h1>Something went wrong</h1>
        <Button kind="secondary">Refetch</Button>
      </MainCentered>
    );
  }

  if (getBlogs.data.blogs.length === 0) {
    return (
      <MainCentered>
        <h1>There are no posts</h1>
        <Button>Create a post</Button>
      </MainCentered>
    );
  }

  return (
    <Main>
      {getBlogs.data.blogs.map((blog: any) => (
        <BlogPost key={blog.id} {...blog} />
      ))}
    </Main>
  );
};

const MainCentered = styled(Main)`
  align-items: center;
  justify-content: center;
`;
