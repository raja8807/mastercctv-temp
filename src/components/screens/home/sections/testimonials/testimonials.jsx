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
      text: "The technician was very courteous and informative about the new cameras that I didn’t even know was out there. My cameras are old and keeps going into night mode. I will be getting new cameras. I thank the technician who showed me a new view of what you can see with new cameras and I like it!",
      name: " Sami Wade",
      location: "Promina Inc",
    },
    {
      text: "The technician was very courteous and informative about the new cameras that I didn’t even know was out there. My cameras are old and keeps going into night mode. I will be getting new cameras. I thank the technician who showed me a new view of what you can see with new cameras and I like it!",
      name: " Sami Wade",
      location: "Promina Inc",
    },
    {
      text: "The technician was very courteous and informative about the new cameras that I didn’t even know was out there. My cameras are old and keeps going into night mode. I will be getting new cameras. I thank the technician who showed me a new view of what you can see with new cameras and I like it!",
      name: " Sami Wade",
      location: "Promina Inc",
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
