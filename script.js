const searchInput = document.querySelector('#searchInput');;
const btn = document.querySelector('#btn'); 
const result = document.querySelector('.result');
const apiKey = '247dafca';

async function getData(movie){
    
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`);
    if(!response.ok){
        throw new Error ('Something went wrong')
    }
    const movien = await response.json();
    console.log(movien);
    displayData(movien);
}

btn.addEventListener('click', () => {

    const movie = searchInput.value;

    if (movie) {
        getData(movie);
    }
});







const displayData=(data)=>{

    data.Search.forEach((movie)=>{
        const html =` <p> movie title: ${movie.Title} </p>
        <p> movie year: ${movie.Year} </p>
        <p> movie type: ${movie.Type} </p>`
        result.innerHTML+=html;
    })
    

}