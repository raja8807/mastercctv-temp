import { PRODUCT_CATEGORES } from "@/constants/products";
import React from "react";
import styles from "./filter_box.module.scss";

const FilterBox = ({
  setCurrentCategory,
  currentCategory,
  setShowDrawer = () => {},
}) => {
  return (
    <div className={styles.FilterBox}>
      <h4>Categories</h4>
      <div>
        <p
          onClick={() => {
            setCurrentCategory("All Products");
            setShowDrawer(false);
          }}
          className={currentCategory === "All Products" ? styles.active : ""}
        >
          All Products
        </p>
        {PRODUCT_CATEGORES.map((cat) => (
          <p
            key={cat.key}
            onClick={() => {
              setCurrentCategory(cat);
              setShowDrawer(false);
            }}
            className={currentCategory.key === cat.key ? styles.active : ""}
          >
            {cat.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
