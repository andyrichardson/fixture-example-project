import React from "react";
import styled, { StyledComponent } from "styled-components";
import { lighten, darken } from "polished";

interface ButtonProps {
  kind?: "primary" | "secondary" | "alternate";
}

export const Button: StyledComponent<
  "button",
  any,
  ButtonProps
> = styled.button.attrs<ButtonProps>(({ kind = "primary" }) => ({
  "data-button-kind": kind
}))`
  width: fit-content;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 2px;
  border: solid 2px;
  outline: none;

  &[data-button-kind="primary"] {
    border-color: ${props => props.theme.blue};
    background: ${props => props.theme.blue};
    color: #fff;

    &:hover {
      background: ${props => lighten(0.1, props.theme.blue)};
      border-color: ${props => lighten(0.1, props.theme.blue)};
    }

    &:active {
      background: ${props => darken(0.05, props.theme.blue)};
      border-color: ${props => darken(0.05, props.theme.blue)};
    }
  }

  &[data-button-kind="secondary"] {
    border-color: ${props => props.theme.blue};
    background: transparent;
    color: ${props => props.theme.blue};

    &:hover {
      border-color: ${props => lighten(0.1, props.theme.blue)};
      color: ${props => lighten(0.1, props.theme.blue)};
    }

    &:active {
      border-color: ${props => darken(0.05, props.theme.blue)};
      color: ${props => darken(0.05, props.theme.blue)};
    }
  }

  &[data-button-kind="alternate"] {
    border: none;
    background: transparent;
    color: #fff;

    &:hover {
      color: ${props => lighten(0.1, props.theme.blue)};
    }

    &:active {
      color: ${props => darken(0.05, props.theme.blue)};
    }
  }

  &:hover,
  &:active {
    cursor: pointer;
    transition: color 300ms, border-color 300ms, background-color 300ms;
  }
`;
