const axios = require('axios')

getWeather = (lat, lng, addr) => {
    axios.get(`https://api.darksky.net/forecast/19380bd7d0798a0fe282f277a613c6c7/${lat},${lng}`)
    .then(res => {
        if (res.status === 200) {
            console.log(`In ${addr} the temperature is ${Number(((res.data.currently.temperature - 32) / 1.8).toFixed(2))} degrees Celsius`)
        } else {
            console.log('Ups, something went wrong. Please try again later or contact your developer.')
        }
    })
    .catch(err => console.log(err))
}

module.exports = {
    getWeather
}