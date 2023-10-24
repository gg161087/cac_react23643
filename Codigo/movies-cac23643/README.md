# React + Vite

[Clase 15] 4/10/2023:
    Se creo un proyecto de react con vite
    Se crea un componente Boton dinamico

[Clase 16] 9/10/2023:
    Se creo un proyecto de react con vite
    Se limpio y se creo el counter click

[Clase 17] 11/10/2023:   
    Se inicio proyecto con Vite (npm create vite)
    Se crean componentes y se estructura:
        /src
            /App
                index.jsx (rename App.jsx) se importan los componentes y se exporta app
                App.css               
            /components                            
                /ButtonBox (Se creo el componente pero sin logica, solo visual)
                    index.jsx
                    ButtonBox.css
                /MovieCard
                    index.jsx
                    MovieCard.css
                /MoviesGrid
                    index.jsx
                    MoviesGrid.css
                /data                
                    movies.json (simulando la respuesta de un endpoint de peliculas)
            main.jsx (se import app para ser renderizado)

[Clase 18] 18/10/2023:
    Se re estructuro el proyecto e instalo npm i react-router-dom
        /src
            /App
                index.jsx (se importan las pages, se agregaron rutas y se exporta app)
                    import { BrowserRouter, Routes, Route } from 'react-router-dom';
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<LandingPage/>}/>          
                        </Routes>                       
                    </BrowserRouter>
                App.css               
            /components
                /FooterBar
                    FooterBar.css
                    index.jsx
                /Header
                    Header.css
                    index.jsx                            
                /ButtonBox (Se creo el componente pero sin logica, solo visual)
                    index.jsx
                    ButtonBox.css
                /MovieCard
                    index.jsx
                    MovieCard.css
                /MoviesGrid
                    index.jsx
                    MoviesGrid.css
            /pages
                LandingPage.jsx (se importa header, moviesgrid y footer y se exporta)
            /ultis
                httpClient.js (un get dinamico a la api movies para reemplazar data/movies.json)
            main.jsx (se import app para ser renderizado)

[Clase 19] 23/10/2023:
    Se Agrego el BarButton y DetailMovie:
        /src                      
            /components
                /BarButton
                    BarButton.css
                    index.jsx
            /pages
                /DetailMovie
                    DetailMovie.css
                    index.jsx

    Se agrego una nueva ruta al App/index.jsx a la etiqueta <Routes/> para poder redireccionar a detailmovie:
        <Route path='/movie/:id' element={<DetailMovie/>}></Route>
    Se obtiene el id del paramentro de la url con useParams de react-router-dom, para poder utilizar otro endpoint