import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { ArrowRight, Envelope, EnvelopeFill } from "react-bootstrap-icons";
import { useRouter } from "next/router";
import MenuButton from "./menu_btn/menu_btn";
import CartButton from "./cart_button/cart_button";

export const PAGES = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },

  {
    title: "Sevices",
    href: "/services",
  },

  {
    title: "Products",
    href: "/products",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];

const Header = ({ cartItems, setCartItems, setShowPopup }) => {
  const router = useRouter();

  const [hidden, setHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY <= 0);
      setHidden(currentScrollY > lastScrollY);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${styles.Header} ${hidden ? styles.hidden : ""}
    ${isAtTop ? styles.transparent : styles.scrolled}
    `}
    >
      <CustomContainer>
        <div className={styles.wrap}>
          <Link href="/">
            <Image src="/logo/logo.png" alt="logo" height={90} />
          </Link>
          <nav className={styles.lgNav}>
            <ul>
              {PAGES.map((page) => {
                return (
                  <li
                    key={page.title}
                    className={
                      router.pathname === page.href ? styles.active : ""
                    }
                  >
                    <Link href={page.href}>{page.title}</Link>
                  </li>
                );
              })}
            </ul>
            <div className={styles.line} />

            <div className={styles.cta}>
              <div
                onClick={() => {
                  setShowPopup(true);
                }}
                className={styles.box}
              >
                <EnvelopeFill />
                <ArrowRight />
              </div>

              <CartButton
                cartItems={cartItems}
                scrolled={!isAtTop}
                setCartItems={setCartItems}
              />

              <MenuButton
                PAGES={PAGES}
                router={router}
                scrolled={!isAtTop}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </div>
          </nav>
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
