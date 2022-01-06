import React, { Fragment, ReactElement } from "react";
import styles from "../styles/Slider.module.css";

interface Props {
  ports: string[];
  hasCaption?: boolean;
}

export default function Slider({
  ports,
  hasCaption = false,
}: Props): ReactElement {
  return (
    <div>
      <div className={styles["slider-wrapper"]}>
        <div className={styles.slider}>
          {ports.map((port, index) => {
            return (
              <Fragment key={port}>
                <input
                  type="radio"
                  name="slider"
                  className={styles.trigger}
                  id={port}
                  defaultChecked={index === 0}
                />
                <div className={styles.slide}>
                  {hasCaption && (
                    <figcaption>
                      <div className={styles["slide-caption"]}>
                        <p>A purple theme for</p>
                        <p className={styles["slide-caption-port"]}>{port}</p>
                      </div>
                    </figcaption>
                  )}
                  <figure className={styles["slide-figure"]}>
                    <img
                      className={styles["slide-img"]}
                      src={`/img/screenshots/${port}.png`}
                    />
                  </figure>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>

      {ports.length > 1 && (
        <ul className={styles["slider-nav"]}>
          {ports.map((port) => {
            return (
              <li key={port} className={styles["slider-nav__item"]}>
                <label
                  className={styles["slider-nav__label"]}
                  htmlFor={port}
                ></label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/*
<div className={styles["slider-wrapper"]}>
        <div className={styles.slider}>
          <input
            type="radio"
            name="slider"
            className={styles.trigger}
            id="one"
            defaultChecked
          />
          <div className={styles.slide}>
            <figure className={styles["slide-figure"]}>
              <img
                className={styles["slide-img"]}
                src="/img/screenshots/dmenu.png"
              />
              <figcaption className={styles["slide-caption"]}>
                <p>dmenu</p>
              </figcaption>
            </figure>
          </div>
          <input
            type="radio"
            name="slider"
            className={styles.trigger}
            id="two"
          />
          <div className={styles.slide}>
            <figure className={styles["slide-figure"]}>
              <img
                className={styles["slide-img"]}
                src="/img/screenshots/gtk.png"
              />
              <figcaption className={styles["slide-caption"]}>
                <p>gtk</p>
              </figcaption>
            </figure>
          </div>
          <input
            type="radio"
            name="slider"
            className={styles.trigger}
            id="three"
          />
          <div className={styles.slide}>
            <figure className={styles["slide-figure"]}>
              <img
                className={styles["slide-img"]}
                src="/img/screenshots/duckduckgo.png"
              />
              <figcaption className={styles["slide-caption"]}>
                <p>duckduckgo</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <ul className={styles["slider-nav"]}>
          <li className={styles["slider-nav__item"]}>
            <label
              className={styles["slider-nav__label"]}
              htmlFor="one"
            ></label>
          </li>
          <li className={styles["slider-nav__item"]}>
            <label
              className={styles["slider-nav__label"]}
              htmlFor="two"
            ></label>
          </li>
          <li className={styles["slider-nav__item"]}>
            <label
              className={styles["slider-nav__label"]}
              htmlFor="three"
            ></label>
          </li>
        </ul>
      </div>

*/
