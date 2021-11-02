import React, { ReactElement } from "react";
import styles from "../styles/Home.module.css";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className={styles.footer}>
      <p>
        Made with ♥ by{" "}
        <a href="https://github.com/gbgabo" rel="noreferrer" target="_blank">
          @gbgabo
        </a>
      </p>

      <p>
        View the project on{" "}
        <a
          href="https://github.com/gbgabo/wildberries"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
      </p>
    </footer>
  );
}
