// pasar a axios
// editar el css
// mostrar numero de pagina
const apiKey = '05123a40afbe112743ba73d98505223b';
const divHeader = document.querySelector('.header');
const headerSubtitle = document.querySelector('.header__subtitle');
const divContainer = document.querySelector('.container');
const btnPrevious = document.querySelector('#btn_previous');
const btnNext = document.querySelector('#btn_next');

window.addEventListener('load', () => {
    getMoviesAxios();
});

let page = 1; 

btnPrevious.addEventListener('click', () => {
    if (page > 1) {        
        page--;        
        getMoviesAxios();
    };
});

btnNext.addEventListener('click', () => {
    if (page < 500) {        
        page++;   
        getMoviesAxios();
    };
});

const createMovieCard = (movie) => {
    return `
        <div class="card"> 
            <img class="card__img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
            <h3 class="card__title">${movie.title}</h3>
            <h4>Puntuación: ${movie.vote_average}</h4>
            <h5>Votantes: ${movie.vote_count}
        </div>
    `
};

const getMoviesAxios = async () => {
    let textSub = '';
    page != 1 ? textSub = `Página: ${page}` : textSub= `Página Principal`;
    headerSubtitle.innerHTML = textSub;
    try {
        let response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-MX&page=${page}`);  
        if (response.status == 200) {
            let movies = '';
            response.data.results.forEach((movie) => {
                movies += createMovieCard(movie);                
            });
            divContainer.innerHTML = movies;            
        } else if (response.status === 404) {
            console.log("error 404");
        };
    } catch (error) {
        console.log(error);
    };
};

/* const getMovies = async () => {
    let textSub = '';
    page != 1 ? textSub = `<h3>Página: ${page}</h3>` : textSub= `<h3>Página Principal</h3>`
    headerSubtitle.innerHTML = textSub;
    try {
        let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-MX&page=${page}`);       
        if (response.status == 200) {
            let data = await response.json();                       
            let movies = '';
            data.results.forEach((movie) => {
                movies += createMovieCard(movie);                
            });
            divContainer.innerHTML = movies;
        } else if (response.status === 404) {
            console.log("error 404");
        };
    } catch (error) {
        console.log(error);
    };
}; */