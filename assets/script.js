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
        //now retriving data
       let main = data.main
       console.log(main)

       let humidity = main.humidity
       let humidityHTML = document.querySelector('humidityData')
       humidityHTML.innerHTML= humidity;
       console.log(humidity)
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