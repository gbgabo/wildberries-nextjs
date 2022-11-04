const styles = {
  container: {
    display: "flex",
    flexDirection: "row" as "row",
    background: "linear-gradient(180deg,#19002e, #240041 70%)",
    minHeight: "100vh",
  },
  imageContainer: {
    display: "flex",
    width: "30vw",
    overflow: "hidden",
  },
  description: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    width: "40vw",
    minWidth: "500px",
    height: "100vh",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    background: "linear-gradient(180deg,#900048,#19002e 70%)",
  },
  logo: {
    marginBottom: "40px",
    width: "200px",
    height: "200px",
  },
  heading: {
    margin: 0,
    lineHeight: "55.2px",
    fontSize: "48px",
    textAlign: "center" as "center",
    color: "#ff0e82",
  },
  subheading: {
    margin: "30px auto",
    lineHeight: "40.8px",
    fontSize: "27.2px",
    color: "#c79bff",
    maxWidth: "75%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as "center",
  },
};

export default function Index() {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          style={{ height: "100%" }}
          src="https://wildberries.style/ports/vscode/screenshots/vscode-darker.png"
        />
      </div>
      <div style={styles.description}>
        <img
          style={styles.logo}
          src="https://wildberries.style/img/ui/wb_logo.svg"
          alt="Wildberries"
        />
        <h1 style={styles.heading}>Wildberries</h1>
        <p style={styles.subheading}>
          An experimental dark theme for people who love purple
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img
          style={{ height: "100%" }}
          src="https://wildberries.style/ports/dwm/screenshots/dwm.png"
        />
      </div>
    </div>
  );
}
