const request = require('request');

const forecast =(lat, long, cb)=>{
  const url = `http://api.weatherstack.com/current?access_key=29adf05d8b347cc64ab3606c896cb74a&query=${long},${lat}`
  console.log(url)
  request({url, json: true},(error,response)=>{
    if(error){
      cb('wrong',undefined)
    }
    else if (response.body.error){
      cb('unable to search location',undefined)
    }
    else{
      cb(undefined,`It is currently ${response.body.current.temperature} degrees, in the country of ${response.body.location.country} and the humidity is ${response.body.current.humidity}.`)
    }
  } )

}


module.exports = forecast;