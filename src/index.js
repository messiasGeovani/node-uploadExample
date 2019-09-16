const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// instanciando o express
const app = express();

/**
 * Database setup
 */
mongoose.connect(
    'mongodb+srv://geovani:ati25144@cluster0-jvwp7.mongodb.net/uploadExample?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    }
);

// configurando extensão de arquivos do express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// inicializando rotas
app.use(require('./routes'));

app.listen(3000);