const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, '/public')))

app.use("*", (req, res, next) => {
    console.log(`Someone visited ${req.originalUrl} at ${Date.now()}`)
    next()
})

const rweather = [
    {
        city: "Louisville",
        temp: "63",
        condition: "Sunny",
        precipitation: "0%"
    },
    {
        city: "Chicago",
        temp: "43",
        condition: "Cloudy",
        precipitation: "20%"
    },
    {
        city: "Radcliff",
        temp: "53",
        condition: "Party Cloudy",
        precipitation: "33%"
    },
    {
        city: "New York",
        temp: "32",
        condition: "Snowy",
        precipitation: "100%"
    },
    {
        city: "Miami 🏖️",
        temp: "79",
        condition: "Sunny",
        precipitation: "0%"
    }
]

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/RWaindex.html'))
})

app.get("/rweather/:city", (req, res) => {
    const weatherName = req.params.city

    for(let i = 0; i < rweather.length; i++) {
        if(rweather[i].city === weatherName) {
            res.send(rweather[i])
        }
    }
})

app.listen(3000)
console.log("Today our forecast is showing...")