import React from "react";
import { Search } from "@mui/icons-material";
import style from "./Header.module.scss";
import Logo from "../../assets/Logo.png";
const Header = () => {
  return (
    <div className={style.headerWrapper}>
      <div className={style.header}>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={style.container}>
          <ul>
            <li>Home</li>
            <li>Genre</li>
            <li>Comedy</li>
            <li>Action</li>
            <li>Romance</li>
            <li>Top IMDB</li>
          </ul>
          <div className={style.searchContainer}>
            <input
              type="text"
              className={style.search}
              placeholder="Enter Keywords Here"
              name="search"
            />
            <Search className={style.searchIcon} />
          </div>
          <button className={style.loginButton} type="button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
