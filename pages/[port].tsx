import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import styles from '../styles/Port.module.css';
import Image from 'next/image';
import { getPort, getPorts } from '../lib/ports';
import { ExtendedFab, Code, Layout, Hero } from '../components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Icon } from '@iconify/react';

export const getStaticProps: GetStaticProps = async (context) => {
  const port = context.params!.port as string;
  const portProps = await getPort(port);
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

export default function Port({ port, title, platform, screenshots, instructions, assets }: Port) {
  const meta = {
    title: `${port} theme - Wildberries`,
    description: `A dark purple theme for ${port} and many other apps`,
    image: `https://wildberries.style/api/og?port=${port}&title=${title}${
      screenshots ? `&image=${screenshots[0]}` : null
    }`,
  };

  const hero = {
    title: 'Wildberries',
    subtitle: (
      <div className="my-8 text-xl text-light-purple md:text-2xl">
        {`A dark purple theme for `}
        <span className="highlight">{title}</span>
        {` and many other apps`}
      </div>
    ),
    cta: { text: 'Apply Theme', href: '#instructions', icon: 'material-symbols:brush' },
    slides: screenshots?.map((screenshot) => {
      return `/ports/${port}/screenshots/${screenshot}`;
    }),
  };

  return (
    <>
      <Layout meta={meta} port={port}>
        <Hero {...hero} />
        <div id="instructions" className={styles.instructions}>
          <div className={styles.description}>
            <Icon className={styles.sectionIcon} icon="material-symbols:brush" />
            <p>Installation</p>
          </div>

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={styles['instructions-content']}
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
                  <a className={styles.button} href={`/ports/${port}/assets/${asset}`}>
                    <Icon className="mr-2" icon="tabler:download" width="1.5rem" /> Download
                  </a>
                </div>
              );
            })}
        </div>

        <ExtendedFab href="/" icon="bx:brush" variant="secondary">
          Check all ports
        </ExtendedFab>
      </Layout>
    </>
  );
}
