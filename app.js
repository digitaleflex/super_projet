// Importation du module Express
const express = require('express');

// Création d'une instance de l'application Express
const app = express();

// Route racine
app.get('/', (req, res) => {
  res.send('Bonjour, Auriole!');
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
