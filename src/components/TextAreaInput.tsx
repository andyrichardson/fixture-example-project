import styled from "styled-components";
import { darken } from "polished";

export const TextAreaInput = styled.textarea`
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
