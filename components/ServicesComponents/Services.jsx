import styles from "./Services.module.css";
import Card from "./Card";
import Image from "next/image";
import webSvg from "../../public/assets/icons/webDevelopment.svg";
import reactSvg from "../../public/assets/icons/react.svg";
import techSvg from "../../public/assets/icons/tech.svg";
import appSvg from "../../public/assets/icons/app.svg";
const Cards = [
  {
    id: 1,
    icon: webSvg,
    titel: "Web Development",
    description: "Harness the power of our experienced team to transform",
  },
  {
    id: 2,
    icon: reactSvg,
    titel: "System Development",
    description:
      "Count on us to deliver high-quality solutions on time and within budget.",
  },
  {
    id: 3,
    icon: techSvg,
    titel: "Tech Consulting",
    description: "Harness the power of our experienced team to transform.",
  },
  {
    id: 4,
    icon: appSvg,
    titel: "App Development",
    description:
      "Count on us to deliver high-quality solutions on time and within budget.",
  },
  {
    id: 5,
    icon: webSvg,
    titel: "Web Development",
    description: "Harness the power of our experienced team to transform",
  },
  {
    id: 6,
    icon: reactSvg,
    titel: "System Development",
    description:
      "Count on us to deliver high-quality solutions on time and within budget.",
  },
];

function Services() {
  return (
    <div className="container">
      <div className={styles.Services}>
        <div className={styles.ServicesHeader}>
          <p>OUR SERVICES</p>
          <h1>Unlock Your Business's Full Potential with Us</h1>
        </div>
        <div className={styles.Cards}>
          {Cards.map((card) => (
            <Card cardsObj={card} key={card.id} />
          ))}
        </div>
        <div className={styles.ServicesBtn}>
          <Image
            src="/assets/icons/button.svg"
            alt="button"
            width={24}
            height={24}
          />
          <span>VIEW ALL</span>
        </div>
      </div>
    </div>
  );
}

export default Services;
