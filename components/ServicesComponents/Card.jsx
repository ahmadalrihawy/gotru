import Image from "next/image";
import styles from "./ServicesCard.module.css";
function Card({ cardsObj }) {
  return (
    <div className={styles.card}>
      <Image
        src={cardsObj.icon}
        alt={cardsObj.icon}
        className={styles.cardIcon}
      />
      <h2>{cardsObj.titel}</h2>
      <p>{cardsObj.description}</p>
      <div className={styles.cardBtn}>
        <svg
          className="btn-arrow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="12" />
          <path d="M17.8516 12.3789L13.4766 16.7539C13.3125 16.918 13.0938 17 12.875 17C12.6289 17 12.4102 16.918 12.2461 16.7539C11.8906 16.4258 11.8906 15.8516 12.2461 15.5234L15.1172 12.625H6.75C6.25781 12.625 5.875 12.2422 5.875 11.75C5.875 11.2852 6.25781 10.875 6.75 10.875H15.1172L12.2461 8.00391C11.8906 7.67578 11.8906 7.10156 12.2461 6.77344C12.5742 6.41797 13.1484 6.41797 13.4766 6.77344L17.8516 11.1484C18.207 11.4766 18.207 12.0508 17.8516 12.3789Z" />
        </svg>
        <span>Learn More</span>
      </div>
    </div>
  );
}

export default Card;
