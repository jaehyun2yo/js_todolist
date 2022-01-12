const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");
const API_KEY = "899e8dc8bfdfd9edb4cded55af394ca1";

function onGeoOk (postion) {    
    const lat = postion.coords.latitude;
    const lon = postion.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = `${data.name} /`;
            weather.innerText =  `${data.main.temp}'c`;
        });
}
function onGeoError () {
    alert("위치 를 찾을수 없습니다.");
}




navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

