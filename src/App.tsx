import React, { useMemo } from "react";
import { Posts, CreatePost } from "./pages";
import { Header } from "./components";

const routes = [
  { label: "Posts", route: "/", component: <Posts /> },
  { label: "Create", route: "/create", component: <CreatePost /> }
];

export const App = () => {
  const activeRoute = useMemo(
    () => routes.find(({ route }) => location.pathname === route),
    []
  );

  if (!activeRoute) {
    location.href = "/";
    return null;
  }

  return (
    <>
      <Header>
        <Header.Title>Blog</Header.Title>
        <Header.Nav>
          {routes.map(({ label, route }) => (
            <Header.NavItem
              key={label}
              href={route}
              active={label === activeRoute.label}
            >
              {label}
            </Header.NavItem>
          ))}
        </Header.Nav>
      </Header>
      {activeRoute.component}
    </>
  );
};
