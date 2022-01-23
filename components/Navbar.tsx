import React, { ReactElement } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  return (
    <div className={styles.bar}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/img/ui/wb.png" />
          <h1>Wildberries</h1>
        </a>
      </Link>
    </div>
  );
}
