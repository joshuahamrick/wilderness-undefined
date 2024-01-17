const { getTrails, getRivers, getWildlife } = require("./data.js")
const {totalTrailMiles, shortestTrail, longTrail, totalRiverMiles, shortestRiver, longRiver,
    mostExpensive, leastExpensive, mostExpensiveRiver, leastExpensiveRiver} = require("./function.js")
const {art} = require("./displayHead.js")
const {getTrailLogs} = require("./trails.js")
const {showRivers} = require("./rivers.js")

    const bjornsTrails = getTrails()
    const bjornsRivers = getRivers()
    const bjornsWildlife = getWildlife()
    console.log(art)




const trailTotal = totalTrailMiles(bjornsTrails)
const shortTrail = shortestTrail(bjornsTrails)
const longest = longTrail(bjornsTrails)
const riverTotal = totalRiverMiles(bjornsRivers)
const shortRiver = shortestRiver(bjornsRivers)
const longestRiver = longRiver(bjornsRivers)
let expense = mostExpensive(bjornsTrails)
let inexpense = leastExpensive(bjornsTrails)
let expenseRiver = mostExpensiveRiver(bjornsRivers)
let inexpenseRiver = leastExpensiveRiver(bjornsRivers)

//trailTotal, shortTrail, longest, expense, inexpense


//, returnExpense, returnInexpense
getTrailLogs()
showRivers()
module.exports = {
    trailTotal, riverTotal, longest, expense, inexpense, shortRiver, 
    bjornsRivers, shortTrail,  
    longestRiver, expenseRiver, inexpenseRiver, bjornsTrails 
}
