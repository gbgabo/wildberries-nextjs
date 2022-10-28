import styles from "../styles/BioCard.module.css";

type Props = {
  top?: string;
  bottom?: string;
  image?: string;
  href: string;
};

export default function BioCard({ top, bottom, image, href }: Props) {
  return (
    <a className={styles.card} href={href}>
      <p className={styles.top}>{top}</p>
      {/* <div className={styles.button}> */}
      {image ? (
        <img alt="external link" src={image} />
      ) : (
        <img
          alt="external link"
          className={styles.icon}
          src="/icons/open_in_new.svg"
        />
      )}
      <p className="berry">{bottom}</p>
      {/* </div> */}
    </a>
  );
}
