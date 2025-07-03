import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../assets/chess.png";
import image2 from "../assets/mircosoft.png";
import image3 from "../assets/phone.png";
const BannerSection = () => {
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        interval={3000}
        stopOnHover={true}
      >
        <div>
          <img src={image1} alt="chess" />
          <p className="legend">Slide 1 Caption</p>
        </div>
        <div>
          <img src={image2} alt="microsoft" />
          <p className="legend">Slide 2 Caption</p>
        </div>
        <div>
          <img src={image3} alt="news" />
          <p className="legend">Slide 3 Caption</p>
        </div>
      </Carousel>
    </div>
  );
};

export default BannerSection;
