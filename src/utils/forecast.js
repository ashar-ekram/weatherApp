const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=1903e18e0b391fb6b52b0496409f9c05'
    // request({url: url, json: true }, (err,res) => { 
    request({url: url, json: true }, (err,{body}) => {
        if (err) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.cod===400) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.weather[0].description + '. It is currently ' + body.main.temp + ' degress out.')
        }
    })
}

module.exports = forecast