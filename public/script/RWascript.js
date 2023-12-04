function rweatherChoice() {
    let city = document.getElementById("city").value 
    fetch(`/rweather/${city}`)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json)
        const rweather = json[0]

        const rweatherContainer = document.getElementById("rweather-container")
        let userChoice = document.getElementById("city")
        
        //json.forEach((rweather) => {
            const weatherDiv = document.createElement("div")
            const wheaderTag = document.createElement("h1")
            const weatherTag = document.createElement("h2")
            const wcontentTag = document.createElement("h3")
            const rwcontentTag = document.createElement("p")
        
            wheaderTag.innerText = json.city
            weatherTag.innerText = json.temp
            wcontentTag.innerText = json.condition
            rwcontentTag.innerText = json.precipitation

            weatherDiv.appendChild(wheaderTag)
            weatherDiv.appendChild(weatherTag)
            weatherDiv.appendChild(wcontentTag)
            weatherDiv.appendChild(rwcontentTag)

            rweatherContainer.appendChild(weatherDiv)
        //})
    })
    .catch((error) => {
    console.log(error)
    })
}