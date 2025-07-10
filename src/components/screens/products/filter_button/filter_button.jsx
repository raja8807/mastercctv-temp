import React, { useState } from "react";
import { Filter } from "react-bootstrap-icons";
import styles from "./filter_button.module.scss";
import { Offcanvas } from "react-bootstrap";
import FilterBox from "../filter_box/filter_box";

const FilterButton = ({ setCurrentCategory, currentCategory }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Offcanvas show={showDrawer} onHide={() => setShowDrawer(false)}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <div className={styles.drawer}>
          <FilterBox
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            setShowDrawer={setShowDrawer}
          />
        </div>
      </Offcanvas>
      <div className={styles.FilterButton} onClick={() => setShowDrawer(true)}>
        <Filter />
      </div>
    </>
  );
};

export default FilterButton;
