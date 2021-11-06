import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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
        <link
          rel="preload"
          href="/fonts/JetBrainsMono-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/img/ui/wb.png" className={styles.icon} />
        <h1 className={styles.title}>Wildberries</h1>

        <p className={styles.description}>
          A dark color theme for people who love purple
        </p>
      </main>

      <div className={styles.grid}>
        {portsData.map((port) => {
          return (
            <Link href={`/${port.port}`} key={port.port}>
              <a className={styles.card}>
                <h2>{port.title}</h2>
              </a>
            </Link>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
