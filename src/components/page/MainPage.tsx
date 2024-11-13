import React from "react";
import WelcomePage from "./homeSection/welcomePage/WelcomePage";
import Section1 from "./homeSection/section1/Section1";
import Section3 from "./homeSection/section3/Section3";
import Section2 from "./homeSection/section2/Section2";
import Section4 from "./homeSection/section4/Section4";
import Section5 from "./homeSection/section5/Section5";
import Section6 from "./homeSection/section6/Section6";
import Section7 from "./homeSection/section7/Section7";

const MainPage = () => {
  return (
    <>
      <WelcomePage />
      <Section1 />
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
    </>
  );
};

export default MainPage;
