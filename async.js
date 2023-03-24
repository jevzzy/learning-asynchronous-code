const search = document.querySelector("#search")
const apiKey = "cabded55eb6f493890502604232103"
const section1 = document.querySelector("section")
const region = document.getElementById("location")
const date = document.getElementById("date")
const temp = document.getElementById("temp")
const condition = document.getElementById("condition")
const humidity = document.querySelector("#humidity")
const wind = document.querySelector("#wind")
const btn = document.querySelector("#searchBtn")
const info = document.querySelector(".info")

async function getWeather(){
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=cabded55eb6f493890502604232103&q=${search.value}`,{mode:"cors"})
 const weatherData = await response.json()
 console.log(weatherData.current.humidity)
region.innerText = `${weatherData.location.name},${weatherData.location.country}`
date.innerText = `${weatherData.current.last_updated}`
condition.innerText = `${weatherData.current.condition.text}`
temp.innerText = `${weatherData.current.temp_c}°C`
humidity.innerText = `${weatherData.current.humidity}%`
wind.innerText = `${weatherData.current.wind_kph}k/m`

}
const errordiv = document.createElement("div")
btn.addEventListener("click", ()=>{
section1.style.display = "block"
section1.textContent = ""
section1.appendChild(info)
  getWeather().catch(err =>{
errordiv.className = "error"
errordiv.style.display = "block"
errordiv.innerHTML = "<h2>cannot display this data</h2>"
section1.textContent = ""
section1.appendChild(errordiv)
console.log("error")

  })
})