import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <header>
        <TopNavbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
