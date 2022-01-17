import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "../styles/TextFab.module.css";

interface Props {
  href: string;
  children: string;
}

export default function TextFab({ href, children }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <Link href={href}>
        <a className={styles.fab}>{children}</a>
      </Link>
    </div>
  );
}
