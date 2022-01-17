import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "../styles/TextFab.module.css";

interface Props {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
}

export default function TextFab({
  href,
  children,
  variant = "primary",
}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <Link href={href}>
        <a className={styles[variant]}>{children}</a>
      </Link>
    </div>
  );
}
