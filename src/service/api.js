import axios from "axios";

const baseURL = "http://localhost:8000/";

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export async function getNews() {
  return api.get("/");
}

export async function newNews(news) {
  console.log("Data: ", news);
  return api.post("/news", {
    news,
  });
}
