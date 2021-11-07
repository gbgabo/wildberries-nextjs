import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import CodeSnippet from "../components/CodeSnippet";
import Image from "next/image";
import { getPort, getPorts } from "../lib/ports";
import { Footer } from "../components";
import ReactMarkdown from "react-markdown";

interface IParams extends ParsedUrlQuery {
  port: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const port = context.params as IParams;
  const portProps = await getPort(port.port);
  return {
    props: {
      ...portProps,
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

export default function Port({ port, title, platform, contentHtml }: Port) {
  return (
    <div>
      <Head>
        <title>{title} theme - Wildberries</title>
        <link
          rel="preload"
          href="/fonts/JetBrainsMono-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>
          {`The wildberries theme port for ${title}`}
        </p>

        <img
          src={`/img/screenshots/${port}.png`}
          alt={`${title} preview`}
          width="50%"
        />
      </main>

      <p className={styles.description}>
        <img className={styles.sectionIcon} src="/icons/file_download.svg" />
        Installation
      </p>

      <ReactMarkdown
        className={styles.instructions}
        components={{
          code({ node, inline, className, children, ...props }) {
            return inline ? (
              <code className={className}>{children}</code>
            ) : (
              <CodeSnippet className={className}>{children}</CodeSnippet>
            );
          },
        }}
      >
        {contentHtml}
      </ReactMarkdown>

      <Footer />

      <Link href="/">
        <a className={styles.fab}>🍒</a>
      </Link>
    </div>
  );
}
