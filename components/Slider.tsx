import React, { Fragment, ReactElement } from "react";
import styles from "../styles/Slider.module.css";

interface Props {
  slides: {
    element: any;
  }[];
}

export default function Slider({ slides }: Props): ReactElement {
  return (
    <div
      className={`${styles.csslider} ${
        slides.length > 2 ? styles.infinity : ""
      }`}
    >
      {slides.map((slide, index) => {
        return (
          <input
            key={index}
            type="radio"
            defaultChecked={index === 0}
            name="slides"
            id={`slides_${index + 1}`}
          />
        );
      })}
      <ul>
        {slides.map((slide, index) => {
          return (
            <li key={index}>
              <div className={styles.container}>{slide.element}</div>
            </li>
          );
        })}
      </ul>
      {slides.length > 1 && (
        <>
          <div className={styles.arrows}>
            {slides.map((slide, index) => {
              return (
                <label key={index} htmlFor={`slides_${index + 1}`}></label>
              );
            })}
          </div>
          <div className={styles.navigation}>
            <div>
              {slides.map((slide, index) => {
                return (
                  <label key={index} htmlFor={`slides_${index + 1}`}></label>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
