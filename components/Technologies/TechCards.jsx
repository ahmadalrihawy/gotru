"use client";
import styles from "./Techonlogies.module.css";

import { useState, useEffect } from "react";
import BackendCards from "./techCards/BackendCards";
import CloudCards from "./techCards/CloudCards";
import DatabaseCards from "./techCards/DatabaseCards";
import FrontendCards from "./techCards/FrontendCards";

function TechCards({ activeTab }) {
  const [currentTab, setCurrentTab] = useState(activeTab);
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    setFade("fade-out");
    const timeout = setTimeout(() => {
      setCurrentTab(activeTab);
      setFade("fade-in");
    }, 300);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  const renderActiveCards = () => {
    switch (currentTab) {
      case "backend":
        return <BackendCards />;
      case "frontend":
        return <FrontendCards />;
      case "database":
        return <DatabaseCards />;
      case "cloud":
        return <CloudCards />;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.techCards} ${fade}`}>{renderActiveCards()}</div>
  );
}

export default TechCards;
