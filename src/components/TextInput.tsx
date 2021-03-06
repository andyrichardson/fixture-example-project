import React from "react";
import styled, {
  StyledComponentProps,
  StyledComponent
} from "styled-components";
import { darken } from "polished";

interface TextInputProps {}

export const TextInput: StyledComponent<
  "input",
  any,
  TextInputProps
> = styled.input.attrs<TextInputProps>(({ type = "text", ...props }) => ({
  type,
  ...props
}))`
  display: block;
  margin: 10px 0;
  margin-bottom: 5px;
  background: ${props => darken(0.04, props.theme.darkGrey)};
  border: none;
  padding: 10px 14px;
  outline: none;
  outline-offset: 0;
  font-size: 14px;
  color: #fff;

  &[aria-invalid="true"] {
    outline: solid 1px ${props => props.theme.red};
  }
`;
