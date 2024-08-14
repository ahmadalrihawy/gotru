"use client";
import { useState, useEffect } from "react";
import styles from "./Techonlogies.module.css";
import Image from "next/image";
import btnSvg from "../../public/assets/icons/techButton.svg";
import logo from "../../public/assets/icons/logo.svg";
import Tabs from "./Tabs";
import TechCards from "./TechCards";

function Technologies() {
  const [circlePosition, setCirclePosition] = useState("0%");
  const [activeTab, setActiveTab] = useState("backend");
  const [isMobile, setIsMobile] = useState(false);

  function handleTabChange(tab) {
    const positions = {
      backend: "0%",
      frontend: "28%",
      database: "56%",
      cloud: "85%",
    };
    setCirclePosition(positions[tab]);
    setActiveTab(tab);
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 992);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <div className={styles.techCard}>
        <div className={styles.techHeader}>
          <Image src={logo} alt="Company Logo" className={styles.techLogo} />
          <div className={styles.headerContent}>
            <span className={styles.sectionHeading}>Technologies</span>
            <h1>Crafting Tailored Solutions</h1>
            <p>to Drive Your Business Forward</p>
            <div className={styles.exploreButton}>
              <Image src={btnSvg} alt="Explore Arrow" />
              <span>Explore Our Technologies</span>
            </div>
          </div>
        </div>
        <div className={styles.Technologies}>
          <div className={styles.techCardTabs}>
            <div className={styles.slider}>
              <span className={styles.line}></span>
              <span
                className={styles.circle}
                style={isMobile ? { left: circlePosition } : { top: circlePosition }}
              ></span>
            </div>
            <Tabs handleTabChange={handleTabChange} />
          </div>
          <TechCards activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
