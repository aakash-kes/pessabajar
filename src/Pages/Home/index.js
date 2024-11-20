import React from "react";

// components
import Banner from "./Banner";
import Products from "./Products";
import InsuranceAndInvestment from "./InsuranceAndInvestment";

import "./style.css";

const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <InsuranceAndInvestment />
    </>
  );
};

export default Home;
