import React from "react";
import scss from "./Header.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import BurgerMenu from "@/components/ui/burgerMenu/BurgerMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Link href='/'>
            <div className={scss.header_logo}></div>
          </Link>

          <div className={scss.header_nav}>
            <ul>
              <li>Courses</li>
              <li>Free Workshops</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className={scss.header_right}>
            <FiShoppingCart />
          </div>
        </div>
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
