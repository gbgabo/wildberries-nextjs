import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "../styles/ExtendedFab.module.css";
import Button, { Props } from "./Button";

export default function ExtendedFab({
  href,
  children,
  variant = "primary",
  icon,
}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <Button href={href} icon={icon} variant={variant}>
        {children}
      </Button>
    </div>
  );
}
