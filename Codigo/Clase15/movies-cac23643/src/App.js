import './App.css';

import { PeliculasGrid } from './PeliculasGrid.jsx';

function App() {
    return (
        <div>
            <header className="header">
                <h1>Movies CAC23643</h1>
            </header>
            <main>
                <PeliculasGrid></PeliculasGrid>
            </main>
        </div>
    );
}

export default App;