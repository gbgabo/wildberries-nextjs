import React, { ReactElement } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

interface Props {
  port?: string;
}

export default function Navbar({ port }: Props): ReactElement {
  return (
    <div className={styles.bar}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/img/ui/wb.png" />

          <div className={styles.text}>
            <h1>Wildberries&ensp;</h1>
            {port && (
              <p>
                for <span className="highlight">{port}</span>
              </p>
            )}
          </div>
        </a>
      </Link>
    </div>
  );
}
