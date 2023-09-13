// pasar a axios
// editar el css
// mostrar numero de pagina
const apiKey = '05123a40afbe112743ba73d98505223b';
const btnPrevious = document.querySelector("#btn_previous");
const btnNext = document.querySelector("#btn_next");
const divContainer = document.querySelector(".container");

window.addEventListener('load', () => {
    getMovies();
});

let page = 1; 

btnPrevious.addEventListener('click', () => {
    if (page > 1) {        
        page -= 1;        
        getMovies();
    };
});

btnNext.addEventListener('click', () => {
    if (page < 500) {        
        page++;   
        getMovies();
    };
});

const getMovies = async () => {
    try {
        let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-MX&page=${page}`);
        
        if (response.status == 200) {
            let data = await response.json();            
            let movies = "";
            data.results.forEach((movie) => {
                movies += `<div class="pelicula"> 
                    <img class = "poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
                    <h3 class="titulo">${movie.title}</h3>
                    </div>
                `
            });
            divContainer.innerHTML = movies;
        } else if (response.status === 404) {
            console.log("error 404");
        }
    } catch (error) {
        console.log(error);
    }
};