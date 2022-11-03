export default function Index() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        background: "linear-gradient(180deg,#19002e, #240041 70%)",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "30vw",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            height: "100%",
          }}
          src="https://wildberries.style/ports/vscode/screenshots/vscode-darker.png"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "40vw",
          minWidth: "500px",
          height: "100vh",
          boxShadow:
            "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
          background: "linear-gradient(180deg,#900048,#19002e 70%)",
        }}
      >
        <img
          style={{
            marginBottom: "40px",
            width: "200px",
            height: "200px",
          }}
          src="https://wildberries.style/img/ui/wb_logo.svg"
          alt="Wildberries"
        />
        <h1
          style={{
            margin: 0,
            lineHeight: "55.2px",
            fontSize: "48px",
            textAlign: "center",
            color: "#ff0e82",
          }}
        >
          Wildberries
        </h1>
        <p
          style={{
            margin: "30px auto",
            lineHeight: "40.8px",
            fontSize: "27.2px",
            color: "#c79bff",
            maxWidth: "75%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          An experimental dark theme for people who love purple
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "30vw",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            height: "100%",
          }}
          src="https://wildberries.style/ports/dwm/screenshots/dwm.png"
        />
      </div>
    </main>
  );
}
