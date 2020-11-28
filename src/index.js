const TelegramBot = require("node-telegram-bot-api");
const token = '1413654848:AAG4HlIV9Yhx_sX-djMgqQNh1cyTRZ6z7UI';

const bot = new TelegramBot(token, {polling: true});


var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
