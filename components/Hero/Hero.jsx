import Image from "next/image";
import HeroButton from "../HeroButton";
import circle from "../../public/assets/icons/circle.svg";
import logo from "../../public/assets/icons/heroLogo.svg";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.title}>
        <h1 className={styles.heroH1}>Real Agency With Its</h1>
        <div className={styles.secondLine}>
          <h1>Super</h1>
          <div className={styles.imageContainer}>
            <Image className={styles.circle} src={circle} alt="circle" />
            <Image className={styles.heroLogo} src={logo} alt="logo" />
          </div>
          <h1>Digital</h1>
        </div>
      </div>
      <div className={styles.description}>
        <p>
          Using management to control your financial revenue and <br /> output
          might make it easier for you to launch a business in the <br />{" "}
          future.
        </p>
      </div>
      <HeroButton />
    </div>
  );
}

export default Hero;
