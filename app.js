const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c2d25e4b6mshd4fd7e7e0c2cbd6p15db78jsn1c4cd8c83817',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{

        cityName.innerHTML = city
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	    .then(response => response.json())
	    .then(response => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value) 
})

getWeather("New Delhi")

const Bangalore = ()=>{
    // cityName.innerHTML = "Bangalore"
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	    .then(response => response.json())
	    .then(response => {
        console.log(response)

        cloud_pct2.innerHTML = response.cloud_pct
        temp2.innerHTML = response.temp
        feels_like2.innerHTML = response.feels_like
        humidity2.innerHTML = response.humidity
        min_temp2.innerHTML = response.min_temp
        max_temp2.innerHTML = response.max_temp
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees2.innerHTML = response.wind_degrees
    })
	.catch(err => console.error(err));
}

Bangalore()

const Mumbai = ()=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	    .then(response => response.json())
	    .then(response => {
        console.log(response)

        cloud_pct3.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        min_temp3.innerHTML = response.min_temp
        max_temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
        wind_degrees3.innerHTML = response.wind_degrees
    })
	.catch(err => console.error(err));
}

Mumbai()

const NewYork = ()=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New+York', options)
	    .then(response => response.json())
	    .then(response => {
        console.log(response)

        cloud_pct4.innerHTML = response.cloud_pct
        temp4.innerHTML = response.temp
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        min_temp4.innerHTML = response.min_temp
        max_temp4.innerHTML = response.max_temp
        wind_speed4.innerHTML = response.wind_speed
        wind_degrees4.innerHTML = response.wind_degrees
    })
	.catch(err => console.error(err));
}

NewYork()

const Chicago = ()=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chicago', options)
	    .then(response => response.json())
	    .then(response => {
        console.log(response)

        cloud_pct5.innerHTML = response.cloud_pct
        temp5.innerHTML = response.temp
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        min_temp5.innerHTML = response.min_temp
        max_temp5.innerHTML = response.max_temp
        wind_speed5.innerHTML = response.wind_speed
        wind_degrees5.innerHTML = response.wind_degrees
    })
	.catch(err => console.error(err));
}

Chicago()