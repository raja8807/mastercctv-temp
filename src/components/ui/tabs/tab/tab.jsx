import React from "react";
import styles from "./tab.module.scss";

const Tab = ({
  tab,
  isActive,
  setCurrentTab,
  onTabChange,
  index,
  goBottom,
  setCurrentTabIndex,
}) => {
  return (
    <div
      className={`${styles.tab} ${isActive ? styles.active : ""} ${
        goBottom ? styles.bottom : ""
      }`}
      onClick={() => {
        if (setCurrentTabIndex) {
          setCurrentTabIndex(index);
        } else {
          setCurrentTab(tab);
        }
        onTabChange(tab, index);
      }}
    >
      <p>
        {tab.icon && <small>{tab.icon}</small>}
        {tab.title}
      </p>
    </div>
  );
};

export default Tab;
