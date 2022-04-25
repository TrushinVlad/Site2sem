const http = require("http");
const fs = require("fs");

http.createServer(async (request, response) => {

  try {
    let options = request.url.split(/number1=|&number2=/);
    console.log("=== " + new Date() +" ===");
    console.log(options[1]);
    console.log(options[2]);
    console.log("------------------------------------------\n");
          if (options[0] == '/?') {
          console.log(Number(options[1]) + Number(options[2]));
          response.writeHead(200, {'Content-Type': 'application/json'});
          let json = {
                    name: 'VladTrue',
                    number1: options[1],
                    number2: options[2],
                    sum: Number(options[1]) + Number(options[2]),
                    min: Number(options[1]) - Number(options[2]),
                    mul: Number(options[1]) * Number(options[2]),
                    div: Number(options[1]) / Number(options[2])
                  };
          response.end(JSON.stringify(json));
          }
          else {
            fs.readFile("index.html", (error, data) => response.end(data));
          }
  }
  catch {
          response.writeHead(400, {'Content-Type': 'application/json'});
          let json = {
            name: 'VladTrue',
            desc: "Error 400"
          };
          response.end(JSON.stringify(json));
  }


}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));
