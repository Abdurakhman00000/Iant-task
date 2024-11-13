import React, { FC } from "react";
import scss from "./Section2.module.scss";

const Section2: FC = () => {
  return (
    <section className={scss.Section3}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}></div>
          <div className={scss.right}>
            <div className={scss.title}>
              <h1>
                Get personalized learning <br /> recommendations
              </h1>
              <div className={scss.line}></div>
            </div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, <br /> purus sit amet luctus venenatis, lectus magna
              fringilla urnaLorem <br /> ipsum dolor sit amet.
            </span>
            <button>CONTACT US</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;