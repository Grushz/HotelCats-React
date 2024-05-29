import './App.css'
import Header from "../Header/Header.tsx";
import FirstSectionPicture from '../FirstSectionPicture/FirstSectionPicture.tsx';
import SecondSectionAdvanteges from '../SecondSectionAdvantages/SecondSectionAdvantages.tsx';
import ThirdSectionRoom from '../ThirdSectionRoom/ThirdSectionRoom.tsx';


function App() {


    return (
        <>
    
            <Header/>
            <main>
                <FirstSectionPicture/>
                <SecondSectionAdvanteges/>
                <ThirdSectionRoom/>
            </main>
        
        </>
    )
}

export default App
