import Image from "next/image";

import image1 from "../../../public/assets/images/techImg.png";
import image2 from "../../../public/assets/images/techImg2.png";
import image3 from "../../../public/assets/images/techImg3.png";
import image4 from "../../../public/assets/images/techImg4.png";
import image5 from "../../../public/assets/images/techImg5.png";
import image6 from "../../../public/assets/images/techImg6.png";
import image7 from "../../../public/assets/images/techImg7.png";
import linkBtn from "../../../public/assets/icons/linkBtn.svg";
import styles from "./Cards.module.css";

function BackendCards() {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.heroCard}>
        <div>
          <Image src={image1} alt="image" className="hero-image" />
          <div className={styles.content}>

            <h1>Back End Development</h1>
            <p>
              Quickstart your \ development starting from nothing to complex
              programs.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.cardContainer}>
          <Image src={image2} alt="image" />
          <div className={styles.chContent}>
            <p>Buildspace</p>
            <Image src={linkBtn} alt="link" />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.cardContainer}>
          <Image src={image3} alt="image" />
          <div className={styles.chContent}>
            <p>GotTru Bytes</p>
            <Image src={linkBtn} alt="link" />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.cardContainer}>
          <Image src={image4} alt="image" />
          <div className={styles.chContent}>
            <p>Scaffold Series</p>
            <Image src={linkBtn} alt="link" />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.cardContainer}>
          <Image src={image5} alt="image" />
          <div className={styles.chContent}>
            <p>Freecodecamp</p>
            <Image src={linkBtn} alt="link" />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.cardContainer}>
          <Image src={image6} alt="image" />
          <div className={styles.chContent}>
            <p>Clouds</p>
            <Image src={linkBtn} alt="link" />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.cardContainer}>
          <Image src={image7} alt="image" />
          <div className={styles.chContent}>
            <p>Solana Bootcamp</p>
            <Image src={linkBtn} alt="link" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackendCards;
