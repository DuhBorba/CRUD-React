const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({nome: "Eduardo"})
})

app.listen(8080, () => {
  console.log("Servidor iniciado!")
})