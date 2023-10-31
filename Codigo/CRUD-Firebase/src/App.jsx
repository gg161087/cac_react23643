import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Show } from './pages/Show.jsx';
import { Edit } from './pages/Edit.jsx';
import { Create } from './pages/Create.jsx';

import './App.css';

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Show></Show>}></Route>
                    <Route path='/edit/:id' element={<Edit></Edit>}></Route>
                    <Route path='/create' element={<Create></Create>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}