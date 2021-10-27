import React, { ReactElement } from "react";
import styles from "../styles/Home.module.css";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/gbgabo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with ♥ by gb_gabo
      </a>
    </footer>
  );
}
