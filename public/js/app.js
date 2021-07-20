

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//   response.json().then((data)=>{
//     console.log(data)
//   })
// })

// fetch('http://localhost:3000/weather?address=boston').then((response)=>{
//   response.json().then((data)=>{
//   if(data.error){
//     console.log(data.error)
//   }else{
//     console.log(data.location)
//     console.log(data.forecast)
//   }
//   })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent=''
weatherForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const location = search.value
  messageOne.textContent='Loading...'
  messageTwo.textContent=''
fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
  console.log(response)
  response.json().then((data)=>{
  if(data.error){
    messageOne.textContent=data.error
    // console.log(data.error)
  }else{
    // console.log(data.location)
    // console.log(data.forecast)
    messageOne.textContent=data.location
    messageTwo.textContent=data.forecast
  }
  })
})
})

// function lala(){

// fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/boston.json?access_token=pk.eyJ1IjoiY2F0MjAyMCIsImEiOiJja3IzNmtubnkweTVlMm5vanE2dTZ5dHoxIn0.TWcPmnf1IswsKuOsxxyjTQ')
// .then((response)=>{
//   response.json().then((data)=>{
//     if(!data){
//       console.log(data.body.error)
//     }
//     console.log(data)
//  const long = data.features[0].center[1]
//  const lat = data.features[0].center[0]

//  fetch(`http://api.weatherstack.com/current?access_key=29adf05d8b347cc64ab3606c896cb74a&query=${lat},${long}`)
//  .then((response)=>{
//    console.log(response)
//    response.json().then((response)=>{
//      if(!response){
//        console.log(response.body.error)
//      }
//      console.log(response.body.current.temperature)
//    })
//  })
//   })
// })
// }
// lala();

  //   fetch(`http://api.weatherstack.com/current?access_key=29adf05d8b347cc64ab3606c896cb74a&query=${long},${lat}`)
  // .then((response)=>{
  //   response.json().then((data)=>{
  //     if(!data){
  //       console.log(data.body.error)
  //     }
  //     console.log(data.body.current.temperature)
  //   })
  // })
