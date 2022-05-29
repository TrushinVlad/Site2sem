const express = require('express');
const app = express();

app.use(express.static(__dirname + '/styles'));

app.listen(3000, () => {
  console.log('Сервер запущен по адресу http://localhost:3000');
});

app.get('/', (req, res) => {
  console.log("=== Просто так, " + new Date() +" ===");
  res.sendFile(__dirname + '\\index.html');
});

app.get('/reg', (req, res) => {
  console.log("=== Страница регистрации, " + new Date() +" ===");
  res.sendFile(__dirname + '\\reg.html');
});
const jsonParser = express.json();
app.post('/users/new', jsonParser, (req, res) => {
  console.log('Request Type:', req.method);
  let r = AddUser(req.body.Name, req.body.Mail, req.body.Mail2, req.body.Achiv, req.body.Info);
  r
  .then(
    result => res.send("{\"status\": \"" + result + "\"}"),
    error => res.send("{\"status\": \"255\"}")
  );
});

const users = require('./users');
app.use('/users', users);