import React from "react";
import { SiteHeader } from "./components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <SiteHeader />
      <Outlet />
    </>
  );
};

export default Layout;
