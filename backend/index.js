import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Função auxiliar para buscar notícias da NewsAPI
async function fetchNews(url) {
  const response = await fetch(url);
  return await response.json();
}

// Rota para buscar notícias globais
app.get("/api/news", async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    // Buscar notícias globais em inglês
    const url = `https://newsapi.org/v2/top-headlines?language=en&pageSize=10&apiKey=${apiKey}`;
    const data = await fetchNews(url);

    if (data.status !== "ok" || !data.articles || data.articles.length === 0) {
      return res.json([]);
    }

    // Garantindo que title e description sempre existam
    const articles = data.articles.map((article) => ({
      title: article.title || "Notícia sem título",
      description: article.description || "Sem descrição disponível",
      url: article.url,
      image: article.urlToImage || "",
      source: article.source.name || "Desconhecido",
      publishedAt: article.publishedAt || new Date().toISOString(),
    }));

    res.json(articles);
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    res.status(500).json({ error: "Erro ao buscar notícias" });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend rodando em http://localhost:5000");
});
