import React from "react";
import { Header } from "./Header";

export default {
  default: (
    <Header>
      <Header.Title>Header</Header.Title>
      <Header.Nav>
        <Header.NavItem active>Home</Header.NavItem>
        <Header.NavItem>About</Header.NavItem>
        <Header.NavItem>Contact</Header.NavItem>
      </Header.Nav>
    </Header>
  )
};
