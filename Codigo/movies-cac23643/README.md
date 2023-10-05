# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

[Clase 15] 4/10/2023:
    Se inicio proyecto con Vite
    Se crean componentes y se estructura:
        /src
            /assets
                /css
                    App.css (Se movio desde src)
                    ButtonBox.css
                    MovieCard.css
                    MoviesGrid.css
            /components                
                ButtonBox.jsx (Se creo el componente pero sin logica, solo visual)
                MovieCard.jsx
                MoviesGrid.jsx
        movies.json (simulando la respuesta de un endpoint de peliculas)