import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import heroStyles from "../styles/Hero.module.css";
import { getPorts } from "../lib/ports";
import getOgImage from "../lib/getOgImage";
import { Footer, Hero, Navbar, TextFab, Slider, Button } from "../components";

interface Props {
  portsData: {
    port: string;
    title: string;
  }[];
  ogImage: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const ogImage = await getOgImage(`thumbnail`);
  const portsData = getPorts();
  return {
    props: {
      portsData,
      ogImage,
    },
  };
};

export default function Home({ portsData, ogImage }: Props) {
  return (
    <div>
      <Navbar />
      <Head>
        <meta name="og:image" content={ogImage} />

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
          href="/fonts/JetBrainsMono-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero href="#ports">
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
        <Slider
          slides={[
            {
              url: "/ports/vscode/screenshots/vscode.png",
              caption: (
                <p>
                  {`A purple theme for `}
                  <span className="highlight">vscode</span>
                </p>
              ),
            },
            {
              url: "/ports/duckduckgo/screenshots/duckduckgo.png",
              caption: (
                <p>
                  {`A purple theme for `}
                  <span className="highlight">duckduckgo</span>
                </p>
              ),
            },
            {
              url: "/ports/gtk/screenshots/gtk.png",
              caption: (
                <p>
                  {`A purple theme for `}
                  <span className="highlight">gtk</span>
                </p>
              ),
            },
          ]}
        />
      </Hero>

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
      <TextFab href="/about" variant="secondary" icon="pallete">
        About Wildberries
      </TextFab>
      <Footer />
    </div>
  );
}
