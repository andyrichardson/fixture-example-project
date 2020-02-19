import React, { ComponentProps, FC } from "react";
import styled, { StyledComponent } from "styled-components";
import { darken, lighten } from "polished";

type Header = typeof HeaderRoot & {
  Title: typeof Title;
  Nav: typeof Nav;
  NavItem: typeof NavItem;
};

export const HeaderRoot = styled.header`
  box-sizing: border-box;
  background: ${props => props.theme.darkGrey};
  display: flex;
  align-items: center;
  padding: 0 40px;
  width: 100%;
  height: 60px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 30px;
`;

const Nav = styled.nav`
  display: flex;
  margin-left: auto;
  height: 100%;
`;

interface NavItemProps {
  active?: boolean;
}

const NavItem: StyledComponent<"a", any, NavItemProps> = styled.a.attrs<
  NavItemProps
>(({ active = false, ...props }) => ({
  ...props,
  "aria-selected": active
}))`
  text-decoration: none;
  display: flex;
  position: relative;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  padding: 0 15px;
  transition: color 200ms;

  &:hover {
    background: ${props => darken(0.2, props.theme.darkGrey)};
    cursor: pointer;
    color: rgba(255, 255, 255, 1);
  }

  &[aria-selected="true"] {
    background: ${props => darken(0.2, props.theme.darkGrey)};
  }

  &[aria-selected="true"]:after {
    content: " ";
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background: ${props => props.theme.blue};
  }
`;

// @ts-ignore
export const Header: Header = HeaderRoot;
Header.Title = Title;
Header.Nav = Nav;
Header.NavItem = NavItem;
