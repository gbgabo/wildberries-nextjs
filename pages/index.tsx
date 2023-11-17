import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { getPorts } from '../lib/ports';
import { Footer, Hero, Navbar, ExtendedFab, Slider, Button } from '../components';

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
    element: <img alt="vscode screenshot" src="/ports/vscode/screenshots/vscode.png" />,
  },
  {
    element: <img alt="duckduckgo screenshot" src="/ports/duckduckgo/screenshots/duckduckgo.png" />,
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
        <meta property="og:description" content="A dark theme for purple lovers" key="ogdesc" />
        <link rel="preload" href="/fonts/JetBrainsMono-VariableFont_wght.ttf" as="font" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <div
          className="flex h-[80vh] w-screen min-w-0 flex-col items-center justify-center 
                      md:h-[85vh] md:w-[44%] md:min-w-[500px] md:items-start"
        >
          <div className="flex w-full flex-wrap items-center justify-center gap-6 md:justify-start">
            <img className="h-44 w-44 md:h-36 md:w-36" src="/img/ui/wb_logo.svg" alt="Wildberries" />
            <h1 className="m-0 text-4xl font-semibold md:text-5xl">Wildberries</h1>
          </div>

          <div className="mx-0 my-8 inline max-w-[75%] text-xl text-light-purple md:text-2xl">
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
