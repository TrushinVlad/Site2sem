supb = require('@supabase/supabase-js');
const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();

router.use('/:id/edit', function (req, res) {
  console.log('Request Type:', req.method);
  console.log('Редактирование: ' + req.params.id);
});

router.use('/:id', function (req, res) {
  console.log('Request Type:', req.method);
  if (req.params.id == 'all') {
    console.log("Запрос на все");
    let r = GetUsers();
    r
      .then(
        result => res.send("{\"status\": \"0\", \"data\": " + JSON.stringify(result) + "}"),
        error => res.send("{\"status\": \"1\", \"data\": \"null\"}")
      );
  }
  else {
    console.log("Запрос на модель " + req.params.id);
    let r = GetUser(req.params.id);
    r
      .then(
        result => res.send(
          `<!DOCTYPE html>
<html>
	<head>
		<title>Главная</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
		<meta charset="utf-8" />
	</head>
	<body style="margin: 10px 10px;">
        <h1>` + result[0].Name + ` [` + result[0].ID + `]</h1>
        <h3>Контакты</h3>
		<p>Почта: ` + result[0].Email + `</p>
		<p>Доп. почта: ` + result[0].EmailSec + `</p>
        <h4>Информация</h4>
		<p>` + result[0].Info + `</p>
        <h4>Дополнительные достижения</h4>
		<p>` + result[0].Achievements + `</p>
        <button type="button" class="btn btn-info" onclick="location.href='/'">Назад</button>
        <button type="submit" class="btn btn-info" id="Edit" onclick="location.href='/users/` + result[0].ID + `/edit'">Редактировать</button>
	</body>
</html>`

        ),
        error => res.send(
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
        </html>`
        )
      );

  }
});


const supabaseUrl = 'https://dasnewjdyuqoqsntatue.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhc25ld2pkeXVxb3FzbnRhdHVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE1NjAwNDksImV4cCI6MTk2NzEzNjA0OX0.Y1Us9nD1c0rJS4Tdh5HGGufsD4q9PkGrmxJo1u78dx4'
const supabase = supb.createClient(supabaseUrl, supabaseKey)

AddUser = async function (name, email, email2, achiv, info) {
  const resp = await supabase
    .from('User')
    .insert([{ Name: name, Email: email, EmailSec: email2, Achievements: achiv, Info: info }]);
  if (resp.error == null) {
    console.log("Юзер успешно добавлен");
    return 0;
  }
  else {
    if (resp.error.code == '23505') {
      console.log("Юзер не добавлен: уже есть такая почта.");
      return 2;
    }
    return 1;
  }
};

GetUser = async function (id) {
  let { data: User, error } = await supabase
    .from('User')
    .select('*')
    .match({ID: id});
  console.log(User);
  return User;
}

GetUsers = async function () {
  let { data: User, error } = await supabase
    .from('User')
    .select('*');
  console.log(User);
  return User;
}

module.exports = router;