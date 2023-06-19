const apiKey = "e8276f7575e98c44bfba2e81592372c1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchMenu = document.querySelector(".search-menu input");
const searchBtn = document.querySelector(".search-menu button");
const weatherImage = document.querySelector(".weather-image");

async function openWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error-message").style.display = "block";
        document.querySelector(".weather-content").style.display= "none";

    }else{
        var data = await response.json()

    console.log(data)
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&degc";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clear"){
        weatherImage.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Clouds"){
        weatherImage.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherImage.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherImage.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherImage.src = "images/snow.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherImage.src = "images/rain.png"
    }

    document.querySelector(".weather-content").style.display = "block"
    document.querySelector(".error-message").style.display = "none"
    }
    

}

searchBtn.addEventListener("click", ()=>{
    openWeather(searchMenu.value)
})



