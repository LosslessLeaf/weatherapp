var request = require("request");
request("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139", function(error, response, body){
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData, body);
    }
});