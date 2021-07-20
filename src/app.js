const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require ('./utils/forecast')

// console.log(__dirname)
// console.log(__filename)
const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'hbs')

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))
// app.get('',(req,res)=>{
//   res.send('hello express!')
// })
app.get('', (req,res)=>{
  res.render('index',{
    title:'Weather App',
    name: 'Lulu'
  })
})

app.get('/about',(req,res)=>{
  res.render('about',{
    title:'About',
    name:'lulu'
  })
})
app.get('/help',(req,res)=>{
  res.render('help',{
    title:'Help',
    name: 'lulu'
  })
})

// app.get('/about', (req,res)=>{
//   res.send('<h1>About<h1>')
// })
app.get('/weather',(req,res)=>{
  if(!req.query.address){
    return res.send({
      error:'you must provide an address'
    })
  }
  geocode(req.query.address, (error, {latitude, longitude,location}={})=>{
   if (error){
     console.log(error)
     return res.send({error})
   }
   forecast(latitude, longitude, (error, forecastData)=>{
    
     if(error){
       return res.send({error})
     }

     res.send({
       forecast: forecastData,
       location,
       address: req.query.address
     })
   })
  })

})
  
  // forecast(geocode.latitude, geocode.longitude,(error, data)=>{
  //   console.log('error',error)
  //   console.log('data',data)
  
  // })
  //    res.send({
  //     address:req.query.address,
  //     location:geocode.location,
  //     temperature:forecast.temperature
  //   })
  


app.get('/products',(req,res)=>{
  if(!req.query.search){
    return res.send({
      error:'you must provide a search term'
    })
  }
  console.log(req.query)
  res.send({
    products:[]
  })
})

app.get('/help/*', (req,res)=>{
  res.render('404',{
    title:'404',
    name:'ll',
    error:'help page not found'
  })
})
app.get('*',(req,res)=>{
  res.render('404',{
    title:'404',
    name: 'll',
    error:'page not found'
  })
})
app.listen(port, ()=>{
  console.log(`server is up on ${port}`)
})
