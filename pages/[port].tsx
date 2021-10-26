import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { getPort, getPorts } from "../lib/ports";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const portProps = await getPort(params.port);
  return {
    props: {
      portProps,
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
  portProps,
}: {
  portProps: {
    por: string;
    title: string;
    platform: Array<"all" | "mac" | "windows" | "linux">;
    contentHtml: string;
  };
}) {
  return (
    <div>
      <Head>
        <title>{portProps.title} theme - Wildberries</title>
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
        <h1 className={styles.title}>{portProps.title}</h1>
        <p className={styles.description}>
          {`The wildberries theme port for ${portProps.title}`}
        </p>

        <img
          src={`/img/screenshots/${portProps.port}.png`}
          alt={`${portProps.title} preview`}
          width="70%"
        />
      </main>

      <p className={styles.description}>
        <span className="material-icons">file_download</span> Installation
      </p>

      <div
        className={styles.center}
        dangerouslySetInnerHTML={{ __html: portProps.contentHtml }}
      />

      <Link href="/">
        <a className={styles.fab}>🍒</a>
      </Link>
    </div>
  );
}
