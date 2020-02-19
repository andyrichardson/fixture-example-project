import React from "react";
import styled, {
  StyledComponentProps,
  StyledComponent
} from "styled-components";

interface TextInputProps {}

export const TextInput: StyledComponent<
  "input",
  any,
  TextInputProps
> = styled.input.attrs<TextInputProps>(({ type = "text", ...props }) => ({
  type,
  ...props
}))`
  padding: 7px 10px;
  outline: none;
  outline-offset: 0;

  &[aria-invalid] {
    outline: solid 1px ${props => props.theme.red};
  }
`;
