import React, { ReactElement } from "react";
import styles from "../styles/Footer.module.css";

interface Props {
  variant?: "primary" | "secondary";
}

export default function Footer({ variant = "primary" }: Props): ReactElement {
  return (
    <div className={styles[variant]}>
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
