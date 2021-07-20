const request= require('request');

const geocode = (address, cb)=> {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiY2F0MjAyMCIsImEiOiJja3IzNmtubnkweTVlMm5vanE2dTZ5dHoxIn0.TWcPmnf1IswsKuOsxxyjTQ`
   request({url, json: true},(error, {body})=>{
     if(error){
       cb('wrong',undefined)
     }else if(body.message=='Forbidden'|| body.features.length===0){
       cb('unable to search location, try again',undefined)
     }else{
       cb(undefined, {
         latitude: body.features[0].center[0],
         longitude:body.features[0].center[1],
         location: body.features[0].place_name
       })
     }
   })
 }

 module.exports=geocode;