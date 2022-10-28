import styles from "../../styles/HomeThumb.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.screenshot}>
          <img src={`/ports/vscode/screenshots/vscode.png`} />
        </div>
        <div className={styles.head}>
          <img
            className={styles.icon}
            src="/img/ui/wb_logo.svg"
            alt="Wildberries"
          />
          <h1 className={styles.title}>Wildberries</h1>
          <p className={styles.description}>
            An experimental dark theme for people who love purple
          </p>
        </div>
        <div className={styles.screenshot}>
          <img src={`/ports/dwm/screenshots/dwm.png`} />
        </div>
      </main>
    </>
  );
}
