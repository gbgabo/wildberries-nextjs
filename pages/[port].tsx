import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Port.module.css";
import Code from "../components/Code";
import Image from "next/image";
import { getPort, getPorts } from "../lib/ports";
import { Footer, Header } from "../components";
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
      <Header
        port={port}
        title={title}
        subtitle={`The wildberries theme port for ${title}`}
      />

      <div id="instructions" className={styles.instructions}>
        <div className={styles.description}>
          <img className={styles.sectionIcon} src="/icons/file_download.svg" />
          <p>Installation</p>
        </div>

        <ReactMarkdown
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
          {contentHtml}
        </ReactMarkdown>
      </div>

      <Footer />

      <Link href="/">
        <a className={styles.fab}>🍒</a>
      </Link>
    </div>
  );
}
