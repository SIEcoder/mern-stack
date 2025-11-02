// OS Modules

const os = require('os')

// Get info about current user
const user = os.userInfo()
//console.log(user)

// Return the system uptime in seconds
console.log(`The system uptime in seconds at this time is: ${os.uptime} seconds`)

function checkSystemUptime(){
    let hasRemainder = false
    if (os.uptime > 60 && os.uptime < 3600){
            uptime = os.uptime/60
            uptimeDenomination = 'seconds'
        }
        else if (os.uptime > 3600 && os.uptime < 86400){
            uptime = os.uptime/3600
            uptimeDenomination = 'hours'
        }
        else {
            uptime = os.uptime/86400
            uptimeDenomination = 'days'
        }
    console.log(`The system uptime is: ${parseFloat(uptime.toFixed(2))} ${uptimeDenomination}`)
    console.log(typeof(parseFloat(uptime.toFixed(2))))
}
  
checkSystemUptime()
// fetch other os data
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)