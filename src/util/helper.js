let today = new Date();
let info =  ("Batch name is Plutonium, 3rd week Day 5, topics taught- intro to nodejs")
let day = function() {
    console.log(today)
}

let batchInfo = function() {
    console.log(info)
}

module.exports.name = today
module.exports.information = info
module.exports.batch = batchInfo
module.exports.dy = day
