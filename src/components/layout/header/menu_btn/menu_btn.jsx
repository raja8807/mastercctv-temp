import React, { useState } from "react";
import styles from "./menu_btn.module.scss";
import { List, X } from "react-bootstrap-icons";
import Link from "next/link";
import CartButton from "../cart_button/cart_button";

const MenuButton = ({ PAGES, router, scrolled }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className={`${styles.MenuButton} ${scrolled ? styles.scrolled : ""}`}>
      &nbsp; &nbsp;
      {showDrawer ? (
        <X onClick={() => setShowDrawer((prev) => !prev)} />
      ) : (
        <List onClick={() => setShowDrawer((prev) => !prev)} />
      )}
      <div className={`${styles.drawer} ${showDrawer ? styles.active : ""}`}>
        <nav className={styles.nav}>
          <ul>
            {PAGES.map((page) => {
              return (
                <li
                  key={page.title}
                  className={router.pathname === page.href ? styles.active : ""}
                >
                  <Link
                    href={page.href}
                    onClick={() => {
                      setShowDrawer(false);
                    }}
                  >
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.line} />
        </nav>
      </div>
    </div>
  );
};

export default MenuButton;
