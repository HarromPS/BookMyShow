const express=require("express");
const app=express();
const port=3001;

const http = require("http");
app.set("view engine","html");
//app.set("views", path.join(__dirname, "./template");

app.get("/",(req,res)=>{
    res.render('template/home');
    //res.send("Hello");
});

app.listen(port, () => {
	  console.log(`Example app listening on port ${port}`)
});
