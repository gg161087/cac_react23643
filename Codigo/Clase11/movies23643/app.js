// pasar a axios
// editar el css
// mostrar numero de pagina
const apiKey = '05123a40afbe112743ba73d98505223b';
const divHeader = document.querySelector('.header');
const headerSubtitle = document.querySelector('.header__subtitle');
const divContainer = document.querySelector('.container');
const divContainerDetails = document.querySelector('.container_details');
const btnPrevious = document.querySelector('#btn_previous');
const btnNext = document.querySelector('#btn_next');
const btnVolver = document.querySelector('#btn_volver');
const divCards = document.querySelectorAll('.card');

window.addEventListener('load', () => {
    btnVolver.style.display = 'none';
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
btnVolver.addEventListener('click', () => {
    divContainer.style.display = 'grid';
    btnNext.style.display = 'block';
    btnPrevious.style.display = 'block';
    btnVolver.style.display = 'none';
    divContainerDetails.innerHTML = '';
});

const createMovieDetails = (movie) => {
    const pathFront = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    const pathBack = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    
    console.log(movie);
    const divDetails = document.createElement('div');
    divDetails.classList.add('details');

    const divDetailsImg = document.createElement('div');
    divDetailsImg.classList.add('details__img');  
    
    const imgFront = document.createElement('img');
    imgFront.src = pathFront;
    divDetailsImg.appendChild(imgFront);

    divDetails.appendChild(divDetailsImg);

    const divCardText = document.createElement('div');
    divCardText.classList.add('details__text');

    const title = document.createElement('h2');
    title.classList.add('details__title');
    title.textContent = movie.title;
    divCardText.appendChild(title);

    const originalTitle = document.createElement('h3');
    originalTitle.classList.add('details__title');
    originalTitle.textContent = `Titulo original: ${movie.original_title}`;
    divCardText.appendChild(originalTitle);

    const overview = document.createElement('p');
    overview.textContent = `Resumen: ${movie.overview}`;
    divCardText.appendChild(overview);

    const rating = document.createElement('p');
    rating.textContent = `Puntuación: ${movie.vote_average}`;
    divCardText.appendChild(rating);

    const voters = document.createElement('p');
    voters.textContent = `Votantes: ${movie.vote_count}`;
    divCardText.appendChild(voters);

    const releaseDate = document.createElement('p');
    releaseDate.textContent = `Fecha de lanzamiento: ${movie.release_date}`;
    divCardText.appendChild(releaseDate);

    divDetails.appendChild(divCardText);

    const imgBack = document.createElement('img');
    imgBack.src = pathBack;    
    divCardText.appendChild(imgBack)

    
    return divDetails
}

const createMovieCard = (movie) => {
    const pathFront = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const pathBack = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    
    const divCard = document.createElement('div');
    divCard.classList.add('card');

    const divCardImg = document.createElement('div');
    divCardImg.classList.add('card__img');
    divCardImg.style.backgroundImage = `url(${pathFront})`;
    divCardImg.style.hover
    divCard.appendChild(divCardImg);

    const divCardText = document.createElement('div');
    divCardText.classList.add('card__text');

    const title = document.createElement('h3');
    title.classList.add('card__title');
    title.textContent = movie.title;
    divCardText.appendChild(title);

    const rating = document.createElement('p');
    rating.textContent = `Puntuación: ${movie.vote_average}`;
    divCardText.appendChild(rating);

    const voters = document.createElement('p');
    voters.textContent = `Votantes: ${movie.vote_count}`;
    divCardText.appendChild(voters);

    divCard.appendChild(divCardText);

    divCard.addEventListener('mouseover', function () {
        divCardImg.style.backgroundImage = `url(${pathBack})`;
    });
    
    divCard.addEventListener('mouseout', function () {
        divCardImg.style.backgroundImage = `url(${pathFront})`;
    }); 

    return divCard;
};

const getMoviesAxios = async () => {
    let textSub = '';
    page != 1 ? textSub = `Página: ${page}` : textSub= `Página Principal`;
    headerSubtitle.innerHTML = textSub;
    try {
        let response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-MX&page=${page}`);  
        if (response.status == 200) { 
            divContainer.innerHTML = '';           
            response.data.results.forEach((movie) => {                 
                let card = createMovieCard(movie);
                card.addEventListener('click', () => {
                    divContainer.style.display = 'none';
                    btnNext.style.display = 'none';
                    btnPrevious.style.display = 'none';
                    btnVolver.style.display = 'block';
                    let detailMovie = createMovieDetails(movie)
                    divContainerDetails.appendChild(detailMovie);
                    divContainerDetails.style.display = 'flex'
                    console.log(movie.id);                 
                });
                divContainer.appendChild(card);               
            });                       
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