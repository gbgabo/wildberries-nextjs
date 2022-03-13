import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import styles from "../../styles/Thumbnail.module.css";
import Image from "next/image";
import { getPort, getPorts } from "../../lib/ports";

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

export default function Port({
  port,
  title,
  platform,
  includeFile,
  contentHtml,
}: Port) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.head}>
          <img className={styles.icon} src="/img/ui/wb.png" alt="Wildberries" />
          <h1 className={styles.title}>Wildberries</h1>
          <p className={styles.description}>
            {`theme for `}
            <span className="highlight">{title}</span>
          </p>
        </div>
        <img src={`/img/screenshots/${port}.png`} />
      </main>
    </>
  );
}
