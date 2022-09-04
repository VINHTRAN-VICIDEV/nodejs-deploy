const express = require("express");
const http = require('http');
const app = express();

const requestListener = function (req, res) {
    res.writeHead(200);
    res.send('http server');
  }
  const server = http.createServer(requestListener);
  server.listen(80);

app.get("/", (req, res)=>{
    res.send("hello word")
})
app.get("/new", (req, res)=>{
    res.send("hello new")
})
app.listen(process.env.PORT || 5000,()=>{
    console.log("running in :", process.env.POR)
});
module.exports = app