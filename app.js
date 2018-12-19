const geocode = require('./geocode/geocode')
const yargs = require('yargs')
const argv = yargs
    .command('temperature', 'Returns temperature in the given location')
    .command('weather', 'Returns hourly or daily weather report in the given location', {
        hourly: {
            desc: 'Returns hourly weather report in the given location',
            default: false
        },
        daily: {
            desc: 'Returns daily weather report in the given location',
            default: false
        }
    })
    .help()
    .alias('help', 'h')
    .argv

let location = argv._[0]
let command = argv._[1]
let options = {
    hourly: true,
    daily: false
}

if(argv.daily === true) {
    options = {
        hourly: false,
        daily: true
    }
}

if (location === undefined || location === 'weather' || location === 'temperature') {
    console.log('Please specify a location')
} else {
    if (command === 'temperature' || command === undefined) {
        geocode.getLocation(location)
    } else if (command === 'weather'){
        geocode.getLocation(location, options)
    } else {
        console.log('command not found')  
    }
}