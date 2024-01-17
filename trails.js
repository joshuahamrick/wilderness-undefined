const {getTrails} = require("./data.js")
const {trailTotal, shortTrail, longest, expense, inexpense} = require("./adventure.js");
const bjornsTrails = getTrails()

const getTrailLogs = () => {
    logIntrops()
    consoleLoops(bjornsTrails)

}
const logIntrops = () => {
    console.log(`We service ${trailTotal} kilos of wilderness trails across the US.  
            \nThe shortest trail is ${shortTrail} kilometers.
            \nThe longest trail is ${longest} kilometers.
            \nThe most expensive trails are`)
}

const consoleLoops = (bjornsArr) => {
    for (const pricey of expense) {
        console.log(`\t\t${pricey}`)
    } 
    console.log(`The least expensive trails are`)
    for (const pricey of inexpense) {
        console.log(`\t\t${pricey}`)
    }
    console.log('TRAIL DETAILS: \n---------------------------------')
    for (const trail of bjornsArr) {
        console.log(`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long.
    The highlighted plant for the trip is ${trail.plantHighlight}.`)
    }
}
module.exports = {
    getTrailLogs }