import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './partials/Header.jsx';
import { Footer } from './partials/Footer.jsx';

import { Create } from './components/Create.jsx';
import { Edit } from './components/Edit.jsx';
import { Show } from './components/Show.jsx';

export const App = () => {
   
    return (
        <>
            <Header></Header>
            <BrowserRouter>
                <Routes>
                    <Route path='/' index element={<Show></Show>}/>
                    <Route path='/edit/:id' element={<Edit></Edit>}/>
                    <Route path='/create' element={<Create></Create>}/>
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </>
    )
}