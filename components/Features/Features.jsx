import styles from "./Features.module.css";

function Features() {
  return (
    <div className="container">
      <div className={styles.featuresCard}>
        <h1>Why Us?</h1>
        <div className={styles.Fd}>
          <p>
            come to Go-Tru, where innovation meets expertise. We are a
            passionate team of tech enthusiasts dedicated to bringing your
            digital vision to life with top-tier solutions that fit your unique
            needs
          </p>
          <button className={styles.featuresBtn}>See All</button>
        </div>
        <div className={styles.Sd}>
          <h2>Mission Statement:</h2>
          <p>
            Our mission is to transform your ideas into powerful digital
            solutions that drive success.
          </p>
        </div>
        <div className={styles.ThD}>
          <h2>Language Support:</h2>
          <p>
            Our multilingual team, including Arabic speakers, is here to assist
            you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
