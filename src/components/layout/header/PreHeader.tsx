import React from "react";
import scss from "./PreHeader.module.scss";

const PreHeader = () => {
  return (
    <header className={scss.PreHeader}>
      <p>One week only—50% off all courses with code 50OFF checkout</p>
    </header>
  );
};

export default PreHeader;
