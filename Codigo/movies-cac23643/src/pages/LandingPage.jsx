import { useState, useEffect } from 'react';

import { Header } from './../components/Header.jsx';
import { MoviesGrid } from './../components/MoviesGrid.jsx';
import { FooterBar } from './../components/FooterBar.jsx';

export const LandingPage = () => {
    const buttons = [{id:'btn_previus', text:'Anterior'}, {id:'btn_next', text:'Siguiente'}]

    let [page, setPage] = useState(1)
    
    const handleButtonClick = (id) => {        
        if (id === 'btn_previus') {            
            if (page > 1) {
                setPage(page -= 1)   
                console.log(`'Botón Anterior presionado' ${page}`);
            }
        } else if (id === 'btn_next') {            
            setPage(page += 1)           
            console.log(`'Botón Siguiente presionado' ${page}`);
        }
    };

    useEffect(() => {        
    },[])

    return (
        <>
            <Header title='Movies CAC23643'></Header>
            <MoviesGrid page={page}></MoviesGrid>
            <FooterBar buttons={buttons} onButtonClick={handleButtonClick}></FooterBar>
        </>
    )
}