### Autor: Fábio Delgado

Olá! Seja bem vindo ;)

## Índice
1. [ExpressApp](#ExpressApp)
2. [Projeto e Conteúdo](#Projeto-e-Conteudo)
3. [Swagger](#Swagger)
4. [JWT](#JWT)
5. [MongoDB e Mongoose](#MongoDB-e-Mongoose)
7. [SMTP](#SMTP)
8. [Publicação](#Publicação)
9. [Suporte](#Suporte)

## ExpressApp

Este repositório contém uma implementação que orientará você na criação de um aplicativo de básico contendo autenticação, documentação e integração com banco de dados utilizando NodeJS, com o Framework Express e banco de dados MongoDB

### Como executar essa aplicação?
Para executar essa aplicação, primeiro é necessário instalar o NodeJs. Depois disso, você deve seguir os passos abaixo:
1. Clone ou faça o download deste repositório.
2. Extraia o conteúdo se o download for um arquivo zip. Verifique se os arquivos estão com read-write.
3. Execute o comando abaixo no prompt de comando.
```shell
node ./src/index.js
```
4. A aplicação deverá estar disponivel em seu navegador no endereço: http://localhost:8178/api-docs/

![swagger](/img/swagger.png)

### Dependências

```shell
npm install express --save
npm install body-parser
```

### Extensões recomendadas para desenvolvimento no VSCODE

- Live Server from Ritwick Dey
- Node Debug from Microsoft

## Projeto e Conteúdo

## Swagger

O Swagger é uma aplicação open source que auxilia os desenvolvedores a definir, criar, documentar e consumir APIs REST;
É composto de um arquivo de configuração, que pode ser definido em YAML ou JSON;
Nesse projeto, foi utilizado o `Swagger UI Express` este módulo permite que você documente a API gerados por swagger-ui, com base em um arquivo swagger.json. 

fonte: https://swagger.io/resources/webinars/getting-started-with-swagger/

> Para instalar o Mongoose utilize o commando abaixo:
```shell
npm install swagger-ui-express
```

Exemplo de implementação:
```js
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```
## JWT

O JWT (JSON Web Token) nada mais é que um padrão (RFC-7519) de mercado que define como transmitir e armazenar objetos JSON de forma simples, compacta e segura entre diferentes aplicações, muito utilizado para validar serviços em Web Services pois os dados contidos no token gerado pode ser validado a qualquer momento uma vez que ele é assinado digitalmente.

JSON Web Tokens (JWT) é um padrão stateless porque o servidor autorizador não precisa manter nenhum estado; o próprio token é sulficiente para verificar a autorização de um portador de token.

Os JWTs são assinados usando um algoritmo de assinatura digital (por exemplo, RSA) que não pode ser forjado. Por isso, qualquer pessoa que confie no certificado do assinante pode confiar com segurança que o JWT é autêntico. Não há necessidade de um servidor consultar o servidor emissor de token para confirmar sua autenticidade.

Nesse projeto, foi utilizado o `Bcrypt` como ferramenta de cryptografia. E o componente `jsonwebtoken` para gerar os tokens JWT.

fonte: https://jwt.io/introduction/

> Para instalar o Mongoose utilize o commando abaixo:
```shell
npm install bcryptjs
npm install jsonwebtoken
```

## MongoDB

`MongoDB` é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.

O `Mongoose` é uma ferramenta de modelagem de objetos MongoDB projetada para funcionar em um ambiente assíncrono. O Mongoose oferece suporte a promessas e retornos de chamada.

> Para instalar o Mongoose utilize o commando abaixo:
```shell
npm install mongoose
```

Exemplo de implementação:
```js
// importando a dependencia
const mongoose = require('mongoose');
 
// Conectando na base
mongoose.connect("mongodb://localhost/cadastro", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

//exemplo de utilização para post em blog.
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});
```
## SMTP

O SMTP ou Simple Mail Transfer Protocol, é uma convenção padrão dedicada ao envio de e-mail. A princípio o protocolo SMTP utilizava por padrão a porta 25 ou 465 (conexão criptografada) para conexão, porém a partir de 2013 os provedores de internet e as operadoras do Brasil passaram a bloquear a porta 25, e começaram a usar a porta 587 para diminuir a quantidade de SPAM. O SMTP é um protocolo que faz apenas o envio de e-mails, isso significa que o usuário não tem permissão para baixar as mensagens do servidor, nesse caso é necessário utilizar um Client de e-mail que suporte os protocolos POP3 ou IMAP como o Outlook, Thunderbird e etc. Para negócios ou empresas pequenas com baixo volume de e-mails, o servidor SMTP gratuito do Google pode ser uma ótima solução e você pode usar o Gmail para enviar o seu e-mail. Eles possuem uma infraestrutura gigante e você pode confiar nos serviços deles para ficar online. Porém, mesmo sendo completamente grátis, tudo tem um limite. De acordo com a documentação do Google, você pode enviar até 100 e-mails a cada período de 24 horas quando envia através do servidor SMTP deles.  Ou você também pode pensar nisso como sendo 3 mil e-mails por mês gratuitamente.Dependendo de quantos e-mails você envia ou do tamanho do seu negócio, isto pode ser mais do que suficiente. Se você envia mais de 5 mil e-mails por mês, você vai preferir usar um serviço de e-mail transacional de terceiros ou um serviço premium. Nesse projeto foi utilizado o `nodemailer` para envio de e-mail e o `nodemailer-express-handlebars` para o tratamento de templates de e-mail. Os testes foram feitos utilizando o serviço do `mailtrap.io`.

> Para instalar o Mongoose utilize o commando abaixo:
```shell
npm install nodemailer
npm install nodemailer-express-handlebars
```

Exemplo de implementação:
```js
const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');

const mailConfig = {host, port, user, pass} = require('../config/mail.json');

const transport = nodemailer.createTransport ({
 host,
 port,
 auth: { user, pass },
});

transport.use('compile', hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve('./src/static/')
    },
    viewPath: path.resolve('./src/static/'),
    extName: '.html',
  }));


module.exports= transport
```
As configurações da aplicação estão no `config/mail.json`

```js
{
    "host" : "smtp.mailtrap.io",
    "port":  2525,
    "user":"usuario",
    "pass":"senha"
}
```

Para enviar e-mail utilize o método

```js
    const contato = mailer.sendMail(
      {
        to: email,
        from: "email@email.com",
        template: "emailContato",
        context: { email , mensagem , assunto },
      },
      (err) => {
        if (err) throw new Error("Erro no mailer:");
      }
    );
```

O template de e-mail fica na pasta `/static/emailContato.html`

```html
<p>
    E-mail de contato<br>
    Remetente: {{email}}<br>
    Assunto: {{assunto}} <br>
    Mensagem: {{mensagem}}
</p>
```