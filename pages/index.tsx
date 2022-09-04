import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import headerStyles from "../styles/Header.module.css";
import { getPorts } from "../lib/ports";
import getOgImage from "../lib/getOgImage";
import { Footer, Header, Navbar, TextFab, Slider } from "../components";

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

      <Header href="#ports">
        <div className={headerStyles.head}>
          <img
            className={headerStyles.icon}
            src="/img/ui/wb.png"
            alt="Wildberries"
          />
          <h1 className={headerStyles.title}>Wildberries</h1>

          <div className={headerStyles.description}>
            An experimental dark theme for people who love purple
          </div>
        </div>
        <Slider
          slides={[
            {
              url: "/img/screenshots/vscode.png",
              caption: (
                <p>
                  {`A purple theme for `}
                  <span className="highlight">vscode</span>
                </p>
              ),
            },
            {
              url: "/img/screenshots/duckduckgo.png",
              caption: (
                <p>
                  {`A purple theme for `}
                  <span className="highlight">duckduckgo</span>
                </p>
              ),
            },
            {
              url: "/img/screenshots/gtk.png",
              caption: (
                <p>
                  {`A purple theme for `}
                  <span className="highlight">gtk</span>
                </p>
              ),
            },
          ]}
        />
      </Header>

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
