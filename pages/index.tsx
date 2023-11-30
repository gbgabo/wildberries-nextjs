import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getPorts } from '../lib/ports';
import { Footer, Hero, Navbar, ExtendedFab, Slider, Logo } from '../components';

interface Props {
  portsData: {
    port: string;
    title: string;
  }[];
}

export const getStaticProps: GetStaticProps = async () => {
  const portsData = getPorts();
  return {
    props: {
      portsData,
    },
  };
};

const slides = [
  {
    element: <img alt="vscode screenshot" src="/ports/vscode/screenshots/vscode.png" />,
  },
  {
    element: <img alt="duckduckgo screenshot" src="/ports/duckduckgo/screenshots/duckduckgo.png" />,
  },
  {
    element: <img alt="gtk screenshot" src="/ports/gtk/screenshots/gtk.png" />,
  },
];

export default function Home({ portsData }: Props) {
  return (
    <>
      <Navbar />
      <Head>
        <meta name="og:image" content="https://wildberries.style/api/og" />

        <title>Wildberries - A dark theme for purple lovers</title>
        <meta property="og:title" content="Wildberries" key="ogtitle" />

        <meta name="description" content="A dark theme for purple lovers" />
        <meta property="og:description" content="A dark theme for purple lovers" key="ogdesc" />
        <link rel="preload" href="/fonts/JetBrainsMono-VariableFont_wght.ttf" as="font" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        title={<Logo />}
        subtitle="An experimental dark theme for people who love purple"
        cta={{ text: 'Install Wildberries', href: '#ports', icon: 'material-symbols:brush' }}
      >
        <Slider slides={slides} />
      </Hero>

      <section
        id="ports"
        className="bg-fixed p-8 md:p-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='75' height='75' patternTransform='scale(16) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(273, 100%, 9%, 1)'/><path d='M32.763-11.976c-1.05-.075-1.95.676-2.024 1.726L29.764.849c-.075 1.05.675 1.95 1.725 2.026 1.05.075 1.95-.675 2.025-1.725l.975-11.1c.075-1.05-.675-1.95-1.725-2.025zM54.299 1.32a1.912 1.912 0 0 0-.386.015c-.975.15-1.725 1.05-1.575 2.1l1.5 11.025c.15.975 1.05 1.725 2.1 1.575a1.732 1.732 0 0 0 1.575-2.1l-1.5-11.025c-.131-.853-.836-1.533-1.714-1.59zm-46.93 1.22a1.809 1.809 0 0 0-1.662 1.663c-.075 1.05.675 1.952 1.65 2.027l11.1 1.05c.975.15 1.95-.601 2.025-1.651.15-.975-.6-1.95-1.65-2.025l-11.1-1.05a1.643 1.643 0 0 0-.363-.015zM1.76 13.017a1.825 1.825 0 0 0-1.285.6l-7.65 8.101c-.75.75-.675 1.95.075 2.625s1.95.674 2.625-.076l7.651-8.099c.75-.75.674-1.95-.076-2.625a1.785 1.785 0 0 0-1.34-.526zm75 0a1.825 1.825 0 0 0-1.285.6l-7.65 8.101c-.75.75-.675 1.95.075 2.625s1.95.674 2.625-.076l7.651-8.099c.75-.75.674-1.95-.076-2.625a1.785 1.785 0 0 0-1.34-.526zm-39.731 2.906a1.785 1.785 0 0 0-1.34.527l-7.95 7.723c-.75.675-.826 1.875-.076 2.625.675.75 1.875.752 2.625.077l7.95-7.725c.75-.675.826-1.875.076-2.625a1.825 1.825 0 0 0-1.285-.602zm24.639 18.928c-.24.02-.48.085-.705.197a1.903 1.903 0 0 0-.825 2.55l5.1 9.902a1.902 1.902 0 0 0 2.55.824c.975-.45 1.276-1.574.826-2.55l-5.1-9.9c-.395-.73-1.125-1.083-1.846-1.023zm-50.37-4.862a1.756 1.756 0 0 0-1.035.336c-.825.6-1.05 1.725-.524 2.625l6.15 9.223c.6.9 1.8 1.127 2.625.526.9-.6 1.124-1.8.524-2.624l-6.15-9.226a1.912 1.912 0 0 0-1.59-.86zm32.705 9.766c-.12-.006-.243 0-.365.019l-10.95 2.175c-1.05.15-1.725 1.126-1.5 2.176.15 1.05 1.126 1.725 2.176 1.5l10.95-2.175c1.05-.15 1.725-1.125 1.5-2.175a1.99 1.99 0 0 0-1.811-1.52zm4.556 12.195a1.932 1.932 0 0 0-1.845.949c-.45.9-.15 2.025.75 2.55l9.75 5.4c.9.45 2.025.15 2.55-.75.525-.9.15-2.025-.75-2.55l-9.75-5.4a1.958 1.958 0 0 0-.705-.199zM71.913 58c-1.05-.075-1.875.748-1.95 1.798l-.45 11.1c-.075 1.05.75 1.876 1.8 1.95.975 0 1.875-.75 1.95-1.8l.45-11.1c.075-1.05-.75-1.873-1.8-1.948zm-55.44 1.08a1.865 1.865 0 0 0-1.035.42l-8.775 6.825c-.75.6-.9 1.8-.3 2.625.6.75 1.8.9 2.626.3l8.775-6.827c.75-.6.9-1.8.3-2.625a1.783 1.783 0 0 0-1.591-.72zm16.29 3.945c-1.05-.075-1.95.675-2.024 1.725l-.975 11.099c-.075 1.05.675 1.95 1.725 2.026 1.05.075 1.95-.675 2.025-1.725l.975-11.102c.075-1.05-.675-1.95-1.725-2.024z'  stroke-width='1' stroke='none' fill='hsla(330, 100%, 28%, 0.71)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`,
        }}
      >
        <h2>Check all apps wilberries is available for:</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {portsData.map((port) => {
            return (
              <Link href={`/${port.port}`} key={port.port}>
                <a className="rounded-xl border-2 border-cherry bg-dark-purple p-6 pb-10 text-xl text-acid-green no-underline transition-all ease-out hover:bg-acid-green hover:text-cherry md:text-2xl">
                  <b>{port.title}</b>
                </a>
              </Link>
            );
          })}
        </div>
      </section>
      <ExtendedFab href="/about" icon="heroicons-outline:color-swatch">
        About Wildberries
      </ExtendedFab>
      <Footer />
    </>
  );
}
