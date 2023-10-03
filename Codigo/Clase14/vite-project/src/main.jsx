import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Card } from './components/Card';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>        
        <Card apellido='Messi' nacimiento={1987} clubes={['Newells ', 'Barcelona ', 'PSG ', 'Inter MIAMI']} mundial={true} late={true}></Card>
        <Card apellido='Ronaldo' nacimiento={1984} clubes={['Newells ', 'Barcelona ', 'PSG ', 'Inter MIAMI']} mundial={false} late={false}></Card>
    </>,
)
