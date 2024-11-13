"use client";

import React, { useState } from "react";
import "./BurgerMenu.scss";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="main_burger">
        <div
          className={`burger-menu ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Free Workshops</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
