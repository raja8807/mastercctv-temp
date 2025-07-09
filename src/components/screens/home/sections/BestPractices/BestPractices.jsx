import React from "react";
import styles from "./BestPractices.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import {
  ArrowRight,
  CheckCircle,
  CheckCircleFill,
} from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";

const BestPracticesSection = () => {
  return (
    <div className={styles.BestPractices}>
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.img}>
            <Image src="/images/cam-1.webp" fluid alt="cam1" />
            <div>
              <p>
                <i>
                  Delivering Powerful & Security Solutions That Meets Your
                  Needs!
                </i>
              </p>
            </div>
          </div>

          <div className={styles.text}>
            <h2>
              Providing Best Practices For Security Protocols & Standard
              Procedures!
            </h2>
            <p>
              Helping families live intelligently means we’re always working to
              bring our customers the latest technology. As one of the premier
              providers of smart home technology, we are recognized throughout
              the industry for our products, innovation & customer satisfaction.
            </p>
            <b>
              Don&apos;t worry about any thing, our security experts will
              install your new system, activate it, and show you how to use it.
            </b>

            <div className={styles.list}>
              <div>
                <CheckCircleFill />
                <p>
                  Live Stream From Any Mobile and Lifetime Rate Lock Guarantee
                </p>
              </div>
              <div>
                <CheckCircleFill />
                <p>
                  Alerts, Schedules, Automations and All Smart Home Controls
                </p>
              </div>
              <div>
                <CheckCircleFill />
                <p>Professional Grade Protection and Alarm Monitoring 24/7</p>
              </div>
              <br />

              <CustomButton variant={3}>
                How Do I Start?
                <ArrowRight />
              </CustomButton>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default BestPracticesSection;
