import React, { useState } from "react";

import BannerSection from "../components/BannerSection";
import WelcomeModel from "../components/WelcomeModel";

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {!isOpen ? (
        <BannerSection />
      ) : (
        <WelcomeModel isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
};

export default HomeScreen;
