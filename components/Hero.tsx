import React, { ReactElement, ReactNode } from "react";
import styles from "../styles/Hero.module.css";

interface Props {
  children: ReactNode;
}

export default function Hero({ children }: Props): ReactElement {
  return <main className={styles.main}>{children}</main>;
}
