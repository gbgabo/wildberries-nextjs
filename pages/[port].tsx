import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { getPort, getPorts } from "../lib/ports";
import { Footer } from "../components";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism, hljs } from "../styles/highlight";

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
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
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
        <span className="material-icons">file_download</span> Installation
      </p>

      <ReactMarkdown
        className={styles.center}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={prism}
                PreTag="div"
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
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
