import React, { ReactElement } from "react";
import styles from "../styles/Header.module.css";
import Slider from "./Slider";

interface Props {
  title: string;
  subtitle: string;
  ports: string[];
  home?: boolean;
}

const ports = ["vscode", "duckduckgo", "gtk"];

export default function Header({
  home,
  ports,
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
        <div>
          {home && <h3>A purple theme for</h3>}
          <Slider ports={ports} />
        </div>
        <a className={styles.down} href={home ? "#ports" : "#instructions"}>
          <img src="/icons/expand_more.svg" />
        </a>
      </main>
    </>
  );
}
