import React from "react";
import styled from "styled-components";
import { darken } from "polished";

export const Main = styled.main`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  color: #fff;
  background: ${props => darken(0.05, props.theme.darkGrey)};
  min-height: 100%;
`;
