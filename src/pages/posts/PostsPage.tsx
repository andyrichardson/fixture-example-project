import React, { useCallback, useState, useMemo } from "react";
import { useQuery } from "urql";
import { Main, Button, Spinner } from "../../components";
import gql from "graphql-tag";
import styled from "styled-components";
import { Post, CreatePostForm } from "./components";

export const PostsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [getPosts, refetch] = useQuery<any>({
    query: gql`
      {
        posts {
          id
          title
          content
        }
      }
    `
  });

  const handleModalOpen = useCallback(() => setShowModal(true), []);
  const handleModalClose = useCallback(() => setShowModal(false), []);

  const content = useMemo(() => {
    if (getPosts.fetching) {
      return (
        <MainCentered>
          <Spinner />
        </MainCentered>
      );
    }

    if (getPosts.error) {
      return (
        <MainCentered>
          <h1>Something went wrong</h1>
          <Button onClick={refetch} kind="secondary">
            Refetch
          </Button>
        </MainCentered>
      );
    }

    if (getPosts.data.posts.length === 0) {
      return (
        <MainCentered>
          <h1>There are no posts</h1>
          <Button onClick={handleModalOpen}>Create a post</Button>
        </MainCentered>
      );
    }

    return (
      <Main>
        <HeadingContainer>
          <h1>Your feed</h1>
          <Button onClick={handleModalOpen}>Create a post</Button>
        </HeadingContainer>
        {getPosts.data.posts.map((post: any) => (
          <Post key={post.id} {...post} />
        ))}
      </Main>
    );
  }, [getPosts, refetch, handleModalOpen]);

  return (
    <>
      {content}
      <CreatePostForm open={showModal} onClose={handleModalClose} />
    </>
  );
};

const HeadingContainer = styled.div`
  margin: 0 auto;
  width: 500px;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainCentered = styled(Main)`
  align-items: center;
  justify-content: center;
`;
