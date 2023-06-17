import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Chatbot from "../components/Chatbot"

const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
      <Chatbot />

        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
