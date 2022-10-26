import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "../styles/Button.module.css";

export type Props = {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
  icon?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
}: Props): ReactElement {
  return (
    <Link href={href}>
      <a className={styles[variant]}>
        {icon && <img alt={icon} src={`/icons/${icon}.svg`} />}
        {children}
      </a>
    </Link>
  );
}
