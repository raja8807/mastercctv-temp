import React from "react";
import Tab from "./tab/tab";
import styles from "./tabs.module.scss";

const CustomTabs = ({
  tabs = [],
  currentTab,
  setCurrentTab = () => {},
  onTabChange = () => {},
  currentTabIndex,
  setCurrentTabIndex,
  stayTop,
}) => {
  return (
    <div className={`${styles.tabs} ${!stayTop ? styles.goBottom : ""}`}>
      {tabs.map((tab, index) => {
        return (
          <Tab
            key={tab.title}
            tab={tab}
            setCurrentTab={setCurrentTab}
            index={index}
            isActive={
              currentTab?.title === tab?.title || currentTabIndex === index
            }
            setCurrentTabIndex={setCurrentTabIndex}
            onTabChange={onTabChange}
            goBottom={!stayTop}
          />
        );
      })}
    </div>
  );
};

export default CustomTabs;
