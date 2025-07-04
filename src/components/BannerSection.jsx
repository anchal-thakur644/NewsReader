import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import React from "react";
import image1 from "../assets/chess.png";
import image2 from "../assets/mircosoft.png";
import image3 from "../assets/phone.png";

const BannerSection = () => {
  const bannerImages = [image1, image2, image3];

  return (
    <div className="relative h-[800px] w-full overflow-hidden">
      {/* 🖼 Background Carousel (z-0) */}
      <div className="absolute inset-0 z-0">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          interval={3000}
          showArrows={false}
          showIndicators={false}
        >
          {bannerImages.map((image, index) => (
            <div key={index} className="h-[800px] w-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full blur-[5px]"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* 🎯 Front Page Overlay (z-10) */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Project</h1>
        <p className="text-lg mb-8 max-w-xl">
          This is a short introduction to our project. It showcases key features
          and the impact it can have. Start exploring now!
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
