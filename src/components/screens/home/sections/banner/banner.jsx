import React from "react";
import styles from "./banner.module.scss";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { ArrowRight } from "react-bootstrap-icons";

const BannerSection = () => {
  const slides = [
    {
      img: "/images/banner/slider-1.webp",
      head: "Smart Systems For Safe Future!",
      text: `Not only will this reduce the probability of crime happening on your property, it will reduce or eliminate any liability that falls on you if you can show you have solid, well-designed commercial building security systems in place.`,
    },
    {
      img: "/images/banner/slider-2.webp",
      head: "Unique & Powerful Security Solutions",
      text: `Not only will this reduce the probability of crime happening
                    on your property, it will reduce or eliminate any liability
                    that falls on you if you can show you have solid,
                    well-designed commercial building security systems in place.`,
    },
  ];

  return (
    <Slide arrows={false} autoplay>
      {slides.map((slide, idx) => {
        return (
          <div
            key={`slide_${idx}`}
            className={styles.BannerSection}
            style={{
              backgroundImage: `url(${slide.img})`,
            }}
          >
            <CustomContainer>
              <div className={styles.cont}>
                <div className={styles.left}>
                  <h1>{slide.head}</h1>
                  <p>{slide.text}</p>
                  <div>
                    <CustomButton variant={1}>
                      Expolrore Our Services <ArrowRight />
                    </CustomButton>
                    &nbsp; &nbsp;
                    <CustomButton variant={2}>More About Us!</CustomButton>
                  </div>
                </div>
              </div>
            </CustomContainer>
          </div>
        );
      })}
    </Slide>
  );
};

export default BannerSection;
