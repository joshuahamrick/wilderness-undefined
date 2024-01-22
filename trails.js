const getTrailLogs = (trailTotals, shortTrails, longests, expenses, inexpenses, bjornsTrailss) => {
    logIntrops(trailTotals, shortTrails, longests)
    consoleLoops(bjornsTrailss, expenses, inexpenses)

}
const logIntrops = (trailTotals, shortTrails, longests) => {
    console.log(`We service ${trailTotals} kilos of wilderness trails across the US.  
            \nThe shortest trail is ${shortTrails} kilometers.
            \nThe longest trail is ${longests} kilometers.
            \nThe most expensive trails are`)
}

const consoleLoops = (bjornsArr, expenses, inexpenses) => {
    for (const pricey of expenses) {
        console.log(`\t\t${pricey.trailName}`)
    } 
    console.log(`The least expensive trails are`)
    for (const pricey of inexpenses) {
        console.log(`\t\t${pricey.trailName}`)
    }
    console.log('TRAIL DETAILS: \n---------------------------------')
    for (const trail of bjornsArr) {
        console.log(`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long.
    The highlighted plant for the trip is ${trail.plantHighlight}.`)
    }
}
module.exports = {
    getTrailLogs }