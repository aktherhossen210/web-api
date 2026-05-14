const apiKey = "05e61b673e5cfbb57d8e8255de4c0ffe";


function showLoading(){
    const loading = document.querySelector('#loading');
    loading.textContent = 'loading...';
}

function hideLoading(){
    const loading = document.querySelector('#loading');
    loading.textContent = '';
}

function showError(message){
    const result = document.querySelector('#result');
    result.textContent = message;
}


async function queryWeather (city){
    try{const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    if(!res.ok){{
        throw new Error ('city not found');
    }}

    const data = await res.json();
    console.log(data);
    displayWeather(data);}
    catch(error){
        showError(error.message);
    }
    finally{
        hideLoading();
    }
};

document.querySelector('#searchBtn').addEventListener('click',()=>{
    const city = document.querySelector('#cityInput').value;
    if(city){
        queryWeather(city);
    }
})



function displayWeather(data){
    const html = `<h2>${data.name}</h2>
    <p> Temperature: ${data.main.temp}°C</p>
    <p> weather: ${data.weather[0].description}</p>
    <p> wind speed: ${data.wind.speed}</p>
    <p> country: ${data.sys.country}</p>`;
    document.querySelector('#result').innerHTML = html;
}









// queryWeather('Tokyo');