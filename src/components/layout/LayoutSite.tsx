"use client";

import React, { FC, ReactNode, useEffect, useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import scss from "./LayoutSite.module.scss";
import PreHeader from "./header/PreHeader";
import Snowfall from "react-snowfall";
import Loader from "../ui/loader/Loader";

interface LayoutProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutProps> = ({ children }) => {

  const [isLoadinger, setIsLoadinger] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadinger(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoadinger) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
    <Snowfall style={{position: 'fixed'}} snowflakeCount={27}/>
      <div className={scss.LayoutSite}>
        <PreHeader />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default LayoutSite;
