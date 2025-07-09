import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./Enquire.module.scss";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import CustomSelect from "@/components/ui/select/custom_select/custom_select";
import Link from "next/link";
import ControlLabel from "@/components/ui/contol_label/control_label";
import { Form } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { ArrowRight } from "react-bootstrap-icons";

const EnquireSection = () => {
  const int = [
    "Intrusion Detection",
    "Video Surveillance",
    "System Integration",
    "Monitoring",
    "Fire Detection",
    "Access Control",
  ];

  return (
    <section className={styles.EnquireSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.left}>
            <div className={styles.s1}>
              <h2>
                Providing Best Security Protocols & Standardizing Practices for
                Procedures
              </h2>
              <p>
                Whether you’re home or away, we make smart simple, have a remote
                access and control everything from lights, locks, and
                thermostats.
              </p>
              <CustomButton variant={2}>Our Products</CustomButton>
              <br/>
              <br/>
            </div>

            <div className={styles.s2}>
              <div className={styles.t}>
                <p>
                  Our security camera system installation department is just
                  passionate about providing the best security system services
                  and solutions.
                </p>
              </div>

              <div className={styles.countCont}>
                <div>
                  <h1>6000</h1>
                  <b>Projects And Systems Completed in 2020</b>

                  <p>
                    Ensure the valuable assets and environments that help you
                    serve your customers and progress.
                  </p>
                </div>
                <div>
                  <h1>6000</h1>
                  <b>Projects And Systems Completed in 2020</b>

                  <p>
                    Ensure the valuable assets and environments that help you
                    serve your customers and progress.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <form>
              <h4>Request a Quote</h4>
              <p>
                Please complete the form below, to request a quote, and we’ll be
                in touch. Or you can call us <Link href="/">98765 41230</Link>{" "}
                and our specialists will provide the necessary help!
              </p>

              <div className={styles.row}>
                <CustomSelect
                  label={"Home Or Business"}
                  placeholder={"Select.."}
                />
                <CustomSelect label={"Industry"} placeholder={"Select.."} />
              </div>
              <div className={styles.row}>
                <CustomSelect label={"System Size"} placeholder={"Select.."} />
                <CustomSelect label={"Own Or Rent?"} placeholder={"Select.."} />
              </div>
              <div className={styles.row}>
                <CustomInput
                  placeholder={"example@gmail.com"}
                  label={"Email Address"}
                />
                <CustomInput
                  placeholder={"98745 987456"}
                  label={"Email Address"}
                />
              </div>

              <div>
                <ControlLabel label={"System Of Interests:"}></ControlLabel>
                <div className={styles.ints}>
                  {int.map((i) => {
                    return <Form.Check key={i} label={i} />;
                  })}
                </div>
              </div>

              <CustomButton variant={3}>
                Submit Request <ArrowRight />
              </CustomButton>
            </form>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default EnquireSection;
