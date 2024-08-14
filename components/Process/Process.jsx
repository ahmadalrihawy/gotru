"use client";
import styles from "./Process.module.css";
import Image from "next/image";
import playBtn from "../../public/assets/icons/play.svg";
import blur from "../../public/assets/icons/blur.svg";
import boxSvg from "../../public/assets/icons/box.svg";
import screenSvg from "../../public/assets/icons/screen.svg";
import communicateSvg from "../../public/assets/icons/communicate.svg";
import { useEffect, useState } from "react";
import ProcessCard from "./ProcessCard";

const processSteps = [
  {
    id: 1,
    icon: boxSvg,
    titel: "Design & Development",
    description: "Bringing your project to life with clean, efficient code",
  },
  {
    id: 2,
    icon: screenSvg,
    titel: "Design & Development",
    description: "Bringing your project to life with clean, efficient code",
  },
  {
    id: 3,
    icon: communicateSvg,
    titel: "Design & Development",
    description: "Bringing your project to life with clean, efficient code",
  },
  {
    id: 4,
    icon: communicateSvg,
    titel: "Design & Development",
    description: "Bringing your project to life with clean, efficient code",
  },
  {
    id: 5,
    icon: communicateSvg,
    titel: "Design & Development",
    description: "Bringing your project to life with clean, efficient code",
  },
];

function Process() {
  const [activeCard, setActiveCard] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  function handleCardClick(cardId) {
    setActiveCard(cardId);
  }

  const lineWidth = `${(activeCard - 1) * 25}%`;
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
      <div className={styles.process}>
        <div className={styles.procTitle}>
          <h1>Transforming Ideas into Digital Solutions</h1>
          <div className={styles.procContent}>
            <p>
              Our streamlined process ensures your project is handled with care
              and precision at every stage.
            </p>
            <div className={styles.procBtn}>
              <Image src={playBtn} alt="play" />
              <span>Work</span>
            </div>
          </div>
          <div className={styles.blurEffect}>
            <Image src={blur} alt="blur effect" />
          </div>
        </div>
        <div className={styles.processLine}>
          <div className={styles.lineBar}>
            <div
              className={styles.line}
              style={isMobile ? { height: lineWidth } : { width: lineWidth }}
            ></div>
            {processSteps.map((_, index) => (
              <span key={index} className={styles.step}>
                {index + 1}
              </span>
            ))}
          </div>
          <div className={styles.processCards}>
            {processSteps.map((card) => (
              <ProcessCard
                key={card.id}
                procCardsObj={card}
                isActive={card.id === activeCard}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
