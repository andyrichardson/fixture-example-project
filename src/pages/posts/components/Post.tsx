import React, { FC } from "react";
import { Card } from "../../../components";
import styled from "styled-components";

interface Post {
  id: number;
  title: string;
  content: string;
}

export const Post: FC<Post> = ({ title, content }) => (
  <Container>
    <h1>{title}</h1>
    <p>{content}</p>
  </Container>
);

const Container = styled(Card)`
  margin: 0 auto;
  width: 500px;
  max-width: 500px;

  & + & {
    margin-top: 20px;
  }
`;
