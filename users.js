supb = require('@supabase/supabase-js');
const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();

const jsonParser = express.json();
router.route('/:id')
  .get((req, res) => {
    console.log('Request Type:', req.method);
    console.log('Запрос на получение юзера: ' + req.params.id);
    if (req.params.id == 'all') {
      console.log("(запрос на все)");
      let r = GetUsers();
      r
        .then(
          result => res.send("{\"status\": \"0\", \"data\": " + JSON.stringify(result) + "}"),
          error => res.send("{\"status\": \"1\", \"data\": \"null\"}")
        );
    }
    else {
      let r = GetUser(req.params.id);
      r
        .then(
          result => res.send("{\"status\": \"0\", \"data\": " + JSON.stringify(result) + "}"),
          error => res.send("{\"status\": \"1\", \"data\": \"null\"}")
        );
    }
  })
  .put(jsonParser, (req, res) => {
    console.log('Request Type:', req.method);
    console.log('Запрос на изменение юзера: ' + req.params.id);
    let r = UpdateUser(req.body.Name, req.params.id, req.body.EmailSec, req.body.Achiv, req.body.Info);
      r
        .then(
          result => res.send("{\"status\": \"0\", \"data\": " + JSON.stringify(result) + "}"),
          error => res.send("{\"status\": \"1\", \"data\": \"null\"}")
        );
  })
  .delete(jsonParser, (req, res) => {
    console.log('Request Type:', req.method);
    console.log('Запрос на удаление юзера: ' + req.params.id);
    let r = DeleteUser(req.params.id);
      r
        .then(
          result => res.send("{\"status\": \"0\", \"data\": " + JSON.stringify(result) + "}"),
          error => res.send("{\"status\": \"1\", \"data\": \"null\"}")
        );
  });

router.use('/:id/edit', function (req, res) {
  console.log('Request Type:', req.method);
  console.log('id/edit: ' + req.params.id);
  let r = GetUser(req.params.id);//Это дополнительный запрос - если юзера не оказалось в базе данных, то вместо страницы просмотра показывается ошибка.
  r
    .then(
      result => result.length == 1 ? res.sendFile(__dirname + '\\edit.html') : res.sendFile(__dirname + '\\error.html'),
      error => res.sendFile(__dirname + '\\error.html')
    );
});

router.use('/:id/view', function (req, res) {
  console.log('Просмотр юзера', req.params.id);
  let r = GetUser(req.params.id);//Это дополнительный запрос - если юзера не оказалось в базе данных, то вместо страницы просмотра показывается ошибка.
  r
    .then(
      result => result.length == 1 ? res.sendFile(__dirname + '\\view.html') : res.sendFile(__dirname + '\\error.html'),
      error => res.sendFile(__dirname + '\\error.html')
    );
});


const supabaseUrl = 'https://dasnewjdyuqoqsntatue.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhc25ld2pkeXVxb3FzbnRhdHVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE1NjAwNDksImV4cCI6MTk2NzEzNjA0OX0.Y1Us9nD1c0rJS4Tdh5HGGufsD4q9PkGrmxJo1u78dx4'
const supabase = supb.createClient(supabaseUrl, supabaseKey)

UpdateUser = async function (name, id, email2, achiv, info){
  const resp = await supabase
  .from('User')
  .update({ Name: name, EmailSec: email2, Achievements: achiv, Info: info })
  .eq('ID', id);
  if (resp.error == null) {
    console.log("Юзер успешно изменен");
    return 0;
  }
  else {
    console.log("Юзер не изменен (хз поч).");
    return 1;
  }
}

DeleteUser = async function (id) {
  const resp = await supabase
  .from('User')
  .delete()
  .eq('ID', id);
  if (resp.error == null) {
    console.log("Юзер успешно удален");
    return 0;
  }
  else {
    console.log("Юзер не удален (хз поч).");
    return 1;
  }
}

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
    .match({ ID: id });
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