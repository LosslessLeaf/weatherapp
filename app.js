var express = require("express");
var app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res) {
    res.render(`home`);
});


app.get("/weather", function(req, res) {
    res.render("weather");
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening");
});
