import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { LandingPage } from './pages/LandingPage.jsx';
import { DetailMovie } from './pages/DetailMovie.jsx';

export const App = () => {    

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/movie/:id' element={<DetailMovie/>}></Route>          
            </Routes>                       
        </BrowserRouter>
    )
}