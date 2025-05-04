import { Fragment } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import "../index.css";

export const Route = createRootRoute({
  component: RootRouteComponent,
});

function RootRouteComponent() {
  return (
    <Fragment>
      <Outlet />
      <TanStackRouterDevtools />
    </Fragment>
  );
}
