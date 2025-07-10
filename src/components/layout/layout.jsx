import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children, cartItems, setCartItems, setShowPopup }) => {
  return (
    <div>
      <Header
        cartItems={cartItems}
        setCartItems={setCartItems}
        setShowPopup={setShowPopup}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
