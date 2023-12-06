import { GetStaticPaths, GetStaticProps } from 'next';
import { getPort, getPorts } from '../lib/ports';
import { ExtendedFab, Code, Layout, Hero, Button } from '../components';
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

        <div id="instructions" className="mx-auto max-w-4xl px-4 pb-4 text-[#D1D5DB] lg:text-xl">
          <div className="mx-auto my-8 flex max-w-4xl items-center justify-center gap-4 text-2xl text-light-purple">
            <Icon className="h-10 w-10 p-1" icon="material-symbols:brush" />
            <p>Instalation</p>
          </div>

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="pb-8"
            components={{
              code({ node, inline, className, children, ...props }) {
                return inline ? (
                  <code className={className}>{children}</code>
                ) : (
                  <Code className={className}>{children}</Code>
                );
              },
              a({ children, ...props }) {
                return (
                  <a className="text-pink no-underline transition-colors ease-linear hover:text-acid-green">
                    {children}
                  </a>
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
                  <p className="m-auto w-fit rounded-t-lg bg-darker-purple p-4 text-light-purple">{asset}</p>
                  <Button href={`/ports/${port}/assets/${asset}`} icon="tabler:download">
                    Download
                  </Button>
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
