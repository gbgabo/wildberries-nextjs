import React, { ReactElement, ReactNode } from "react";
import styles from "../styles/Hero.module.css";

interface Props {
  href: string;
  children: ReactNode;
}

const ports = ["vscode", "duckduckgo", "gtk"];

export default function Hero({ href, children }: Props): ReactElement {
  return (
    <>
      <main className={styles.main}>
        {children}
        <a className={styles.down} href={href}>
          <img src="/icons/expand_more.svg" />
        </a>
      </main>
    </>
  );
}
