import React, { ReactElement } from "react";
import { Footer, Navbar, TextFab } from "../components";
import styles from "../styles/About.module.css";

interface Props {}

export default function About({}: Props): ReactElement {
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
        <h2>Wildberries can be the colortheme for you</h2>
        <p>
          And yeah, it's not for everyone, but once I couldn't find any color
          theme for my daily applications in such style, I started to customize
          everything on a common color scheme, now called wildberries
        </p>
        <p>
          Being just a developer and not a graphic designer, I came up with this
          color scheme by pure personal taste, however, by time passing and many
          applications being customized, I tried to follow some consistencies.
        </p>
        <p>
          Wildberries theme is supposed to be a dark theme, with additional
          bright accents, almost in a cyberpunkish way.
        </p>
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
      <TextFab href="/" icon="brush">
        Check all theme ports
      </TextFab>
      <Footer />
    </>
  );
}
