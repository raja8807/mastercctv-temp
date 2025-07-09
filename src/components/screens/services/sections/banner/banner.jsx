import React from "react";
import styles from "./banner.module.scss";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { ArrowRight, ShieldFillCheck } from "react-bootstrap-icons";

const BannerSection = () => {
  const slides = [
    {
      img: "/images/service-1.webp",
      head: "CCTV & Video Surveillance",
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
    <div
      
      className={styles.BannerSection}
      style={{
        backgroundImage: `url(${slides[0].img})`,
      }}
    >
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.left}>
            <h1>{slides[0].head}</h1>
            <p>{slides[0].text}</p>
            <div className={styles.btns}>
              <CustomButton variant={1}>
                Protect My Home <ShieldFillCheck />
              </CustomButton>

              
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default BannerSection;
