import { keyCurrent,keyForecast } from "./api";
import{ yourIpForecast,autoIp } from "./api";
let searchButton = document.querySelector('.submit');
let searchInput = document.getElementById('search');
let container = document.querySelector('.container');
let todayLeft=document.querySelector('.todayLeft');
let todayRight=document.querySelector('.todayRight');
let todayCont = document.querySelector('.todayCont');


export function search(){searchButton.addEventListener('click', function(event) {
    event.preventDefault();
   container.innerText="";
   todayCont.innerText="";
  const keyword = searchInput.value;
 
keyCurrent(keyword);
keyForecast(keyword);
 searchInput.value="";
});}