import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getPorts } from "../lib/ports";
import { Footer, Header } from "../components";

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

      <Header
        home
        title="Wildberries"
        subtitle="A dark color theme for people who love purple"
      />

      <section id="ports" className={styles.ports}>
        <h2 style={{ padding: "2rem" }}>
          Check all apps wilberries is available for:
        </h2>
        <div className={styles.grid}>
          {portsData.map((port) => {
            return (
              <Link href={`/${port.port}`} key={port.port}>
                <a className={styles.card}>
                  <b>{port.title}</b>
                </a>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
