import './App.css'
import Header from "../Header/Header.tsx";
import Footer from '../Footer/Footer.tsx';
import { Routes, Route} from 'react-router-dom';
import MainPage from '../Pages/MainPage.tsx';
import CatalogPage from '../Pages/CatalogPage.tsx';
// import PopUp from '../PopUp/PopUpMain.tsx';


function App() {


    return (
        <>
            <Header/>
            <main>
            <Routes>
            
                <Route path="/" element={<MainPage/>}/>
                <Route path="/catalog" element={<CatalogPage/>}/>
            
            </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App
