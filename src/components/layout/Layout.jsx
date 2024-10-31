import React from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
};

export default Layout;
