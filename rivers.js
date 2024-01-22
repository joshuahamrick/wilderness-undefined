const showRivers = (riverTotals, shortRivers, longestRivers, expenseRivers, inexpenseRivers, bjornsRiverss) => {
    console.log(riverTotals)
    console.log(shortRivers)
    console.log(longestRivers)
    console.log(`The most expensive river tours are`)
for (const pricey of expenseRivers) {
    console.log(`\t\t${pricey.river}`)
}
console.log(`The least expensive river tours are`)
for (const pricey of inexpenseRivers) {
    console.log(`\t\t${pricey.river}`)
}
console.log(`RIVER DETAILS:
    \n---------------------------------`)
for(const river of bjornsRiverss) {
    console.log(`${river.river} starts at [${river.latitude}, ${river.longitude}] and is ${river.length} kilometers long.
    The unique fish for the trip is ${river.uniqueFish}.`)
}
}

      
module.exports = {
    showRivers
}