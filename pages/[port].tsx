import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Port.module.css";
import heroStyles from "../styles/Hero.module.css";
import Image from "next/image";
import getOgImage from "../lib/getOgImage";
import { getPort, getPorts } from "../lib/ports";
import { Footer, Hero, Navbar, TextFab, Code, Slider } from "../components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const getStaticProps: GetStaticProps = async (context) => {
  const port = context.params!.port as string;
  const ogImage = await getOgImage(`thumbnail/${port}`);
  const portProps = await getPort(port);
  return {
    props: {
      ...portProps,
      ogImage,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ports = getPorts();
  const paths = ports.map((port) => {
    return {
      params: {
        port: port.port,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default function Port({
  port,
  title,
  platform,
  screenshots,
  instructions,
  assets,
  ogImage,
}: Port) {
  const slides =
    screenshots.length > 0
      ? screenshots.map((screenshot) => {
          return { url: `/ports/${port}/screenshots/${screenshot}` };
        })
      : [{ url: `/img/not-found.png` }];

  return (
    <div>
      <Navbar port={title} />
      <Head>
        <title>{title} theme - Wildberries</title>
        <link
          rel="preload"
          href="/fonts/JetBrainsMono-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <meta name="og:image" content={ogImage} />
        <meta
          property="og:description"
          content={`A dark purple theme for ${title} and many other apps`}
          key="ogdesc"
        />
      </Head>
      <Hero href="#instructions">
        <div className={heroStyles.head}>
          <h1 className={heroStyles.title}>Wildberries</h1>

          <div className={heroStyles.description}>
            An experimental dark theme for people who love purple
          </div>
        </div>
        {screenshots.length > 0 && <Slider slides={slides} />}
      </Hero>

      <div id="instructions" className={styles.instructions}>
        <div className={styles.description}>
          <img className={styles.sectionIcon} src="/icons/brush.svg" />
          <p>Installation</p>
        </div>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className={styles["instructions-content"]}
          components={{
            code({ node, inline, className, children, ...props }) {
              return inline ? (
                <code className={className}>{children}</code>
              ) : (
                <Code className={className}>{children}</Code>
              );
            },
          }}
        >
          {instructions}
        </ReactMarkdown>

        {assets &&
          assets.map((asset, index) => {
            return (
              <div key={index}>
                <p className={styles.asset}>{asset}</p>
                <a
                  className={styles.button}
                  href={`/ports/${port}/assets/${asset}`}
                >
                  <img src="/icons/file_download.svg" /> Download
                </a>
              </div>
            );
          })}
      </div>

      <TextFab href="/" icon="brush" variant="secondary">
        Check all ports
      </TextFab>

      <Footer />
    </div>
  );
}
