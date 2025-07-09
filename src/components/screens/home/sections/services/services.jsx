import React from "react";
import styles from "./services.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";
import { ArrowRight, Camera, CheckCircleFill } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";

const Card = () => {
  return (
    <Col xs={12} md={4}>
      <div className={styles.Card}>
        <Camera />
        <div className={styles.cont}>
          <h4>CCTV & Video Suviellance</h4>
          <p>
            Video cameras are used to observe an area, connected to a recording
            device or Network and monitored in a control room are used for far
            more than their roots in
          </p>
          <div className={styles.list}>
            <div>
              <CheckCircleFill />
              <p>Expertly installed by professionals</p>
            </div>
            <div>
              <CheckCircleFill />
              <p>Expertly installed by professionals</p>
            </div>
            <div>
              <CheckCircleFill />
              <p>Expertly installed by professionals</p>
            </div>
          </div>
        </div>
        <div className={styles.img}></div>
      </div>
    </Col>
  );
};

const ServicesSection = () => {
  const cards = [
    {
      title: "cctv",
    },
    {
      title: "cctv",
    },
    {
      title: "cctv",
    },
  ];

  return (
    <section className={styles.ServicesSection}>
      <CustomContainer>
        <div className={styles.head}>
          <p>A Trusted Partner For Security Around The Globe</p>
          <h3>Protect Your Business With Our Unique Solutions</h3>
        </div>

        <div className={styles.cards}>
          <Row>
            {cards.map((card, i) => {
              return <Card key={`card${i}`} data={card} />;
            })}
          </Row>
        </div>

        <div className={styles.bottom}>
          <p>
            Don’t worry about any thing, our security experts will install your
            new system, activate it, and show you how to use it.{" "}
            <Link href={"/contact"}>Contact Us Now</Link>
          </p>
          <CustomButton
          variant={3}
          >
            Explore All Services <ArrowRight />
          </CustomButton>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServicesSection;
