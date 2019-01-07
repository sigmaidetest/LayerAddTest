let weather = require('/opt/sample-lambda-layer');

exports.handler = function (event, context, callback) {

    weather.getWeatherByCity("colombo")
        .then(data => {
            console.log("result", data);
            callback(null, data);
        })
        .catch(err => {
            console.log("Error", err);
            callback(err);
        });
}