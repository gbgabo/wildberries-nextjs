import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Port.module.css";
import heroStyles from "../styles/Hero.module.css";
import Image from "next/image";
// import getOgImage from "../lib/getOgImage";
import { getPort, getPorts } from "../lib/ports";
import {
  Footer,
  Hero,
  Navbar,
  ExtendedFab,
  Code,
  Slider,
  Button,
} from "../components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const getStaticProps: GetStaticProps = async (context) => {
  const port = context.params!.port as string;
  // const ogImage = await getOgImage(`thumbnail/${port}`);
  const portProps = await getPort(port);
  return {
    props: {
      ...portProps,
      // ogImage,
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
    screenshots &&
    screenshots.map((screenshot) => {
      return {
        element: (
          <img
            alt={`${port} screenshot`}
            src={`/ports/${port}/screenshots/${screenshot}`}
          />
        ),
      };
    });

  return (
    <>
      <Navbar port={title} />
      <Head>
        <meta
          name="og:image"
          content={`/api/og?port=${port}${
            screenshots ? `&image=${screenshots[0]}` : null
          }`}
        />

        <title>{title} theme - Wildberries</title>
        <meta property="og:title" content="Wildberries" key="ogtitle" />

        <meta
          name="description"
          content={`A dark purple theme for ${title} and many other apps`}
        />
        <meta
          property="og:description"
          content={`A dark purple theme for ${title} and many other apps`}
          key="ogdesc"
        />

        <link
          rel="preload"
          href="/fonts/JetBrainsMono-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Hero>
        <div className={heroStyles.head}>
          <h1 className={heroStyles.title}>Wildberries</h1>

          <div className={heroStyles.description}>
            <>
              {`A dark purple theme for `}
              <span className="highlight">{title}</span>
              {` and many other apps`}
            </>
          </div>
          <Button href="#instructions" icon="brush">
            Apply Theme
          </Button>
        </div>
        {slides && <Slider slides={slides} />}
      </Hero>

      <div id="instructions" className={styles.instructions}>
        <div className={styles.description}>
          <img
            alt="brush icon"
            className={styles.sectionIcon}
            src="/icons/brush.svg"
          />
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
                  <img alt="download icon" src="/icons/file_download.svg" />{" "}
                  Download
                </a>
              </div>
            );
          })}
      </div>

      <ExtendedFab href="/" icon="brush" variant="secondary">
        Check all ports
      </ExtendedFab>

      <Footer />
    </>
  );
}
