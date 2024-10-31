import React from "react";
import scss from "./Header.module.scss";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import logo from "../../../image/logo.svg";
import menu from "../../../image/nav-menu.svg";
const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={logo} alt="logo" />
            <h1>NFT Marketplace</h1>
          </div>
          <nav className={scss.nav}>
            <a href="#">Marketplace</a>
            <a href="#">Rankings</a>
            <a href="#">Connect a wallet</a>
            <button>
              <PermIdentityIcon /> Sign Up
            </button>
          </nav>
          <div className={scss.burger_menu}>
            <img src={menu} alt="burger-menu" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
