import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* writting like this so that header and footer can remain as it is and only outlet is changed */}
    </>
  );
}

export default Layout;
