import type { GetStaticProps } from "next";
import Head from "next/head";
import { Footer, Navbar, ExtendedFab } from "../components";
import styles from "../styles/About.module.css";

export default function About() {
  const backgroundColors = ["#19002e", "#240041", "#900048"];
  const foregroundColors = ["#ff0e82", "#c79bff", "#00ffb7"];
  const auxiliarColors = ["#399ee6", "#ffd700", "#d70040", "#ff4500"];

  const Pallete = ({
    colors,
    direction = "row",
    label = false,
  }: {
    colors: string[];
    direction?: "row" | "column";
    label?: boolean;
  }) => {
    return (
      <div className={styles[direction]}>
        {colors.map((color) => {
          return (
            <div
              style={{ backgroundColor: color }}
              key={color}
              className={styles.color}
            >
              {label && <p className={styles.label}>{color}</p>}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Head>
        <meta name="og:image" content="https://wildberries.style/api/og" />

        <title>About Wildberries</title>
        <meta property="og:title" content="About Wildberries" key="ogtitle" />

        <meta name="description" content="A dark theme for purple lovers" />
        <meta
          property="og:description"
          content="A dark theme for purple lovers"
          key="ogdesc"
        />
        <link
          rel="preload"
          href="/fonts/JetBrainsMono-VariableFont_wght.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.background}>
        <h1 className={styles.title}>If you like purple</h1>

        <h2 className={styles.accents}>And some neon bright accents</h2>

        <Pallete colors={backgroundColors} />
        <div className={styles.foreground}>
          <Pallete colors={foregroundColors} />
        </div>
        <div className={styles.auxiliar}>
          <Pallete colors={auxiliarColors} direction="column" />
        </div>
      </div>
      <div className={styles.content}>
        <h2>Wildberries can be the color theme for you</h2>
        <p>
          And yeah, it&apos;s not for everyone, but once I couldn&apos;t find
          any color theme for my daily applications in such style, I started to
          customize everything on a common color scheme, now called{" "}
          <span className="berry">wildberries</span>
        </p>
        <p>
          Being just a developer and not a graphic designer, I came up with this
          color scheme by pure personal taste, however, by time passing and many
          applications being customized, I tried to follow some consistencies.
        </p>
        <p>
          Wildberries is a dark theme, with additional bright accents, almost in
          a cyberpunkish way.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Background Colors</h3>
            <hr />
            <div className={styles.pallete}>
              <Pallete label colors={backgroundColors} />
            </div>
          </div>
          <div className={styles.card}>
            <h3>Foreground Colors</h3>
            <hr />
            <div className={styles.pallete}>
              <Pallete label colors={foregroundColors} />
            </div>
          </div>
          <div className={styles.card}>
            <h3>Auxiliar Colors</h3>
            <hr />
            <div className={styles.pallete}>
              <Pallete label colors={auxiliarColors} />
            </div>
          </div>
        </div>
      </div>
      <ExtendedFab href="/" icon="brush">
        Check all theme ports
      </ExtendedFab>
      <Footer variant="secondary" />
    </>
  );
}
