const trails = []

const getTrails = () => {
    return trails
}

const rivers = []
const getRivers = () => {
    return rivers
}
const wildlife = [{
    id: 1,
    price: "$$$$",
    latitude: 57.6055534,
    longitude: 12.2028691,
    uniqueFish: "Hystrix indica",
    river: "Eleven Point National Scenic River",
    length: 22
}]
const getWildlife = () => {
    return wildlife
}

module.exports = { 
    getTrails, getRivers, getWildlife}