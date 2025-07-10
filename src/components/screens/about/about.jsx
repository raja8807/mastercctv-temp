import React from "react";
import styles from "./about.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Col, Image, Row } from "react-bootstrap";
import { ArrowRight, CheckCircleFill } from "react-bootstrap-icons";
import EnquireSection from "../home/sections/EnquireSection/Enquire";
import TestimonialsSection from "../home/sections/testimonials/testimonials";

//
//
//

//
//

const AboutScreen = () => {
  const slides = [
    {
      text: "Fire Detection",
      percentage: "95",
    },
    {
      text: " Alarm Systems ",
      percentage: "88",
    },
    {
      text: " CCTV & Video ",
      percentage: "99",
    },
    {
      text: " Access control ",
      percentage: "85",
    },
  ];

  return (
    <div className={styles.AboutScreen}>
      <section className={styles.banner}>
        <CustomContainer>
          <div className={styles.cont}>
            <h1>About Us</h1>
            <p>
              Welcome to Master CCTV, your trusted partner for complete CCTV
              solutions. With over 5 years of experience in the industry, we
              specialize in providing advanced CCTV camera systems and
              professional installation services at the most affordable prices.
            </p>
            {/* <CustomButton>Know More</CustomButton> */}
          </div>
        </CustomContainer>
      </section>

      <section className={styles.s1}>
        <CustomContainer>
          <Row>
            <Col xs={12} md={7}>
              <div className={styles.left}>
                <h2>
                  Our Security System Installation Department Is Just Passionate
                  About Security Installation And Software.
                </h2>
                <Image src="/images/banner-7.webp" alt="img1" fluid />
              </div>
            </Col>

            <Col xs={12} md={5}>
              <div className={styles.rght}>
                <p>
                  We understand that security is essential for your home and
                  business. That’s why we offer cutting-edge cameras,
                  high-quality equipment like hard disks and cables, and expert
                  guidance to ensure you get the best protection for your needs.
                </p>
                <b>
                  Whether you need to secure your home, office, shop, or
                  warehouse, we’re here to help with reliable, tailored
                  solutions. Join our growing family of satisfied customers who
                  trust Master CCTV for safety and peace of mind.
                </b>

                <div className={styles.list}>
                  <div>At Master CCTV, our mission is simple:</div>
                  <div>
                    <CheckCircleFill />
                    Deliver top-quality security systems at low prices
                  </div>
                  <div>
                    <CheckCircleFill />
                    Provide expert installation by trained professionals{" "}
                  </div>
                  <div>
                    <CheckCircleFill />
                    Offer exclusive discounts to make security accessible for
                    everyone{" "}
                  </div>
                </div>

                <CustomButton>
                  How Do I Start? <ArrowRight />
                </CustomButton>
              </div>
            </Col>
          </Row>
        </CustomContainer>
      </section>

      <section className={styles.s2}>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.left}>
              <div className={styles.content}>
                <b>Total Control Over Securing Your Business</b>
                <h2>Best Practices for Security Protocols & Procedures.</h2>
                <p>
                  Earning and maintaining our customers trust and confidence is
                  critical to the success of our business, which why we have the
                  highest ethical standards for our industry, we ensure that our
                  customers stay as safe and secure as possible.
                </p>
                <p>
                  We can partner with you to design and implement a scalable
                  integrated security solution that addresses your toughest
                  security challenges, while gaining efficiencies.
                </p>
                <CustomButton variant={3}> How Does It Work?</CustomButton>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className={styles.right} />
          </Col>
        </Row>
      </section>
      {/* 
      <section className={styles.s3}>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.right} />
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.left}>
              <div className={styles.content}>
                <b>Convenient System Access By Phone Or Tablet</b>
                <h2>Committed To Your Home And Business Security!</h2>
                <p>
                  Businesses that provide professional services have a wide
                  variety of security needs, from safeguarding people to help
                  secure customer data. Comprehensive security solution can help
                  achieve security goals for single or multiple locations, we
                  have the highest ethical standards for our industry.
                </p>
                <div className={styles.list}>
                  <div>
                    <div>
                      <CheckCircleFill />
                      Professional Installation
                    </div>
                    <div>
                      <CheckCircleFill />
                      Professional Installation
                    </div>
                    <div>
                      <CheckCircleFill />
                      Professional Installation
                    </div>
                    <div>
                      <CheckCircleFill />
                      Professional Installation
                    </div>
                  </div>
                  <div>
                    <div>
                      <CheckCircleFill />
                      Professional Installation
                    </div>
                    <div>
                      <CheckCircleFill />
                      Professional Installation
                    </div>
                    <div>
                      <CheckCircleFill />
                      Professional Installation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section> */}

      <section className={styles.s4}>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.left}>
              <div className={styles.content}>
                <b>Solutions For Your All Your Security Priorities</b>
                <h2>Alerts, Schedules, And All Smart Home Controls.</h2>
                <p>
                  We can partner with you to design and implement a scalable
                  integrated security solution that addresses your toughest
                  security challenges, while gaining efficiencies.
                </p>

                <div className={styles.slider}>
                  {slides.map((s) => (
                    <div className={styles.item} key={s.text}>
                      <div className={styles.label}>
                        <b>{s.text}</b>
                        <b>{s.percentage}%</b>
                      </div>

                      <div
                        className={styles.progress}
                        style={{
                          width: `${s.percentage}%`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className={styles.right} />
          </Col>
        </Row>
      </section>
      <TestimonialsSection/>

      <EnquireSection />

    </div>
  );
};

export default AboutScreen;
