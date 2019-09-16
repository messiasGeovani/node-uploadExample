const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

// post schema module configuration
const Post = require('./models/Post')

// configurando rotas de acesso
routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
    // destructuring req to make a simple read
    const { originalname: name, size, filename: key } = req.file;

    // json storage object info
    const post = await Post.create({
        name,
        size,
        key,
        url: '',
    });
     
    return res.json(post);
});

// exportando rotas
module.exports = routes;