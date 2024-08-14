import Image from "next/image";
import styles from "./Footer.module.css";
import instagramIcon from "../../public/assets/icons/instagramIcon.svg";
import facebookIcon from "../../public/assets/icons/facbookIcon.svg";
import youtubeIcon from "../../public/assets/icons/youtubeIcon.svg";
import XIcon from "../../public/assets/icons/Xicon.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerTitle}>
          <div className={styles.title}>
            <h1>
              Let's Works Together Let’s
              <span>Creative</span>
            </h1>
          </div>
          <button className={styles.footerBtn}>start a project</button>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinksContainer}>
            <div className={styles.footerPa}>
              <span>GoTru</span>
              <p>
                Lorem ipsum dolor sit amet consectetur. Fringilla pellentesque
              </p>
              <div className={styles.socialLink}>
                <Image src={instagramIcon} alt="instagram" />
                <Image src={facebookIcon} alt="facebook" />
                <Image src={youtubeIcon} alt="youtube" />
                <Image src={XIcon} alt="X" />
              </div>
            </div>
            <div className={styles.footerLi}>
              <p>Services</p>
              <span>Clasic Menicure</span>
              <span>Clasic Pedicure</span>
              <span>Silk Wrap</span>
              <span>Freehand Nail</span>
            </div>
            <div className={styles.footerLi}>
              <p>Pages</p>
              <span>Home</span>
              <span>About Us</span>
              <span>Services</span>
              <span>Projects</span>
            </div>
            <div className={styles.footerLi}>
              <p>Contact Us</p>
              <span>+1 4133 1561</span>
              <span>893 Brown Well,Swiss</span>
              <span>info@gotru.com</span>
            </div>
            <div className={styles.footerLi}>
              <p>Helpful Links</p>
              <span>Term of Use</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>copyright 2024 @Go-Tru All Right Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
