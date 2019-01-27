var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.set("view engine", "ejs");


app.get("/", function(req, res) {
    res.render("search");
});

app.get("/weather", function(req, res) {
    var lat = req.query.lat;
    var long = req.query.long;
    var url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("weather", { data: data });
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening");
});
