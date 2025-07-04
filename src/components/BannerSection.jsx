import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import React from "react";
import image1 from "../assets/chess.png";
import image2 from "../assets/mircosoft.png";
import image3 from "../assets/phone.png";

const BannerSection = () => {
  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        interval={3000}>
        <div>
          <img src={image1} alt="chess" />
          <p>Slide 1 Caption</p>
        </div>
        <div>
          <img src={image2} alt="microsoft" />
          <p>Slide 2 Caption</p>
        </div>
        <div>
          <img src={image3} alt="news" />
          <p>Slide 3 Caption</p>
        </div>
      </Carousel>
    </>
  );
};

export default BannerSection;
