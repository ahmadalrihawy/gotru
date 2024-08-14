"use client";
import Image from "next/image";
import style from "./HeroBtn.module.css";
function HeroButton() {
  return (
    <button className={style.heroBtn}>
      CONTACT US
      <Image
        width={24.21}
        height={24.21}
        src="/assets/icons/arrow.svg"
        alt="arrow"
        className="arrow"
      />
    </button>
  );
}

export default HeroButton;
