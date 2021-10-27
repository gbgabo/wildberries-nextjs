import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getPorts } from "../lib/ports";
import { Footer } from "../components";

export const getStaticProps: GetStaticProps = async () => {
  const portsData = getPorts();

  return {
    props: {
      portsData,
    },
  };
};

export default function Home({
  portsData,
}: {
  portsData: {
    port: string;
    title: string;
  }[];
}) {
  return (
    <div>
      <Head>
        <title>Wildberries - Dark theme for purple lovers</title>
        <meta name="description" content="Wildberries theme" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <img
          src="/img/ui/wb.png"
          style={{
            borderRadius: "2rem",
            border: "3px solid #00ffb7",
            marginBottom: "40px",
            width: "12rem",
          }}
        />
        <h1 className={styles.title}>Wildberries</h1>

        <p className={styles.description}>
          A dark color theme for people who love purple
        </p>
      </main>

      <div className={styles.grid}>
        {portsData.map((port) => {
          return (
            <a key={port.port} href={port.port} className={styles.card}>
              <h2>{port.title}</h2>
            </a>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
