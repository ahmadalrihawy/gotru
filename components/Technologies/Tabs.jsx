import React, { useState } from "react";
import styles from "./TechnologiesTab.module.css";
function Tabs({ handleTabChange }) {
  const [activeTab, setActiveTab] = useState("backend");

  const tabs = [
    { name: "Backend", key: "backend" },
    { name: "Frontend", key: "frontend" },
    { name: "Database", key: "database" },
    { name: "Cloud", key: "cloud" },
  ];

  const handleClick = (tabKey) => {
    setActiveTab(tabKey);
    handleTabChange(tabKey);
  };

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <span
          key={tab.key}
          onClick={() => handleClick(tab.key)}
          className={activeTab === tab.key ? styles.active : ""}
        >
          {tab.name}
        </span>
      ))}
    </div>
  );
}

export default Tabs;
