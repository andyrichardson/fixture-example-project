import React, { useMemo } from "react";
import { PostsPage, ProfilePage } from "./pages";
import { Header } from "./components";

const routes = [
  { label: "Feed", route: "/", component: <PostsPage /> },
  { label: "Profile", route: "/create", component: <ProfilePage /> }
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
        <Header.Title>Feedmidable</Header.Title>
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
