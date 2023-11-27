import Head from 'next/head';
import { Footer, Navbar, ExtendedFab } from '../components';
import styles from '../styles/About.module.css';

export default function About() {
  const backgroundColors = ['#19002e', '#240041', '#900048'];
  const foregroundColors = ['#ff0e82', '#c79bff', '#00ffb7'];
  const auxiliarColors = ['#399ee6', '#ffd700', '#d70040', '#ff4500'];

  const Pallete = ({
    colors,
    direction = 'row',
    label = false,
    className = 'h-full',
  }: {
    colors: string[];
    direction?: 'row' | 'column';
    label?: boolean;
    className?: string;
  }) => {
    return (
      <div className={className}>
        <div className={`${styles[direction]}`}>
          {colors.map((color) => {
            return (
              <div style={{ backgroundColor: color }} key={color} className="h-[44vh] w-1/3">
                {label && <p className="m-0 w-full bg-dark-purple text-center uppercase text-white">{color}</p>}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.body}>
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
      <div className="relative mx-[3%] mt-16 h-[44vh] overflow-hidden rounded-2xl">
        <h1 className="absolute top-6 w-full text-start text-3xl">If you like purple</h1>

        <h2 className="absolute bottom-28 m-auto w-full text-end text-xl text-acid-green">
          And some neon bright accents
        </h2>

        <Pallete colors={backgroundColors} />
        <Pallete className="absolute bottom-12 left-0 h-12 w-full overflow-hidden rounded" colors={foregroundColors} />
        <Pallete className="absolute h-14 w-14 overflow-hidden" colors={auxiliarColors} direction="column" />
      </div>
      <div>
        <div className="mx-auto max-w-4xl rounded-b-lg px-5 py-10 leading-7 backdrop-blur-md">
          <h2 className="m-0 pb-10 text-center">Wildberries can be the color theme for you</h2>
          <p>
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
          <div className="col-span-2">
            <h3>Background Colors</h3>
            <hr />
            <Pallete className={styles.pallete} label colors={backgroundColors} />
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3>Foreground Colors</h3>
            <hr />
            <Pallete className={styles.pallete} label colors={foregroundColors} />
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3>Auxiliar Colors</h3>
            <hr />
            <Pallete className={styles.pallete} label colors={auxiliarColors} />
          </div>
        </div>
      </div>
      <ExtendedFab href="/" icon="brush" variant="secondary">
        Check all theme ports
      </ExtendedFab>
      <Footer variant="secondary" />
    </div>
  );
}
