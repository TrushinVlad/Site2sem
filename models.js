const express = require('express');
const router = express.Router();

router.all('/', (req, res) =>{
  console.log('Запрос на модели');
  res.send('<h1>Таблица всех моделей</h1>')
});

router.use('/:id', function (req, res, next)
{
  console.log('Request Type:', req.method);
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
  <body><h1>Запрос на конкретную модель</h1></body>
  <html>`
);
next();
});

router.route('/:id')
  .get((req, res) => {
    res.send(`<h1>Запрос: получить модель ID = ${req.url}</h1>`);
    console.log('Запрос');
  })
  .put((req, res) => {
    res.send(`<h1>Запрос: добавить модель ID = ${req.url}</h1>`);
    console.log('Запрос');
  })
  .delete((req, res) => {
    res.send(`<h1>Запрос: удалить модель ID = ${req.url}</h1>`);
    console.log('Запрос');
  });

module.exports = router;