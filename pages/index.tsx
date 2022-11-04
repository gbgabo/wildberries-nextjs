import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import heroStyles from "../styles/Hero.module.css";
import { getPorts } from "../lib/ports";
import {
  Footer,
  Hero,
  Navbar,
  ExtendedFab,
  Slider,
  Button,
} from "../components";

interface Props {
  portsData: {
    port: string;
    title: string;
  }[];
}

export const getStaticProps: GetStaticProps = async () => {
  const portsData = getPorts();
  return {
    props: {
      portsData,
    },
  };
};

const slides = [
  {
    element: (
      <img alt="vscode screenshot" src="/ports/vscode/screenshots/vscode.png" />
    ),
  },
  {
    element: (
      <img
        alt="duckduckgo screenshot"
        src="/ports/duckduckgo/screenshots/duckduckgo.png"
      />
    ),
  },
  {
    element: <img alt="gtk screenshot" src="/ports/gtk/screenshots/gtk.png" />,
  },
];

export default function Home({ portsData }: Props) {
  return (
    <>
      <Navbar />
      <Head>
        <meta name="og:image" content="https://wildberries.style/api/og" />

        <title>Wildberries - A dark theme for purple lovers</title>
        <meta property="og:title" content="Wildberries" key="ogtitle" />

        <meta name="description" content="A dark theme for purple lovers" />
        <meta
          property="og:description"
          content="A dark theme for purple lovers"
          key="ogdesc"
        />
        <link
          rel="preload"
          href="/fonts/JetBrainsMono-VariableFont_wght.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <div className={heroStyles.head}>
          <div className={heroStyles.brand}>
            <img
              className={heroStyles.icon}
              src="/img/ui/wb_logo.svg"
              alt="Wildberries"
            />
            <h1 className={heroStyles.title}>Wildberries</h1>
          </div>

          <div className={heroStyles.description}>
            An experimental dark theme for people who love purple
          </div>

          <Button href="#ports" icon="brush">
            Install Wildberries
          </Button>
        </div>
        <Slider slides={slides} />
      </Hero>

      <section id="ports" className={styles.ports}>
        <h2>Check all apps wilberries is available for:</h2>
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
      <ExtendedFab href="/about" variant="secondary" icon="pallete">
        About Wildberries
      </ExtendedFab>
      <Footer />
    </>
  );
}
