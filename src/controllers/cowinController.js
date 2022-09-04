let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByDistrictId = async function (req, res) {
    try {
        let dId = req.query.districtId
        let date = req.query.date
        console.log(`query params are: ${dId} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${dId}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let sortCities = async function(req,res){
    let cities = ["Bangluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let citiesObj = []
    for (let i = 0; i = cities.length; i++) {
        let object = { city: cities[i] }
        let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=61d34fab6e7fab12ffbf8a67e3647e29`)
        object.temp = res.data.main.temp
        citiesObj.push(object)
    
    
    }
    let sorted = citiesObj.sort(function(a,b){return a.temp - b.temp})
    res.status(200).send({status:true,data:sorted})

}



let memeHandler = async function (req, res) {
    let text0 = req.query.text0
    let text1 = req.query.text1
    let option = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?text 0=${text0} &text 1=${text1}&username=chewie12345&password=meme@123'`
    }
    let result = await axios(options)
    res.send({ data: result.data })
}



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistrictId = getByDistrictId
module.exports.sortCities=sortCities
module.exports.memeHandler = memeHandler



