import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

import styles from "../styles/Home.module.scss";
import fonts from "@/styles/fonts";
import { ToastContainer } from "react-toastify";
import Layout from "@/components/layout/layout";
import EnquiryPopup from "@/components/enquiry_popup/enquiry_popup";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
    });
  }, []);

  useEffect(() => {
    Router.events.on("routeChangeStart", (...params) => {
      NProgress.start(params);
    });
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);
    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
    };
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isPopupShown = localStorage.getItem("isPopupShown");

    if (!isPopupShown) {
      setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("isPopupShown", true)
      }, 5000);
    }
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);

      if (existingItem) {
        // Item exists: increase count
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, count: i.count + 1 } : i
        );
      } else {
        // Item doesn't exist: add with count 1
        return [...prevItems, { ...item, count: 1 }];
      }
    });
  };

  return (
    <main className={`${styles.main} ${fonts.MainFont}`}>
      <EnquiryPopup setShowPopup={setShowPopup} showPopup={showPopup} />
      <Layout
        cartItems={cartItems}
        addToCart={addToCart}
        setCartItems={setCartItems}
        setShowPopup={setShowPopup}
      >
        <Component {...pageProps} addToCart={addToCart} cartItems={cartItems} />
        <ToastContainer position="bottom-right" />
      </Layout>
    </main>
  );
}
