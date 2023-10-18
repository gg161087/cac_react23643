import { Header } from '../components/Header/index.jsx';
import { MoviesGrid } from '../components/MoviesGrid/index.jsx';
import { FooterBar } from '../components/FooterBar/index.jsx';

export const LandingPage = () => {
    return (
        <>
            <Header></Header>
            <MoviesGrid></MoviesGrid>
            <FooterBar></FooterBar>
        </>
    )
}