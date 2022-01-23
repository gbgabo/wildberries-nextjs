import React, { ReactElement } from "react";
import styles from "../styles/Navbar.module.css";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <img src="/img/ui/wb.png" />
      <h1>Wildberries</h1>
    </div>
  );
}
