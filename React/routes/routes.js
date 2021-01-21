import { lazy } from "react";

export default [
  {
    path: "/login",
    label: "AuthorizationPage",
    exact: false,
    component: lazy(() => import("./pages/authorizationPage/AuthorizationPage" /* webpackChunkName: "AuthorizationPage" */)),
    private: false,
    restricted: true,
  },
  {
    path: "/characters",
    label: "CharactersPage",
    exact: false,
    component: lazy(() => import("./pages/charactersPage/CharactersPage" /* webpackChunkName: "CharactersPage" */)),
    private: true,
    restricted: false,
  },
];
