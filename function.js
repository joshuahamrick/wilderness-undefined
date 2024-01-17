

// Get the sum of all trail miles
const totalTrailMiles = (arr) => {
    let total = 0
    for (const trail of arr) {
        total += trail.length
    }

    return total
}

// Get the shortest of all trails
const shortestTrail = (trailArray) => {
    let shortest = longTrail(trailArray)
    for (const trail of trailArray) {
        if(trail.length < shortest) {
            shortest = trail.length
        }
    }

    return shortest
}
/* const shortestTrail = (trailArray) => {
    shortestLength = 0
    for (const trail of trailArray){
        if (trail.length > shortestLength) {
            shortestLength = trail.length
        }
    }
    }*/ 
// Get the longest of all trails
const longTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if(trail.length > longest) {
            longest = trail.length
        }
    }

    return longest
}
//*********************************************************

//finds the total river miles
const totalRiverMiles = (riversParam) => {
    let total = 0
    for (const river of riversParam) {
        total += river.length
    }

    return total
}
//finds the shortest river
const shortestRiver = (riversParam) => {
    let shortest = longRiver(riversParam)
    for (const river of riversParam) {
        if(river.length < shortest) {
            shortest = river.length
        }
    }

    return shortest
}
//finds the longest river
const longRiver = (riversParam) => {
    let longest = 0
    for (const river of riversParam) {
        if(river.length > longest) {
            longest = river.length
        }
    }

    return longest
}

const mostExpensive = (array) => {
    let expensive = []
    for (const tour of array) {
        if (tour.price.length >= 4)
        expensive.push(tour.trailName)
    }
    return expensive
}


const leastExpensive = (array) => {
    let inexpensive = []
    for (const tour of array) {
        if (tour.price.length <= 1) {
            inexpensive.push(tour.trailName)
        }
       
    }
    return inexpensive
}

//******************************************
const mostExpensiveRiver = (array) => {
    let expensive = []
    for (const tour of array) {
        if (tour.price.length >= 4)
        expensive.push(tour.river)
    }
    return expensive
}


const leastExpensiveRiver = (array) => {
    let inexpensive = []
    for (const tour of array) {
        if (tour.price.length <= 1) {
            inexpensive.push(tour.river)
        }
       
    }
    return inexpensive
}
 module.exports = {
    totalTrailMiles, shortestTrail, longTrail, totalRiverMiles, shortestRiver, longRiver,
    mostExpensive, leastExpensive, mostExpensive, mostExpensiveRiver, leastExpensiveRiver
 }