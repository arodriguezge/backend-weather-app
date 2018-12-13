const axios = require('axios')
const weather = require('../weather/weather')

getLocation = (location) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(location)}&key=AIzaSyBmED3bBLrIOIN2086bbwDlfgeGyq63rKU`)
    .then(res => {
        if (res.data.status === 'OK') {
            let lat = res.data.results[0].geometry.location.lat
            let lng = res.data.results[0].geometry.location.lng
            let addr = res.data.results[0].formatted_address
            weather.getWeather(lat, lng, addr)
        } else {
            console.log('Ups, something went wrong. Please check the location you wrote.')
        }
    })
    .catch(err => console.log(err))
}

module.exports = {
    getLocation
}