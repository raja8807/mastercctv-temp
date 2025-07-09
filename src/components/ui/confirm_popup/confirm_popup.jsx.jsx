import { Modal } from "react-bootstrap";
import styles from "./confirm_popup.jsx.module.scss";
import CustomButton from "../custom_button/custom_button";
import { toast } from "react-toastify";

const ConfirmPopup = ({
  show,
  setShow,
  onConfirm = async () => {},
  isLoading,
  message = "Are you sure?",
}) => {
  return (
    <Modal
      show={show}
      onHide={
        isLoading
          ? () => {}
          : () => {
              setShow(false);
            }
      }
      centered
      className={styles.ConfirmPopup}
    >
      <div className={styles.body}>
        <div className={styles.msg}>{message}</div>
        <div className={styles.btns}>
          <CustomButton
            onClick={async (e) => {
              try {
                const res = await onConfirm(e);

                toast("Success");
                setShow(false);
              } catch (error) {
                console.log(error);
                toast("Something went wrong", {
                  type: "error",
                });
                // setShow(falds)
              }
            }}
            disabled={isLoading}
          >
            Ok
          </CustomButton>
          &nbsp; &nbsp;
          <CustomButton
            onClick={() => {
              setShow(false);
            }}
            variant={2}
            disabled={isLoading}
          >
            Cancel
          </CustomButton>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmPopup;
