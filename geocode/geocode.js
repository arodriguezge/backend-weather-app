const axios = require('axios')
const weather = require('../weather/weather')

getLocation = (location, options) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(location)}&key=AIzaSyBmED3bBLrIOIN2086bbwDlfgeGyq63rKU`)
    .then(res => {
        if (res.data.status === 'OK') {
            let lat = res.data.results[0].geometry.location.lat
            let lng = res.data.results[0].geometry.location.lng
            let addr = res.data.results[0].formatted_address
            if (options && (options.hourly || options.daily)) {
                weather.getWeather(lat, lng, addr, options)
            } else {
                weather.getWeather(lat, lng, addr, null)
            }
        } else {
            console.log('Ups, something went wrong. Please check the location you wrote.')
        }
    })
    .catch(err => console.log(err))
}

module.exports = {
    getLocation
}