import React from "react";
import styles from "./services.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";
import {
  Alarm,
  AlarmFill,
  ArrowRight,
  Camera,
  CheckCircleFill,
  UniversalAccess,
} from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <Col xs={12} md={4}>
      <div className={styles.Card}>
        {data.icon}
        <div className={styles.cont}>
          <h4>{data.title}</h4>
          <p>{data.text}</p>
          <div className={styles.list}>
            {data.points.map((p, i) => (
              <div key={`p_${i}`}>
                <CheckCircleFill />
                <p>{p}</p>
              </div>
            ))}
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
      title: "CCTV & Video Suviellance",
      text: "Video cameras are used to observe an area, connected to a recording device or network and monitored in a control room. Now used for far more than their roots in surveillance in safety, retail analytics, and smart city infrastructure.",
      points: [
        "Expertly installed by professionals",
        "Smart homesecurity packages",
        " Money-back guarantee",
      ],
      icon: <CheckCircleFill />,
    },
    {
      title: "Access Control Systems",
      text: "Secure entry points and restrict access to authorized individuals only. Modern systems include biometric readers, keycards, and mobile credentials to ensure safety and control for commercial and residential properties.",
      points: [
        "Easy to manage permissions",
        "Enhanced security for buildings",
        "Integration with CCTV system",
      ],
      icon: <UniversalAccess />,
    },
    {
      title: "Alarm & Intrusion Detection",
      text: "Protect your property with advanced sensors and alarm systems that detect unauthorized access. Audible alerts, remote notifications, and professional monitoring options ensure you’re always aware and protected.",
      points: [
        "24/7 monitoring capability",
        "Quick emergency response",
        "Seamless integration with CCTV",
      ],
      icon: <AlarmFill />,
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
          <CustomButton variant={3} href={"/services"}>
            Explore All Services <ArrowRight />
          </CustomButton>
        </div>
      </CustomContainer>
      
    </section>
  );
};

export default ServicesSection;
