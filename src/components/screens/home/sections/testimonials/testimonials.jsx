import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./testimonials.module.scss";
import { Image } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { StarFill } from "react-bootstrap-icons";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "I'm really happy with the CCTV setup provided by Master. The team was punctual, polite, and handled everything professionally. The video clarity is excellent, even at night, and the mobile app makes it easy to monitor things remotely. I truly appreciate their quality service and support!"
      ,name: "Aarthie",
      location: "Seyon Group Of Companies, Chennai",
    },
    {
      text: "I installed CCTV from Master for my consultancy office, mainly to ensure safety during the night shift. Their service was smooth and professional from start to finish. The night vision quality is impressive, and it gives me complete peace of mind knowing everything is being monitored, even after hours. I highly recommend them for office security solutions.",
      name: "Nantha",
      location: "Forgin education consultant. Armenia",
    },
    {
      text: "I recently installed a CCTV system from Master to protect myself and my company from potential threats like criminals and theft. The system includes an advanced alarm feature that adds an extra layer of security. I'm extremely satisfied with the product quality and their prompt, professional service. I feel much more secure now, thanks to Master.",
      name: "Harsavarthan",
      location: "VVR Traders, South end circle.",
    },
  ];

  return (
    <section className={styles.TestimonialsSection}>
      <CustomContainer>
        <Slide arrows={false} indicators={true}>
          {testimonials.map((testimonial, i) => (
            <div key={`test_${i}`} className={styles.testimonial}>
              <div className={styles.left}>
                <Image src="/images/avatar.svg" alt="avatar" width={150} />
              </div>
              <div>
                <i>
                  <span>&quot;</span>
                  {testimonial.text}
                  <span>&quot;</span>
                </i>
                <br />
                <div className={styles.bottom}>
                  <div className={styles.stars}>
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                  </div>
                  <small>
                    {testimonial.name}, <span>{testimonial.location}</span>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </CustomContainer>
    </section>
  );
};

export default TestimonialsSection;
