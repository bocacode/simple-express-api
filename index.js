const express = require('express')

const app = express()

const cars = [
  { make: 'Tesla', year: 2023, model: 'x' },
  { make: 'mercedes', year: 2021, model: 'G-Wagon' },
  { make: 'nissan', year: 2025, model: 'G-Wagon' },
  { make: 'audi', year: 2008, model: 'G-Wagon' },
  { make: 'gmc', year: 2022, model: 'G-Wagon' },
]

// get all cars
app.get('/', (request, response) => {
  response.send(cars)
})

// get only my future Audi
app.get('/car/:carId', (request, response) => {
  console.log('this is my request.params ======>>>>', request.params)

  // extracting carId from request.params
  const { carId } = request.params

  response.send(cars[carId])
})

app.listen(3000, () => {
  console.log('API listening on port 3000')
})






/// this is just a comment 