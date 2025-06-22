import app from './src/app.js';

const port = 3000;

app.listen(port, () => {
  console.log(`🚀 [ONLINE] - API Preço da Hora v1.2 -> http://localhost:${port}`);
});