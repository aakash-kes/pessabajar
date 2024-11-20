import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselWrapper = ({ style = {}, data = [], BannerItems = () => {} }) => {
  const slideStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa", 
    ...style,
  };

  return (
    <Carousel>
      {data?.map((item, idx) => (
        <Carousel.Item key={idx}>
          <div style={slideStyle}>
            <Carousel.Caption>
              <BannerItems item={item} />
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselWrapper;
