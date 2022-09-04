const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("hello word")
})
app.get("/new", (req, res)=>{
    res.send("hello new")
})
app.listen(process.env.PORT || 5000,()=>{
    console.log("running in :", process.env.PORT)
});
module.exports = app