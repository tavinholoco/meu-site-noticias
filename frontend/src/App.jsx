import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#f5f5f5", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#222" }}>🌎 Principais Notícias do Mundo</h1>

        {news.length === 0 && (
          <p style={{ textAlign: "center", fontSize: "18px", color: "#555" }}>Carregando notícias...</p>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>
          {news.map((n, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                transition: "transform 0.3s, box-shadow 0.3s, opacity 0.6s",
                opacity: 0,
                animation: `fadeIn 0.5s forwards ${i * 0.1}s`,
              }}
            >
              {n.image && (
                <div style={{ overflow: "hidden" }}>
                  <img
                    src={n.image}
                    alt={n.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      filter: "brightness(0.95)",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>
              )}
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ margin: "0 0 15px", color: "#111", fontSize: "20px", lineHeight: "1.3" }}>{n.title}</h3>
                <p style={{ margin: "0 0 15px", color: "#555", flexGrow: 1 }}>{n.description}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", color: "#888" }}>
                  <span>{n.source}</span>
                  <span>{new Date(n.publishedAt).toLocaleDateString("pt-BR")}</span>
                </div>
                <a
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: "15px",
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#1a73e8",
                    padding: "10px 15px",
                    borderRadius: "6px",
                    textAlign: "center",
                    fontWeight: "bold",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1669c1"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1a73e8"}
                >
                  Ler mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estilo de animação global */}
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
          body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            min-height: 100%;
            background-color: #f5f5f5;
          }
          #root {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}

export default App;
