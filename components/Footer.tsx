import React, { ReactElement } from "react";
import styles from "../styles/Footer.module.css";

export default function Footer(): ReactElement {
  return (
    <div className={styles.background}>
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
    </div>
  );
}
