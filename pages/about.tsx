import Head from 'next/head';
import { Footer, Navbar, ExtendedFab } from '../components';

export default function About() {
  const backgroundColors = ['#19002e', '#240041', '#900048'];
  const foregroundColors = ['#ff0e82', '#c79bff', '#00ffb7'];
  const auxiliarColors = ['#399ee6', '#ffd700', '#d70040', '#ff4500'];

  const Pallete = ({
    colors,
    gridClasses = 'grid-cols-3',
    spanClasses = 'col-span-1',
    label = false,
    className = 'h-full w-full',
  }: {
    colors: string[];
    gridClasses?: string;
    spanClasses?: string;
    label?: boolean;
    className?: string;
  }) => {
    return (
      <div className={`${className} overflow-hidden`}>
        <div className={`grid h-full ${gridClasses}`}>
          {colors.map((color) => {
            return (
              <div style={{ backgroundColor: color }} key={color} className={`relative ${spanClasses}`}>
                {label && (
                  <p className="absolute bottom-0 m-0 w-full bg-dark-purple py-2 text-center text-sm uppercase text-white">
                    {color}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='25' height='25' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(273, 100%, 9%, 1)'/><path d='M25 30a5 5 0 110-10 5 5 0 010 10zm0-25a5 5 0 110-10 5 5 0 010 10zM0 30a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm12.5 12.5a5 5 0 110-10 5 5 0 010 10z'  stroke-width='0.5' stroke='hsla(330, 100%, 28%, 0.44)' fill='none'/><path d='M0 15a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm25 0a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM12.5 2.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0 25a2.5 2.5 0 110-5 2.5 2.5 0 010 5z'  stroke-width='0.5' stroke='hsla(266, 100%, 80%, 0.29)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-50)' fill='url(%23a)'/></svg>")`,
        backgroundAttachment: 'fixed',
      }}
    >
      <Head>
        <meta name="og:image" content="https://wildberries.style/api/og" />

        <title>About Wildberries</title>
        <meta property="og:title" content="About Wildberries" key="ogtitle" />

        <meta name="description" content="A dark theme for purple lovers" />
        <meta property="og:description" content="A dark theme for purple lovers" key="ogdesc" />
        <link rel="preload" href="/fonts/JetBrainsMono-VariableFont_wght.ttf" as="font" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="relative mt-16 h-[44vh] md:mx-[3%]">
        <div className="absolute top-11 z-10 w-full md:top-24">
          <h1 className="m-auto w-3/5 text-start text-2xl font-bold tracking-wide md:text-3xl">If you like purple</h1>
        </div>
        <div className="absolute bottom-24 z-10 w-full md:bottom-36">
          <h2 className="m-auto w-3/5 text-right text-xl tracking-wide text-acid-green md:text-2xl">
            And some neon bright accents
          </h2>
        </div>

        <Pallete className="h-full w-full rounded-3xl" colors={backgroundColors} />
        <div className="absolute bottom-14 w-full md:bottom-20">
          <Pallete className="m-auto h-4 w-3/5 rounded-md md:w-2/3" colors={foregroundColors} />
        </div>
        <Pallete
          className="absolute bottom-6 left-6 h-36 w-5 md:bottom-10 md:left-10"
          colors={auxiliarColors}
          gridClasses="grid-rows-4 gap-5"
          spanClasses="span-col-1 rounded"
        />
      </div>
      <div>
        <div className="mx-auto max-w-6xl rounded-b-lg px-6 py-10 text-lg leading-8 backdrop-blur-sm sm:px-6 md:px-16">
          <h2 className="m-0 pb-10 text-center text-xl font-bold">Wildberries can be the color theme for you</h2>
          <p className="mb-5">
            And yeah, it&apos;s not for everyone, but once I couldn&apos;t find any color theme for my daily
            applications in such style, I started to customize everything on a common color scheme, now called{' '}
            <span className="berry">wildberries</span>
          </p>
          <p>
            Being just a developer and not a graphic designer, I came up with this color scheme by pure personal taste,
            however, by time passing and many applications being customized, I tried to follow some consistencies.
          </p>
          <p>Wildberries is a dark theme, with additional bright accents, almost in a cyberpunkish way.</p>
        </div>
        <div className="m-auto grid max-w-5xl grid-cols-2 grid-rows-2 place-items-center gap-10 py-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-2">Background Colors</h3>
            <Pallete className="h-40 w-80 rounded-xl" label colors={backgroundColors} />
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-2">Foreground Colors</h3>
            <Pallete className="h-40 w-80 rounded-xl" label colors={foregroundColors} />
          </div>
          <div className="col-span-2">
            <h3 className="mb-2">Auxiliar Colors</h3>
            <Pallete className="h-40 w-80 rounded-xl" label colors={auxiliarColors} gridClasses="grid-cols-4" />
          </div>
        </div>
      </div>
      <ExtendedFab href="/" icon="bx:brush" variant="secondary">
        Check all theme ports
      </ExtendedFab>
      <Footer variant="secondary" />
    </div>
  );
}
