import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./features.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { ArrowRight, HandIndex, Lightning, PersonCheck, ShieldCheck } from "react-bootstrap-icons";

const Box = ({ data }) => {
  return (
    <div className={styles.Box}>
      <div className={styles.left}>{data.icons}</div>
      <div className={styles.right}>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const cards1 = [
    {
      title: "Easy To Setup And Use",
      icons: <HandIndex />,
      text: "We’ll customize the right system for your home’s needs. If someone forces you to disarm system your Duress PIN.",
    },
    {
      title: "Faster Emergency Dispatch",
      icons: <Lightning />,
      text: "Secret Alerts quietly alert you if someone accesses private areas, without sounding an alarm. Do it right from your phone.",
    },
  ];

  const cards2 = [
    {
      title: "Reliable Customer Support",
      icons: <PersonCheck />,
      text: "No drilling or tools needed. If you are not 100% satisfied of our services, just return it for a full refund even pay return shipping.",
    },
    {
      title: "Protection Guarantee",
      icons: <ShieldCheck />,
      text: "If a burglary occurs while your our security system is armed, weʼll pay up to $2000 of your insurance plan deductible.",
    },
  ];

  return (
    <div className={styles.FeaturesSection}>
      <CustomContainer>
        <div className={styles.top}>
          <h2>
            From Door And Window Sensors To
            <br /> Mobile Apps And Cameras System, We <br />
            Help Secure All Business Services!
          </h2>
        </div>

        <div className={styles.row}>
          <Row>
            <Col xs={12} md={4}>
              <div className={styles.text}>
                <p>
                  We delivers powerful and insightful security solutions that
                  enable protectors to drive forward. As the leader in security,
                  we customize a home security system to meet your safety needs.
                </p>
                <br />
                <p>
                  Ensuring our places of work and leisure are safe shaping the
                  smart businesses of tomorrow.
                </p>
                <br />
                <br />
                <CustomButton variant={2}>
                  Know More
                  <ArrowRight />
                </CustomButton>
              </div>
            </Col>

            <Col xs={12} md={4}>
              {cards1.map((c, i) => (
                <Box key={`c1${i}`} data={c} />
              ))}
            </Col>
            <Col xs={12} md={4}>
              {cards2.map((c, i) => (
                <Box key={`c2${i}`} data={c} />
              ))}
            </Col>
          </Row>
        </div>
      </CustomContainer>
    </div>
  );
};

export default FeaturesSection;
