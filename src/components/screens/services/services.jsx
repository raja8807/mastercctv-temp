import React from "react";
import BannerSection from "./sections/banner/banner";
import styles from "./services.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { GetStartedBox } from "../contact/contact";
import { Col, Image, Row } from "react-bootstrap";
import { FilePdf } from "react-bootstrap-icons";

const ServiesScreen = () => {
  return (
    <div className={styles.ServiesScreen}>
      <BannerSection />
      <CustomContainer>
        <div className={styles.container}>
          <div className={styles.left}>
            <GetStartedBox />
            <div className={styles.download}>
              <h3>Download Brochure</h3>
              <div>
                <div className={styles.icon}>
                  <FilePdf />
                </div>
                <div className={styles.name}>Price List</div>
              </div>
              <div>
                <div className={styles.icon}>
                  <FilePdf />
                </div>
                <div className={styles.name}>Price List</div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div>
              <h2>Overview</h2>
              <p>
                You can quickly set up or delete access for employees, get
                access-triggered alerts when certain doors are opened, and
                quickly find video clips of access events. You can also lock and
                unlock any door remotely, and even have your business lock
                itself automatically at closing time. Smart fire alarm systems
                assist in providing vital protection to businesses, landlords
                and public sector buildings by enhancing traditional fire
                detection equipment. Find out how smart fire alarm systems work
                and what t...
              </p>
              <br />
              <p>
                Reliable, professional monitoring ensures your business,
                inventory and equipment are always protected. Combined with
                STANLEY Security systems, you have security that goes the extra
                mile.
              </p>
              <br />
              <Image src="/images/service-1.webp" alt="sevice1" fluid />
              <br />
              <br />
              <p>
                We pride ourselves on going above and beyond for the customer on
                every project we take on. Whether you’re looking for a
                surveillance camera installation or an access control system
                installation, it’s important that the security system installer
                you choose has the experience and vision to help you achieve
                your security goals. Our commercial security services are about
                more than surveillance system installation or alarm system
                installation. It’s our commitment to customer success before and
                after the project that sets us apart from our competitors. When
                we tackle a project that integrates a security system, we take a
                wholistic approach to installing business security cameras,
                Access Control Systems, commercial alarm systems, or cctv
                cameras.
              </p>
              <br />
              <p>
                From the engineering process to the final customer training, we
                treat our customers like our partner because that’s the Safe and
                Sound Security way. When it comes to providing the best security
                system services for the enterprise sector, no one knows the
                landscape better than security. We’ve worked with national level
                enterprises to local businesses and everything in between.
              </p>
              <br />
              <Row>
                <Col xs={12} md={6}>
                  <Image alt="service2" src="/images/banner-2.webp" fluid />
                  <br />
                  <br />
                </Col>
                <Col xs={12} md={6}>
                  <Image alt="service2" src="/images/banner-10.jpg" fluid />
                  <br />
                  <br />
                </Col>
              </Row>
              <br />
              <h2>Key Benifits</h2>
              <p>
                We can partner with you to design and implement a scalable
                integrated security solution that addresses your toughest
                security challenges, while gaining efficiencies across your
                systems and teams by standardizing platforms and implementing
                event-driving system automation and powerful solutions help!
              </p>
              <br />
              <div className={styles.line} />
              <br />
              <Row>
                <Col xs={12}>
                  <h2>Stats & Charts</h2>
                  <p>
                    Keep an eye on all of the important activity at your
                    business. With single and multi-site viewing, live-streaming
                    and recorded video, it’s easy to monitor the key aspects of
                    your business when you can’t be there.
                  </p>
                  <br />
                  <p>
                    Unlike traditional video surveillance systems, STANLEY
                    Security can provide reliable, off-site storage that cannot
                    be disabled by employees or damaged if your business
                    experiences a fire or flooding. Create secure zones for your
                    staff and stock plus manage access for multiple employees
                    across multiple access points from one central application
                  </p>
                  <br />
                  <p>
                    Secure, 24/7 cloud recording options eliminate the need for
                    additional hardware and enables access to live and recorded
                    video clips.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default ServiesScreen;
