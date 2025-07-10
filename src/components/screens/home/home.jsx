import React, { useState } from "react";
import BannerSection from "./sections/banner/banner";
import BestPracticesSection from "./sections/BestPractices/BestPractices";
import FeaturesSection from "./sections/features/features";
import ServicesSection from "./sections/services/services";
import EnquireSection from "./sections/EnquireSection/Enquire";
import TestimonialsSection from "./sections/testimonials/testimonials";

export default function Simulator() {
  return (
    <>
      <BannerSection />
      <BestPracticesSection />
      <TestimonialsSection />
      <FeaturesSection />
      <ServicesSection />
      <EnquireSection />
    </>
  );
}
