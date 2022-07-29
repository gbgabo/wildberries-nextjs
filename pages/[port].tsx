import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Port.module.css";
import Code from "../components/Code";
import Image from "next/image";
import getOgImage from "../lib/getOgImage";
import { getPort, getPorts } from "../lib/ports";
import { Footer, Header, Navbar, TextFab } from "../components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IParams extends ParsedUrlQuery {
  port: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const port = context.params as IParams;
  const ogImage = await getOgImage(`thumbnail/${port.port}`);
  const portProps = await getPort(port.port);
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
  instructions,
  assets,
  ogImage,
}: Port) {
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
      <Header ports={[port]} title="Wildberries">
        <>
          {`A dark purple theme for `}
          <span className="highlight">{title}</span>
          {` and many other apps`}
        </>
      </Header>

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
                <a className={styles.button} href={`/ports/${port}/${asset}`}>
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
