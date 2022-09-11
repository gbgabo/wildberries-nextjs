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
    <div>
      <div className={styles["slider-wrapper"]}>
        <div className={styles.slider}>
          {slides.length > 0 &&
            slides.map((slide, index) => {
              return (
                <Fragment key={index}>
                  <input
                    type="radio"
                    name="slider"
                    className={styles.trigger}
                    id={`slide${index}`}
                    defaultChecked={index === 0}
                  />
                  <div className={styles.slide}>
                    {slide.caption && (
                      <figcaption>
                        <div className={styles["slide-caption"]}>
                          {slide.caption}
                        </div>
                      </figcaption>
                    )}
                    <figure className={styles["slide-figure"]}>
                      <img className={styles["slide-img"]} src={slide.url} />
                    </figure>
                  </div>
                </Fragment>
              );
            })}
        </div>
      </div>

      {slides.length > 1 && (
        <ul className={styles["slider-nav"]}>
          {slides.map((slide, index) => {
            return (
              <li key={index} className={styles["slider-nav__item"]}>
                <label
                  className={styles["slider-nav__label"]}
                  htmlFor={`slide${index}`}
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
