import React, { useEffect, useState } from "react";

// components
import Carousel from "../../../Components/Carousel";

//images
import banner1 from "../../../Assets/banner.svg";
import banner2 from "../../../Assets/banner2.png";

export const bannerData = [
  {
    image: banner1,
    heading:
      "<h1>Your Credit Score &amp; Report<br><span>worth ₹1,200</span></h1>",
    headingPrice: "<h1>worth ₹1,200</h1>",
    headingColor: "<h1>Absolutely FREE</h1>",
    subHaeding:
      "<p>Your credit score is more than just a number. It’s the key to help you unlock the doors to the best loans &amp; credit card offers available</p>",
    buttonTitle: "Get Free Credit Report",
  },
  {
    image: banner2,
    heading: "<h1>Looking for the </h1>",
    headingColor2: "<h1>Best Credit Card?</h1>",
    subHaeding: `<ul><p class="rbl">Search Cards by Card Name/Categories</p><p class="stepup">Choose from 400+ Credit Cards</li></pz>`,
    buttonTitle: "Search Credit Cards",
  },
];

const getBannerSize = (width) => {
  if (width <= 360) {
    return "50vh";
  } else if (width <= 768) {
    return "35vh";
  }
  return "45vh";
};

const BannerItems = ({ item }) => {
  return (
    <div class="credit-score-banner">
      <div class="banner-left">
        <img src={item?.image || ""} alt="banner" width={400} height={300} />
      </div>
      <div class="banner-right">
        <h2>
          Your Credit Score & Report
          <br />
          <span class="price-strike">worth ₹1,200</span>
          <span class="free">&nbsp;Absolutely FREE</span>
        </h2>
        <p>
          Your credit score is more than just a number. It’s the key to help you
          unlock the doors to the best loans & credit card offers available.
        </p>
        <button class="cta-button">Get Free Credit Report →</button>
      </div>
    </div>
  );
};

const Banner = () => {
  const [bannerStyle, setBannerStyle] = useState({
    minHeight: getBannerSize(window.innerWidth),
    backgroundColor: "#f9faff",
  });

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const updateScreenSize = () => {
    setBannerStyle({
      ...bannerStyle,
      minHeight: getBannerSize(window.innerWidth),
    });
  };

  return (
    <Carousel style={bannerStyle} data={bannerData} BannerItems={BannerItems} />
  );
};

export default Banner;
