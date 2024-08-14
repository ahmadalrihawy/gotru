"use client";

import styles from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";
import burgerMenu from "../../public/assets/icons/burgerMenu.svg";
import { useState } from "react";
import MobileLinks from "./MobileLinks";

function Nav() {
  const [menu, setMenu] = useState(true);

  function handleDisplayMenu() {
    setMenu((e) => !e);
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/icons/heroLogo.svg"
            width={50}
            height={50}
            alt="Logo"
            className={styles.logoImg}
          />
          <p>GoTru</p>
        </Link>
        <div className={styles.links}>
          <NavLink into="Service" />
          <NavLink into="Technolgies" />
          <NavLink into="Process" />
          <NavLink into="Contact" />
        </div>
        <Image
          src={burgerMenu}
          alt="menu"
          className={styles.menu}
          onClick={handleDisplayMenu}
        />
      </div>
      <div className={menu === false ? styles.mobileLinks : styles.hidden}>
        <div className={styles.moblinks}>
          <MobileLinks />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
