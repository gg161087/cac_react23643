import { MoviesGrid } from '../components/MoviesGrid/index.jsx';
import { FooterBar } from '../components/FooterBar/index.jsx';

import './App.css'

function App() {    

    return (
        <>
            <header className="header">
                <h1>Movies CAC23643</h1>
            </header>
            <main>
                <MoviesGrid></MoviesGrid>
                <FooterBar></FooterBar>
            </main>
        </>
    )
}

export default App
