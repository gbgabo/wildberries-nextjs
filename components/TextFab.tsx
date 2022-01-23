import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "../styles/TextFab.module.css";

interface Props {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
  icon?: string;
}

export default function TextFab({
  href,
  children,
  variant = "primary",
  icon,
}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <Link href={href}>
        <a className={styles[variant]}>
          {icon && <img src={`/icons/${icon}.svg`} />}
          {children}
        </a>
      </Link>
    </div>
  );
}
