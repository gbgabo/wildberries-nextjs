interface Props {
  port: string | null;
  title: string | null;
  image: string | null;
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row" as "row",
    background: "linear-gradient(180deg,#19002e, #240041 70%)",
    minHeight: "100vh",
  },
  description: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "50vw",
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
    lineHeight: "64.4px",
    fontSize: "56px",
    textAlign: "center" as "center",
    color: "#ff0e82",
  },
  subheading: {
    margin: "30px auto",
    lineHeight: "48px",
    fontSize: "32px",
    color: "#c79bff",
    maxWidth: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
  highlight: {
    backgroundColor: "#c79bff",
    color: "#19002e",
    borderRadius: "5px",
    padding: "5px 10px",
    whiteSpace: "pre" as "pre",
    marginLeft: "20px",
  },
  imageContainer: {
    display: "flex",
    margin: "auto",
    width: "50vw",
  },
};

export default function Port({ port, title, image }: Props) {
  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.description,
          width: `${image && port ? "50vw" : "100vw"}`,
        }}
      >
        <img
          style={styles.logo}
          src="https://wildberries.style/img/ui/wb_logo.svg"
          alt="Wildberries"
        />
        <h1 style={styles.heading}>Wildberries</h1>
        <p style={styles.subheading}>
          {`theme for `}
          <span style={styles.highlight}>{title}</span>
        </p>
      </div>
      {image && port && (
        <div style={styles.imageContainer}>
          <img
            style={{ width: "100%" }}
            src={`https://wildberries.style/ports/${port}/screenshots/${image}`}
          />
        </div>
      )}
    </div>
  );
}
