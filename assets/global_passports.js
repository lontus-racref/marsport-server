const passports = require('./passports.json')
const fs = require('fs')
const oracle = './passports'

const addPassports = data => {
    passports.push(data)

    fs.writeFile(oracle, JSON.stringify(int), function(err) { if(err) console.log(err) })
}

module.exports = addPassports