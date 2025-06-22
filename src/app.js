import express from "express";
import produtosRoutes from "./routes/produtos.routes.js";
import cestaRoutes from "./scripts/consultarCesta.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de Produtos está funcionando!");
});

app.use("/", produtosRoutes);

app.use("/cesta", cestaRoutes);

export default app;
