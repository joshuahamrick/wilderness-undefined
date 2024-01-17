const {riverTotal, shortRiver, longestRiver, 
    expenseRiver, inexpenseRiver, bjornsRivers} = require("./adventure.js")
const showRivers = () => {
    console.log(riverTotal)
    console.log(shortRiver)
    console.log(longestRiver)
    console.log(`The most expensive river tours are`)
for (const pricey of expenseRiver) {
    console.log(`\t\t${pricey}`)
}
console.log(`The least expensive river tours are`)
for (const pricey of inexpenseRiver) {
    console.log(`\t\t${pricey}`)
}
console.log(`RIVER DETAILS:
    \n---------------------------------`)
for(const river of bjornsRivers) {
    console.log(`${river.river} starts at [${river.latitude}, ${river.longitude}] and is ${river.length} kilometers long.
    The unique fish for the trip is ${river.uniqueFish}.`)
}
}

      
module.exports = {
    showRivers
}