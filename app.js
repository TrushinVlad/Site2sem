const express = require('express');
const app = express();

app.use('/styles', express.static(`public`));

app.listen(3000, () => {
  console.log('Сервер запущен по адресу http://localhost:3000');
});

app.get('/', (req, res) => {
  console.log("=== Кто-то подключился, " + new Date() +" ===");
  res.send({ message: 'Hello World' });
});

const models = require('./models');
app.use('/models', models);

app.use('/user/:id', function (req, res, next) {//При получении запроса
  console.log('Request Type:', req.method);
  res.set('Content-Type', 'text/html');
  res.send(
  `<!DOCTYPE html>
  <html>
  <head>
      <title>Главная</title>
      <meta charset="utf-8" />
  </head>
  <h1>`
  + req.baseUrl +
  `</h1>
  <h2>`
  + req.method +
  `</h2>
  <h3>`
  + req.baseUrl.substring(req.baseUrl.lastIndexOf('/') + 1) +
  `</h3>
  <body></body>
  <html>
  `);
     
  next();
});

/*
В качестве ответов из них на текущий момент
должны возвращаться документы типа text/html с
- заголовком о ресурсе
- абзаце
- URL
- указанием параметра, если он есть (/:id)
- и метода.
К документам подключена таблица стилей из папки public.
*/
