const button = document.getElementById('btn')
button.addEventListener("click" ,() => {
    const lat = document.getElementById('lat').value
    const long = document.getElementById('long').value
    const url = `https://api.weatherapi.com/v1/current.json?key=7cee0de47aeb4910a49115823241712&q=${lat},${long}`
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
        const name = result.location.name
        const speed = result.current.wind_kph
        const humidity = result.current.humidity
        const temp = result.current.temp_c
        document.getElementById('r').innerHTML = name
        document.getElementById('s').innerHTML = speed
        document.getElementById('h').innerHTML = humidity
        document.getElementById('t').innerHTML = temp
        console.log(result);
})
.catch((error) => console.error(error));
})