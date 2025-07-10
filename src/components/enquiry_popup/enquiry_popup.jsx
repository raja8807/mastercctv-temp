import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { EnquireForm } from "../screens/home/sections/EnquireSection/Enquire";

const EnquiryPopup = ({ showPopup, setShowPopup }) => {
  return (
    <Modal
      show={showPopup}
      onHide={() => {
        setShowPopup(false);
      }}
      size="xl"
    >
      <Modal.Header closeButton />
      <EnquireForm />
    </Modal>
  );
};

export default EnquiryPopup;
