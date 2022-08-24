// Code your solution here

function findMatching(driversArray, string) {
    return driversArray.filter((driverName) => driverName.toLowerCase().includes(string.toLowerCase()))
}

function fuzzyMatch(driversArray, string){
    let stringLength = string.length
    return driversArray.filter(function(name) {
        return name.slice(0, stringLength) === string
    })
}

function matchName(driverObjects, string){
    return driverObjects.filter(function(element) {
        return element.name === string
    })
}