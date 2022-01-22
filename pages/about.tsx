import React, { ReactElement } from "react";
import { Footer, TextFab } from "../components";
import styles from "../styles/About.module.css";

interface Props {}

export default function About({}: Props): ReactElement {
  const backgroundColors = ["black-berry", "grape", "cherry"];
  const foregroundColors = ["pink", "purple", "green"];
  const auxiliarColors = ["blue", "yellow", "red", "orange"];

  const Pallete = ({
    colors,
    direction = "row",
  }: {
    colors: string[];
    direction?: "row" | "column";
  }) => {
    return (
      <div className={styles[direction]}>
        {colors.map((color) => {
          return (
            <div
              style={{
                backgroundColor: `var(--${color})`,
              }}
              key={color}
              className={styles.color}
            ></div>
          );
        })}
      </div>
    );
  };

  return (
    <>
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit exercitationem, sunt eius deserunt hic ea consequuntur
          voluptatibus omnis doloremque. Amet optio facilis fugit dicta fugiat
          molestiae, quod voluptatem non voluptas! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Libero nisi, quo consequuntur veritatis
          eos aliquid repudiandae itaque quasi reprehenderit dolorum quas est
          sapiente qui ad facere. Optio praesentium magni iste. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui eius minus ipsum
          officiis tempora quas sed, distinctio illo a autem dicta alias
          voluptate doloribus nihil, harum aliquid? Sed, laborum debitis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolor!
          Aliquam, fuga ullam nisi reprehenderit recusandae accusantium ex! Quia
          voluptate, deserunt ut suscipit placeat aperiam tenetur alias officia
          quidem eius? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Odio porro provident fuga. Obcaecati, nam! Officia ut numquam aliquid
          recusandae quaerat sed minus perferendis ducimus? Explicabo, esse
          architecto. Consectetur, veritatis eum? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Aliquam exercitationem facere fuga
          neque? Accusamus, libero! Accusantium exercitationem quod harum iure
          nihil enim ratione vel quidem! Rerum fugit a dignissimos saepe. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia
          distinctio tempora porro magni repellendus assumenda impedit, alias
          ullam consectetur quo atque labore facere blanditiis cum mollitia amet
          maxime voluptatibus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Suscipit id dignissimos, sit quia doloribus
          officiis, ipsam neque minima laboriosam odio mollitia quo vero eveniet
          perspiciatis deleniti pariatur officia fuga obcaecati!
        </p>
      </div>
      <TextFab href="/" icon="brush">
        Check all Wildberries ports
      </TextFab>
      <Footer />
    </>
  );
}
