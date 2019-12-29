const express = require('express');
const api = require('./routes'); 
//répertoire de toutes les routes

const app = express();
const port = 8000;

app.use('/api', api);

// chargement du module router dans l'app

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
