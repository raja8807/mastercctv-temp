import React from "react";
import styles from "./contact.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";
import { ArrowRight, TelephoneFill } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import CustomSelect from "@/components/ui/select/custom_select/custom_select";
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";

const ContactScreen = () => {
  //    s
  //

  return (
    <div className={styles.ContactScreen}>
      <section className={styles.banner}>
        <CustomContainer>
          <div className={styles.cont}>
            <h1>Contact Us</h1>
            <p>
              We take great pride in everything that we do, control over
              products allows us to ensure our customers receive the best
              quality service.
            </p>
          </div>
        </CustomContainer>
      </section>

      <div className={styles.contactForm}>
        <CustomContainer>
          <div className={styles.box}>
            <Row>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.left}>
                  <div>
                    <h4> Tailored Solutions For Your Security Prioritie</h4>
                    <p>
                      We will design, install, and upgrade solutions to meet
                      business specific needs and budgets from large.
                    </p>

                    <div>
                      <div>
                        <TelephoneFill /> Emergency Line:02 01061245741
                      </div>
                      <div>
                        <TelephoneFill /> Location:Brooklyn, New York, USA
                      </div>
                      <div>
                        <TelephoneFill /> Mon - Fri:8:00 am - 7:00 pm
                      </div>
                    </div>

                    <CustomButton variant={2}>Get Started</CustomButton>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={8}>
                <div className={styles.right}>
                  <form>
                    <h3>Get In Touch</h3>
                    <p>
                      We take great pride in everything that we do, control over
                      products allows us to ensure our customers receive the
                      best quality service.
                    </p>

                    <div className={styles.controls}>
                      <div>
                        <CustomInput placeHolder={"Name"} />
                        <CustomInput placeHolder={"Email"} />
                      </div>
                      <div>
                        <CustomInput placeHolder={"Phone"} />
                        <CustomSelect placeholder={"Select your services"} />
                      </div>
                      <CustomTextArea placeHolder={"Your Message.."} />
                      <br />
                      <br />
                      <CustomButton>
                        <ArrowRight />
                        &nbsp;
                        &nbsp;
                        Submit Request
                      </CustomButton>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </CustomContainer>
      </div>
    </div>
  );
};

export default ContactScreen;
