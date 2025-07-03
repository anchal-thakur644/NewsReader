import React from "react";
import BannerSection from "./components/BannerSection";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutUs from "./screens/AboutUs";

const App = () => {
  return (
    <>
      <BannerSection />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/AboutUsS" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
