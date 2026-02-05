import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon serveur API');
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
