interface Props {
  port: string | null;
  title: string | null;
  image: string | null;
}

export default function Port({ port, title, image }: Props) {
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: `${image ? "50vw" : "100vw"}`,
          minWidth: "50vw",
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
            lineHeight: "64.4px",
            fontSize: "56px",
            textAlign: "center",
            color: "#ff0e82",
          }}
        >
          Wildberries
        </h1>
        <p
          style={{
            margin: "30px auto",
            lineHeight: "48px",
            fontSize: "32px",
            color: "#c79bff",
            maxWidth: "75%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {`theme for `}
          <span
            style={{
              backgroundColor: "#c79bff",
              color: "#19002e",
              borderRadius: "5px",
              padding: "5px 10px",
              whiteSpace: "pre",
              marginLeft: "20px",
            }}
          >
            {title}
          </span>
        </p>
      </div>
      {image && (
        <div
          style={{
            display: "flex",
            margin: "auto",
            width: "50vw",
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            src={`https://wildberries.style/ports/${port}/screenshots/${image}`}
          />
        </div>
      )}
    </main>
  );
}
