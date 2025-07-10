import React, { useState } from "react";
import { Cart, CartCheckFill } from "react-bootstrap-icons";
import styles from "./CartButton.module.scss";
import { Offcanvas } from "react-bootstrap";
import { getFile } from "@/components/screens/products/products";

const CartItem = ({ item, onAdd = () => {}, onReduce = () => {} }) => {

  console.log(getFile(item));
  

  return (
    <div className={styles.CartItem}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url("/images/products//camera/normal/2mp_bullet.png")`,
          // backgroundImage: 'url("/images/banner.webp")',
        }}
      />
      <div>
        <strong>{item.name}</strong> - ₹{item.price}
      </div>
      <div className={styles.controls}>
        <button onClick={() => onReduce(item)} className={styles.btn}>
          −
        </button>
        <span className={styles.count}>{item.count}</span>
        <button onClick={() => onAdd(item)} className={styles.btn}>
          +
        </button>
      </div>
    </div>
  );
};

const CartButton = ({ cartItems = [], scrolled }) => {
  const [showDrawer, setShowDrawer] = useState(false);
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
        <div className={styles.cartItems}>
          {cartItems?.map((item) => {
            return <CartItem key={item.name} item={item} />;
          })}
        </div>
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
