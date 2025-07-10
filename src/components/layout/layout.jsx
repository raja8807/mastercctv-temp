import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children, cartItems }) => {
  return (
    <div>
      <Header cartItems={cartItems} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
