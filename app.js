const apikey="402b6042eea23c0219543de9f0c72b74";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const Weathericon=document.querySelector(".weathericon")

async function checkWeather(city){
    const response=await fetch(apiurl+ city+`&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data=await response.json();

    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    if(data.weather[0].main=="Clouds"){
        Weathericon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        Weathericon.src="images/clear.png";
    }
    else  if(data.weather[0].main=="Drizle"){
        Weathericon.src="images/ddrizzle.png";
    }
    else  if(data.weather[0].main=="Rain"){
        Weathericon.src="images/rain.png";
    }
    else  if(data.weather[0].main=="Mist"){
        Weathericon.src="images/mist.png";
    }
    else  if(data.weather[0].main=="Snow"){
        Weathericon.src="images/snow.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

    }


    


}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value)
})

