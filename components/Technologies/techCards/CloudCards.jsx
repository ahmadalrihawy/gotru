import Image from "next/image";
import linkBtn from "../../../public/assets/icons/linkBtn.svg";
import styles from "./Cards.module.css";
function DatabaseCards() {
  const cards = Array(3).fill("Placeholder");

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.heroCard}>
        <div className={styles.content}>
          <h1>Cloud management</h1>
          <p>
            Quickstart your development starting from nothing to complex
            programs.
          </p>
        </div>
      </div>
      {cards.map((text, index) => (
        <div className={styles.cardContainer} key={index}>
          <div className={styles.chContent}>
            <p>{text}</p>
            <Image src={linkBtn} alt="Link" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DatabaseCards;
