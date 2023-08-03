import React from "react";
import styles from "../Styles/page.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className={styles.mainnav}>
        <ul>
          <Link href="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link href="/About">
            {" "}
            <li>About</li>
          </Link>
          <Link href="/Blog">
            {" "}
            <li>Blog</li>
          </Link>
          <Link href="/Contact">
            <li>ContactUs</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
