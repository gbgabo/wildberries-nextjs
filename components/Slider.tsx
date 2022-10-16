import React, { Fragment, ReactElement } from "react";
import styles from "../styles/Slider.module.css";

interface Props {
  slides: {
    url: string;
    caption?: any;
  }[];
}

export default function Slider({ slides }: Props): ReactElement {
  return (
    <div
      className={`${styles.csslider} ${slides.length > 2 && styles.infinity}`}
    >
      {slides.map((slide, index) => {
        return (
          <input
            type="radio"
            defaultChecked={index === 0}
            name="slides"
            id={`slides_${index + 1}`}
          />
        );
      })}
      <ul>
        {slides.map((slide) => {
          return (
            <li>
              <div className={styles.container}>
                <img src={slide.url} />
              </div>
            </li>
          );
        })}
      </ul>
      {slides.length > 1 && (
        <>
          <div className={styles.arrows}>
            {slides.map((slide, index) => {
              return <label htmlFor={`slides_${index + 1}`}></label>;
            })}
          </div>
          <div className={styles.navigation}>
            <div>
              {slides.map((slide, index) => {
                return <label htmlFor={`slides_${index + 1}`}></label>;
              })}
            </div>
          </div>
        </>
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
