import React, { ReactElement, ReactNode } from "react";
import styles from "../styles/Hero.module.css";

interface Props {
  href: string;
  children: ReactNode;
}

export default function Hero({ href, children }: Props): ReactElement {
  return <main className={styles.main}>{children}</main>;
}