import React, { useState } from "react";
import styles from "./contact.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";
import {
  ArrowRight,
  ClockFill,
  EnvelopeFill,
  Phone,
  TelephoneFill,
} from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import CustomSelect from "@/components/ui/select/custom_select/custom_select";
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";
import { CONTACT_DETAILS } from "@/constants/constants";
import TestimonialsSection from "../home/sections/testimonials/testimonials";

export const GetStartedBox = () => {
  return (
    <div className={styles.GetStartedBox}>
      <div>
        <h4> Tailored Solutions For Your Security Prioritie</h4>
        <p>
          We will design, install, and upgrade solutions to meet business
          specific needs and budgets from large.
        </p>

        <div>
          <div>
            <EnvelopeFill /> {CONTACT_DETAILS.email}
          </div>
          <div>
            <TelephoneFill /> +91 {CONTACT_DETAILS.phoneNo2}
          </div>
          <div>
            <TelephoneFill /> +91 {CONTACT_DETAILS.phoneNo2}
          </div>
          <div>
            <ClockFill /> Mon - Fri:8:00 am - 7:00 pm
          </div>
        </div>

        <CustomButton variant={2}>Get Started</CustomButton>
      </div>
    </div>
  );
};

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

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
                <GetStartedBox />
              </Col>
              <Col xs={12} md={6} lg={8}>
                <div className={styles.right}>
                  <form onSubmit={handleSubmit}>
                    <h3>Get In Touch</h3>
                    <p>
                      We take great pride in everything that we do, control over
                      products allows us to ensure our customers receive the
                      best quality service.
                    </p>

                    <div className={styles.controls}>
                      <div>
                        <CustomInput
                          placeHolder={"Name"}
                          value={formData.name}
                          onChange={(e, v) => {
                            setFormData((prev) => ({ ...prev, name: v }));
                          }}
                          required
                        />
                        <CustomInput
                          placeHolder={"Email"}
                          value={formData.email}
                          onChange={(e, v) => {
                            setFormData((prev) => ({ ...prev, email: v }));
                          }}
                          required
                          type="email"
                        />
                      </div>
                      <div>
                        <CustomInput
                          placeHolder={"Phone"}
                          value={formData.phone}
                          onChange={(e, v) => {
                            setFormData((prev) => ({ ...prev, phone: v }));
                          }}
                          required
                        />
                        <CustomSelect
                          placeholder={"Select your services"}
                          options={["Service 1", "Service 2"]}
                          value={formData.service}
                          onChange={(e, v) => {
                            setFormData((prev) => ({ ...prev, service: v }));
                          }}
                          required
                        />
                      </div>
                      <CustomTextArea
                        placeHolder={"Your Message.."}
                        value={formData.message}
                        onChange={(e, v) => {
                          setFormData((prev) => ({ ...prev, message: v }));
                        }}
                        required
                      />
                      <br />
                      <br />
                      <CustomButton>
                        <ArrowRight />
                        &nbsp; &nbsp; Submit Request
                      </CustomButton>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </CustomContainer>
      </div>

      <TestimonialsSection />
    </div>
  );
};

export default ContactScreen;
