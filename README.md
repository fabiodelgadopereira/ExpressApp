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
