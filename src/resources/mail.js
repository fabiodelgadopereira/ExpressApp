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