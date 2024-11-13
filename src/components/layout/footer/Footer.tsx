import React, { FC } from "react";
import scss from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}></div>
          <div className={scss.columns}>
            <div className={scss.column}>
              <h3>LEARNING PLATFORM</h3>
              <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>Free Workshops</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={scss.column}>
              <h3>TEMPLATE</h3>
              <ul>
                <li>Instructions</li>
                <li>Style Guide</li>
                <li>Licenses</li>
                <li>Licenses</li>
              </ul>
            </div>
            <div className={scss.column2}>
              <h3>FOLLOW SKILLZ</h3>
              <div className={scss.follow}>
                <ul>
                  <li>
                    <FaTiktok />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaYoutube />
                  </li>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;