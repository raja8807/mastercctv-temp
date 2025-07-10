import React, { useState } from "react";
import { ArrowRight, Cart, CartCheckFill } from "react-bootstrap-icons";
import styles from "./CartButton.module.scss";
import { Offcanvas } from "react-bootstrap";
import { getFile } from "@/components/screens/products/products";
import CustomButton from "@/components/ui/custom_button/custom_button";

const CartItem = ({ item, setCartItems = () => {} }) => {
  const onAdd = (item) => {
    setCartItems((prev) =>
      prev.map((i) => (i.name === item.name ? { ...i, count: i.count + 1 } : i))
    );
  };

  const onReduce = (item) => {
    setCartItems(
      (prev) =>
        prev
          .map((i) => (i.name === item.name ? { ...i, count: i.count - 1 } : i))
          .filter((i) => i.count > 0) // remove item if count is 0
    );
  };

  const total = item.price * item.count;

  return (
    <div className={styles.CartItem}>
      <div className={styles.det}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url("${getFile(item)}")`,
            // backgroundImage: 'url("/images/banner.webp")',
          }}
        />

        <div>
          <strong>{item.name}</strong>
          <br />₹{item.price}
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={() => onReduce(item)} className={styles.btn}>
          <p>− </p>
        </button>
        <span className={styles.count}>{item.count}</span>
        <button onClick={() => onAdd(item)} className={styles.btn}>
          <p>+ </p>
        </button>
        <p> ₹{total}</p>
      </div>
    </div>
  );
};

const CartButton = ({ cartItems = [], scrolled, setCartItems }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const overAllTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <>
      <Offcanvas
        show={showDrawer}
        placement="end"
        onHide={() => {
          setShowDrawer(false);
        }}
      >
        <Offcanvas.Header closeButton>
          <h4>Cart</h4>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.body}>
          {cartItems.length > 0 && (
            <div className={styles.cartItems}>
              {cartItems?.map((item) => {
                return (
                  <CartItem
                    key={item.name}
                    item={item}
                    setCartItems={setCartItems}
                  />
                );
              })}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className={styles.Checkout}>
              <CustomButton variant={3}>
                Checkout <ArrowRight /> ₹{overAllTotal}
              </CustomButton>
            </div>
          )}

        { cartItems.length === 0 && <div className={styles.empty}>
            Cart is empty
            <CustomButton
            href={'/products'}
            variant={3}
            onClick={()=>{
              setShowDrawer(false)
            }}
            >Broswe Products</CustomButton>
          </div>}
        </Offcanvas.Body>
      </Offcanvas>
      <div
        className={`${styles.CartButton} ${scrolled ? styles.scrolled : ""}`}
        onClick={() => {
          setShowDrawer(true);
        }}
      >
        <CartCheckFill />
        {cartItems?.length > 0 && (
          <div className={styles.bubble}>{cartItems?.length}</div>
        )}
      </div>
    </>
  );
};

export default CartButton;
