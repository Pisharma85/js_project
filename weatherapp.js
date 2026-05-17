const button=document.getElementById("searchbutton")
const input=document.getElementById("cityinput")
const cityname=document.getElementById("city-name")
const citytemp=document.getElementById("citytemp") 
const citytime=document.getElementById("localtime")


async function Getdata(cityname){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=d9fdba03567b45c19f7142828260902&q=${cityname}&aqi=yes`);
    return await promise.json();//`` helps in dynamic api....&{} can be use to dynamic change the value to be entered
}

button.addEventListener("click", async () =>{
const value=input.value;//will store value from entered city name
const result=await Getdata(value);
// console.log(result);
cityname.innerText=`${result.location.name}, ${result.location.region} - ${result.location.country}`;
citytemp.innerText=`${result.current.temp_c}`
citytime.innerHTML=`${result.location.localtime}`
});
