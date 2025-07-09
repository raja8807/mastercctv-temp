import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import { PAGES } from "../header/header";
import {
  EnvelopeFill,
  Facebook,
  Instagram,
  Linkedin,
  TelephoneFill,
  Youtube,
} from "react-bootstrap-icons";
import { CONTACT_DETAILS } from "@/constants/constants";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <CustomContainer>
        <div>
          <div className={styles.top}>
            <Row>
              <Col xs={12} md={6} lg={3}>
                <Image src="/logo/logo.png" width={100} alt="logoF" />
                <br />
                <br />
                <br />
              </Col>

              <Col xs={12} md={6} lg={6}>
                <Row>
                  <Col>
                    <div className={styles.box}>
                      <h4>Quick Links</h4>
                      {PAGES.map((page) => {
                        return (
                          <Link key={page.title} href={page.href}>
                            {page.title}
                          </Link>
                        );
                      })}
                    </div>
                  </Col>
                  <Col>
                    <div className={styles.box}>
                      <h4>Quick Links</h4>
                      {PAGES.map((page) => {
                        return (
                          <Link key={page.title} href={page.href}>
                            {page.title}
                          </Link>
                        );
                      })}
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col xs={12} md={6} lg={3}>
                <div className={styles.contact}>
                  <Link
                    className={styles.row}
                    href={`mailto:${CONTACT_DETAILS.email}`}
                  >
                    <EnvelopeFill /> {CONTACT_DETAILS.email}
                  </Link>

                  <Link
                    href={`tel:+91${CONTACT_DETAILS.phoneNo1}`}
                    className={styles.row}
                  >
                    <TelephoneFill /> +91 {CONTACT_DETAILS.phoneNo1}
                  </Link>
                  <Link
                    href={`tel:+91${CONTACT_DETAILS.phoneNo2}`}
                    className={styles.row}
                  >
                    <TelephoneFill /> +91 {CONTACT_DETAILS.phoneNo2}
                  </Link>
                  {/* <div className={styles.add}>
                    <p>
                      <br />
                      add line1 scasc,
                      <br />
                      add line2 afb,
                      <br />
                      add line3 - 605555.
                    </p>
                  </div> */}
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.social}>
            <div className={styles.links}>
              <Link href={"/"}>
                <Facebook />
                Facebook
              </Link>
              <Link href={"/"}>
                <Instagram />
                Instagram
              </Link>
              <Link href={"/"}>
                <Youtube />
                Youtube
              </Link>
              <Link href={"/"}>
                <Linkedin />
                LinkedInn
              </Link>
            </div>
          </div>
          <div className={styles.bottom}>
            <p>
              ©2025 All Rights Reserved. With Love by{" "}
              <Link href={"/"}>website.com</Link>
            </p>
          </div>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
