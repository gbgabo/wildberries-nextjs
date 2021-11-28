import React, { ReactElement } from "react";
import styles from "../styles/Header.module.css";

interface Props {
  title: string;
  subtitle: string;
  port?: string;
  home?: boolean;
}

export default function Header({
  home,
  port,
  title,
  subtitle,
}: Props): ReactElement {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.head}>
          {home && (
            <img
              className={styles.icon}
              src="/img/ui/wb.png"
              alt="Wildberries"
            />
          )}
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.description}>{subtitle}</p>
        </div>
        <div className={styles.preview}>
          <img
            className={styles.slider}
            src={`/img/screenshots/${home ? "vscode" : port}.png`}
          />
        </div>
      </main>
    </>
  );
}
