const express = require("express");
const authMiddleware = require("../middlewares/auth");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.use(authMiddleware);

router.post("", async (req, res) => {
    
  // verifica se recebeu o arquivo no statement
  var carregar = upload.single("statement");
  carregar(req, res, function (err) {
    if (err) {
      return res.status(400).send({ error: "Erro ao tentar fazer upload!" });
    }

    // verifica se arquivo existe
    const file = req.file;
    if (!file) {
      return res.status(400).send({ error: "Erro ao tentar fazer upload!" });
    }
    // exibir log
    // console.log(`new upload = ${req.file.filename}\n`);
    // console.log(req.file);
    return res
      .status(200)
      .send({ success: "Arquivo armazenado com  sucesso!" });
  });
});

module.exports = (app) => app.use("/FileUpload", router);
