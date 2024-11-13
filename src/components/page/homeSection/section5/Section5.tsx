import React, { FC } from "react";
import scss from "./Section5.module.scss";

const Section5: FC = () => {
  return (
    <section className={scss.Section6}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}></div>
          <div className={scss.right}>
            <div className={scss.title}>
              <h1>A Passion for Teaching</h1>
              <div className={scss.line}></div>
            </div>
            <span>
              a deep-live on the Instagram algorithm, hashtags, content <br />
              strategy, and branding.
            </span>
            <button>ABOUT SKILLZ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;