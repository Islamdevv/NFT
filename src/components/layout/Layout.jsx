import React from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainPage from "../pages/mainPage/MainPage";
const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>
        <MainPage />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
