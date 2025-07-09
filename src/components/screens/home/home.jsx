import React, { useState } from "react";
import BannerSection from "./sections/banner/banner";
import BestPracticesSection from "./sections/BestPractices/BestPractices";
import FeaturesSection from "./sections/features/features";
import ServicesSection from "./sections/services/services";
import EnquireSection from "./sections/EnquireSection/Enquire";

export default function Simulator() {
  return (
    <>
      <BannerSection />
      <BestPracticesSection />
      <FeaturesSection />
      <ServicesSection />
      <EnquireSection />
    </>
  );
}
