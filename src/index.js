require("dotenv/config");

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// instanciando o express
const app = express();

/**
 * Database setup
 */
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
});

// configurando extensão de arquivos do express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// inicializando rotas
app.use(require("./routes"));

app.listen(3000);
