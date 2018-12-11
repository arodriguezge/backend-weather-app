const yargs = require('yargs')
const argv = yargs.argv

const command = argv._[0]
const geocode = require('./geocode/geocode')

// 't' command to get temperature
if (command === 't') {
    geocode.getLocation(argv.location)
} else {
    console.log('command not found')
}