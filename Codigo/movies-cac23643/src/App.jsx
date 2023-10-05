import { useState } from 'react'

import { MoviesGrid } from './components/MoviesGrid.jsx';
import { ButtonBox } from './components/ButtonBox.jsx';

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
