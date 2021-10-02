const routes = require("express").Router();
const formidable = require("formidable");
const bcrypt = require("bcryptjs");
const path = require("path");

// post schema module configuration
const Post = require("./models/Post");

// configurando rotas de acesso
routes.post("/posts", async (req, res) => {
  const form = new formidable.IncomingForm({
    uploadDir: path.resolve(__dirname, "..", "uploads"),
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    Promise.all(
      Object.keys(files).map((key, index) => {
        const hash = bcrypt.hashSync(files[key].name, 8);
        const newName = hash.replace(/[^\w\s]/gi, "");

        // files[key].name = newName;
      })
    ).then(() => res.json({ fields, files }));
  });
});

// exportando rotas
module.exports = routes;
