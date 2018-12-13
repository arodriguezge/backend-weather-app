const yargs = require('yargs')
const argv = yargs
    .command('temperature', 'Returns temperature in the given location', {
        location: {
            desc: 'Location to fetch weather for',
            alias: 'l',
            hidden: false,
            demandOption: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv

const command = argv._[0]
const geocode = require('./geocode/geocode')

if (command === 'temperature') {
    geocode.getLocation(argv.location)
} else {
    console.log('command not found')
}