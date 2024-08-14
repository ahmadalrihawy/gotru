"use client";

import Image from "next/image";
import styles from "./ProcessCard.module.css";
function ProcessCard({ procCardsObj, onClick, isActive }) {
  return (
    <div
      onClick={onClick}
      className={`${styles.procCard} ${isActive ? styles.active : ""}`}
    >
      <Image src={procCardsObj.icon} alt={procCardsObj.title} />
      <h1>{procCardsObj.titel}</h1>
      <p>{procCardsObj.description}</p>
    </div>
  );
}

export default ProcessCard;
