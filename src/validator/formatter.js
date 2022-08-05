
let s = ("   HeLlo  FuNCtioNup   ")

function upr() {
    let result = s.toUpperCase();
    console.log(result)
}

let trm = function() {
    let result2=s.trim();
    console.log(result2)
}
let lwr = function() {
    let result3=s.toLowerCase();
    console.log(result3)
    
}


module.exports.str = s
module.exports.trm = trm
module.exports.upr = upr
module.exports.lwr = lwr
