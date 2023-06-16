import {format } from "date-fns";

console.log('Hello!');


export async function getCurrent() {
     fetch('https://api.weatherapi.com/v1/forecast.json?key=b215fe4c34f843819cf143545230206&q=auto:ip',
{mode: 'cors'}).then(response => response.json())
.then(response => {console.log(response)
    return response})
.then(function(response){
    let todayCont = document.querySelector('.todayCont');
    let todayLeft = document.createElement("div");
    todayLeft.classList.add('todayLeft');
    let todayRight = document.createElement("div");
    todayRight.classList.add('todayRight');
    //day
    let day = document.createElement("div");
    day.classList.add('day');
    day.innerHTML = format(new Date(), "eeee");
    // text
    let text = document.createElement("div");
    text.classList.add('text');
    text.innerHTML = response.forecast.forecastday[0].day.condition.text;
    //icon 
    let icon = document.createElement('img');
    icon.classList.add('icon');
    icon.src = response.forecast.forecastday[0].day.condition.icon;
    //current temp
    let temp = document.createElement("div");
    temp.classList.add('temp');
    temp.innerHTML = response.current.temp_f + "°F" + " / " + response.current.temp_c + "°C";
    //max temp
    let maxTemp = document.createElement("div");
    maxTemp.classList.add('maxTemp');
    maxTemp.innerHTML = "High: " + response.forecast.forecastday[0].day.maxtemp_f + "°F"+" / "+response.forecast.forecastday[0].day.maxtemp_c+ "°C";
    // min temp
    let minTemp = document.createElement("div");
    minTemp.classList.add('minTemp');
    minTemp.innerHTML = "Low: " + response.forecast.forecastday[0].day.mintemp_f + "°F" + " / " +response.forecast.forecastday[0].day.mintemp_c+ "°C";
    // humidity
    let humidity = document.createElement("div");
    humidity.classList.add('humidity');
    humidity.innerHTML = "Humidity: " + response.forecast.forecastday[0].day.avghumidity + "%";
    //chance of rain
    let chanceOfRain = document.createElement("div");
    chanceOfRain.classList.add('chanceOfRain');
    chanceOfRain.innerHTML = "Chance of Rain: " + response.forecast.forecastday[0].day.daily_chance_of_rain + "%";
    //wind speed
    let windSpeed = document.createElement("div");
    windSpeed.classList.add('windSpeed');
    windSpeed.innerHTML = "Wind Speed: " + response.current.wind_mph + "mph";
    //wind direction
    let windDirection = document.createElement("div");
    windDirection.classList.add('windDirection');
    windDirection.innerHTML = "Wind Direction: " + response.current.wind_dir + "°";

    // append
    todayRight.append(day,text,icon,temp)
    todayLeft.append(maxTemp,minTemp,humidity,chanceOfRain,windSpeed,windDirection);
    todayCont.append(todayLeft,todayRight);
} )
.catch(err => console.log(err));}

export async function keyCurrent(keyword) {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=b215fe4c34f843819cf143545230206&q=${keyword}`,
{mode: 'cors'}).then(response => response.json())
.then(response => {console.log(response)
   return response})
.then(function(response){
   let todayCont = document.querySelector('.todayCont');
   let todayLeft = document.createElement("div");
   todayLeft.classList.add('todayLeft');
   let todayRight = document.createElement("div");
   todayRight.classList.add('todayRight');
   //day
   let day = document.createElement("div");
   day.classList.add('day');
   day.innerHTML = format(new Date(), "eeee");
   // text
   let text = document.createElement("div");
   text.classList.add('text');
   text.innerHTML = response.forecast.forecastday[0].day.condition.text;
   //icon 
   let icon = document.createElement('img');
   icon.classList.add('icon');
   icon.src = response.forecast.forecastday[0].day.condition.icon;
   //current temp
   let temp = document.createElement("div");
   temp.classList.add('temp');
   temp.innerHTML = response.current.temp_f + "°F" + " / " + response.current.temp_c + "°C";
   //max temp
   let maxTemp = document.createElement("div");
   maxTemp.classList.add('maxTemp');
   maxTemp.innerHTML = "High: " + response.forecast.forecastday[0].day.maxtemp_f + "°F" +" / "+response.forecast.forecastday[0].day.maxtemp_c+ "°C" ;
   // min temp
   let minTemp = document.createElement("div");
   minTemp.classList.add('minTemp');
   minTemp.innerHTML = "Low: " + response.forecast.forecastday[0].day.mintemp_f + "°F" +" / "+response.forecast.forecastday[0].day.mintemp_c+ "°C";
   // humidity
   let humidity = document.createElement("div");
   humidity.classList.add('humidity');
   humidity.innerHTML = "Humidity: " + response.forecast.forecastday[0].day.avghumidity + "%";
   //chance of rain
   let chanceOfRain = document.createElement("div");
   chanceOfRain.classList.add('chanceOfRain');
   chanceOfRain.innerHTML = "Chance of Rain: " + response.forecast.forecastday[0].day.daily_chance_of_rain + "%";
   //wind speed
   let windSpeed = document.createElement("div");
   windSpeed.classList.add('windSpeed');
   windSpeed.innerHTML = "Wind Speed: " + response.current.wind_mph + "mph";
   //wind direction
   let windDirection = document.createElement("div");
   windDirection.classList.add('windDirection');
   windDirection.innerHTML = "Wind Direction: " + response.current.wind_dir + "°";

   // append
   todayRight.append(day,text,icon,temp)
   todayLeft.append(maxTemp,minTemp,humidity,chanceOfRain,windSpeed,windDirection);
   todayCont.append(todayLeft,todayRight);
} )
.catch(err => console.log(err));}




export async function getForecast() {
    fetch('https://api.weatherapi.com/v1/forecast.json?key=b215fe4c34f843819cf143545230206&q=auto:ip&days=6',
    {mode: 'cors'})
    .then(response => response.json())
    .then(response => {console.log(response)
        return response})
    .then(function(response){
        for(let i = 0 ; i < 3 ; i++){ 
            //main container
            let container = document.querySelector('.container');
            //forcast day
            let day = document.createElement('div');
            day.classList.add(`day${i}`);
            //day name
            let dayName = document.createElement('div');
            dayName.classList.add(`dayName${i}`);
            dayName.innerHTML =response.forecast.forecastday[i+1].date;
            console.log(response.forecast.forecastday[i+1].date)
            // icon
            let icon = document.createElement('img');
            icon.classList.add(`icon${i}`);
            icon.src = response.forecast.forecastday[i+1].day.condition.icon;
            // max temp
        let maxTemp = document.createElement('div');
        maxTemp.classList.add(`maxTemp${i}`);
        maxTemp.innerHTML = "High: " + response.forecast.forecastday[i+1].day.maxtemp_f + "°F" +" / "+response.forecast.forecastday[i].day.maxtemp_c+ "°C";
        // min temp
        let minTemp = document.createElement('div');
        minTemp.classList.add(`minTemp${i}`);
        minTemp.innerHTML = "Low: " + response.forecast.forecastday[i+1].day.mintemp_f + "°F" +" / "+response.forecast.forecastday[i].day.mintemp_c+ "°C";

        day.append(dayName,icon,maxTemp,minTemp);
        container.appendChild(day);
     console.log(i)
    } 
      
    } )
    .catch(err => console.log(err));}
    
   
    export async function keyForecast(keyword) {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=b215fe4c34f843819cf143545230206&q=${keyword}&days=6`,
        {mode: 'cors'})
        .then(response => response.json())
        .then(response => {console.log(response)
            return response})
        .then(function(response){
            for(let i = 1 ; i < 5 ; i++){ 
                //main container
                let container = document.querySelector('.container');
                //forcast day
                let day = document.createElement('div');
                day.classList.add(`day${i}`);
                //day name
                let dayName = document.createElement('div');
                dayName.classList.add(`dayName${i}`);
                dayName.innerHTML = response.forecast.forecastday[i+1].date;
                console.log(response.forecast.forecastday[i+1].date)
                // icon
                let icon = document.createElement('img');
                icon.classList.add(`icon${i}`);
                icon.src = response.forecast.forecastday[i].day.condition.icon;
                // max temp
            let maxTemp = document.createElement('div');
            maxTemp.classList.add(`maxTemp${i}`);
            maxTemp.innerHTML = "High: " + response.forecast.forecastday[i].day.maxtemp_f + "°F" +" / "+response.forecast.forecastday[i].day.maxtemp_c+ "°C";
            // min temp
            let minTemp = document.createElement('div');
            minTemp.classList.add(`minTemp${i}`);
            minTemp.innerHTML = "Low: " + response.forecast.forecastday[i].day.mintemp_f + "°F" +" / "+response.forecast.forecastday[i].day.mintemp_c+ "°C";
   

            day.append(dayName,icon,maxTemp,minTemp);
            container.appendChild(day);}
           
        } )
        .catch(err => console.log(err));}
        
       