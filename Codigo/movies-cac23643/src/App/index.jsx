import { MoviesGrid } from '../components/MoviesGrid/index.jsx';
import { ButtonBox } from '../components/ButtonBox/index.jsx';

import './App.css'

function App() {    

    return (
        <>
            <header className="header">
                <h1>Movies CAC23643</h1>
            </header>
            <main>
                <MoviesGrid></MoviesGrid>
                <ButtonBox></ButtonBox>
            </main>
        </>
    )
}

export default App
