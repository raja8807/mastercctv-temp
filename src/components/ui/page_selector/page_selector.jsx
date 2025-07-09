import React from "react";
import styles from "./page_selector.module.scss";

const PageSelector = ({
  totalPages = 4,
  currentPage = 1,
  onPageChange = () => {},
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className={styles.PageSelector}>
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${page === currentPage ? styles.active : ""}`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default PageSelector;
