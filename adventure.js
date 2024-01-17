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



getTrailLogs()
showRivers()
module.exports = {
    trailTotal,
    riverTotal,
    longest,
    expense,
    inexpense,
    shortRiver,
    bjornsRivers,
    shortTrail,
    longestRiver, 
    expenseRiver, 
    inexpenseRiver,
    bjornsTrails
}

/* let riversNTrails = {
    trailTotal: trailTotal,
    riverTotal: riverTotal, 
    longest: longest, 
    expense: expense, 
    inexpense: inexpense, 
    shortRiver: shortRiver, 
    bjornsRivers: bjornsRivers,
    shortTrail: shortTrail,
    longestRiver: longestRiver, 
    expenseRiver: expenseRiver, 
    inexpenseRiver: inexpenseRiver,
    bjornsTrails: bjornsTrails
} */