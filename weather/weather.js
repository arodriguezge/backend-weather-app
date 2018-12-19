const axios = require('axios')

getWeather = (lat, lng, addr, options) => {
    axios.get(`https://api.darksky.net/forecast/19380bd7d0798a0fe282f277a613c6c7/${lat},${lng}`)
    .then(res => {
        if (res.status === 200) {
            let date = new Date()
            if (options && options.hourly) {
                for (let i in res.data.hourly.data) {
                    date.setTime((res.data.hourly.data[i].time) * 1000)
                    console.log(`In ${addr}, on ${date.toLocaleDateString()} at ${date.getHours()} will be ${Number(((res.data.hourly.data[i].temperature - 32) / 1.8).toFixed(2))} degrees Celsius`)
                }
            } else if (options && options.daily) {
                for (let i in res.data.daily.data) {
                    date.setTime((res.data.daily.data[i].time) * 1000)
                    console.log(`In ${addr}, on ${date.toLocaleDateString()} the lowest temperature will be ${Number(((res.data.daily.data[i].temperatureLow - 32) / 1.8).toFixed(2))} degrees Celsius and the highest temperature will be ${Number(((res.data.daily.data[i].temperatureHigh - 32) / 1.8).toFixed(2))} degrees Celsius`)
                }
            } else {
                console.log(`In ${addr} the temperature is ${Number(((res.data.currently.temperature - 32) / 1.8).toFixed(2))} degrees Celsius`)
            }
        } else {
            console.log('Ups, something went wrong. Please try again later or contact your developer.')
        }
    })
    .catch(err => console.log(err))
}

module.exports = {
    getWeather
}