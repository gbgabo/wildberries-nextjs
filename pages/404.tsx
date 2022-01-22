import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "../styles/FourOhFour.module.css";

export default function FourOhFour(): ReactElement {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Nothing fruitful to find here</h2>
      <div className={styles.options}>
        <Link href="/">
          <a>
            Available ports <img src="/icons/brush.svg" />
          </a>
        </Link>
        <Link href="/about">
          <a>
            About Wildberries
            <img src="/icons/pallete.svg" />
          </a>
        </Link>
      </div>
    </div>
  );
}
