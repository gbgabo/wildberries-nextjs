import React, { ReactElement } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/FourOhFour.module.css";

export default function FourOhFour(): ReactElement {
  return (
    <>
      <Head>
        <title>404: Nothing fruitful here!</title>
        <meta property="og:title" content="404" key="ogtitle" />

        <meta name="description" content="Nothing fruitful here!" />
        <meta
          property="og:description"
          content="Nothing fruitful here!"
          key="ogdesc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1>404</h1>
          <h2>Nothing fruitful to find here</h2>
          <div className={styles.options}>
            <Link href="/">
              <a>
                Available ports <img src="/icons/brush.svg" />
              </a>
            </Link>
            <Link href="/about">
              <a>
                About Wildberries
                <img src="/icons/pallete.svg" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
