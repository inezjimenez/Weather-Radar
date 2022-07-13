var apiKey = '7989c5686318d806c49f5bd964d1a3e3'
//take city name and make a value

document.getElementById("search-button").onclick = function() {
    let searchedValue = document.querySelector("#search-bar")
    let city_name = searchedValue.value
    //passing city name to search function and install in fetch
    search(city_name)
}

let search = (city_name) =>  {

    var apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=imperial&appid=${apiKey}`
    fetch(apiUrl).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(data){
        //now retrieving data

       let weather = data.weather[0]
       console.log(weather)

       let main = data.main
       console.log(main)
       
       let wind = data.wind
       console.log(wind)

       let city = main.name
       let cityHTML = document.createElement("city-name")
       cityHTML.innerHTML = city
       console.log(city_name)
       document.querySelector(".city").innerText ="Weather in " + city_name;

       let temp = main.temp
       let tempHTML = document.createElement("temp")
       tempHTML.innerHTML = temp
       document.querySelector(".temp").innerText = temp + "°F";

       let humidity = main.humidity
       let humidityHTML = document.createElement("humidityData")
       humidityHTML.innerHTML= humidity;
       console.log(humidity)
       document.querySelector(".humidity").innerText = "Humidity :" + humidity +"%";
       
       let description = weather.description
       let descriptionHTML = document.createElement("description")
       descriptionHTML.innerHTML = description
       console.log(description)
       document.querySelector(".description").innerText = "" + weather.description;

       let speed = wind.speed
       let speedHTML = document.createElement("speed")
       speedHTML.innerHTML= wind
       console.log(speed)
       document.querySelector(".speed").innerText = "Wind : " + wind.speed + "mph";
    })
    
} 

// Data Structures

// Object

// {feels_like: 79.57
//humidity: 29
//pressure: 1011
//temp: 79.57
//temp_max: 81.79
//temp_min: 75.81}

// Array
//[12 , 33, 11] [{}, {}, {}] ['cat', 'dog']


//Function
// let search = function () {fetch, hold data, push data to the dom, take data from the dom}

// Variables 
// let main = data.main
//var main = data.main
//const main = data.main