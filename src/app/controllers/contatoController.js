const express = require("express");
const authMiddleware = require("../middlewares/auth");
const mailer = require("../../resources/mail");

const router = express.Router();

router.use (authMiddleware);

router.post("", async (req, res) => {
  const { email , assunto , mensagem } = req.body;

  try {
    const contato = mailer.sendMail(
      {
        to: email,
        from: "fabiodelgado@email.com",
        template: "emailContato",
        context: { email , mensagem , assunto },
      },
      (err) => {
        if (err) throw new Error("Erro no mailer");
      }
    );
    return res.status(200).send({ success: "E-mail enviado com sucesso!" });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao tentar enviar e-mail" });
  }
});

module.exports = (app) => app.use("/Contato", router);
