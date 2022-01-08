import React, { ReactElement, ReactNode } from "react";
import styles from "../styles/Header.module.css";
import Slider from "./Slider";

interface Props {
  title: string;
  ports: string[];
  home?: boolean;
  children: ReactNode;
}

const ports = ["vscode", "duckduckgo", "gtk"];

export default function Header({
  home,
  ports,
  title,
  children,
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

          <div className={styles.description}>{children}</div>
        </div>
        <Slider hasCaption={home} ports={ports} />
        <a className={styles.down} href={home ? "#ports" : "#instructions"}>
          <img src="/icons/expand_more.svg" />
        </a>
      </main>
    </>
  );
}
