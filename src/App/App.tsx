import './App.css'
import Header from "../Header/Header.tsx";
import FirstSectionPicture from '../FirstSectionPicture/FirstSectionPicture.tsx';
import SecondSectionAdvanteges from '../SecondSectionAdvantages/SecondSectionAdvantages.tsx';
import ThirdSectionRoom from '../ThirdSectionRoom/ThirdSectionRoom.tsx';
import FourthSectionReview from '../FourthSectionReview/FourthSectionReview.tsx';
import FifthSectionContacts from '../FifthSectionContacts/FifthSectionContacts.tsx';
import Footer from '../Footer/Footer.tsx';
// import PopUp from '../PopUp/PopUpMain.tsx';


function App() {


    return (
        <>
    
            <Header/>
            <main>
                <FirstSectionPicture/>
                <SecondSectionAdvanteges/>
                <ThirdSectionRoom/>
                <FourthSectionReview/>
                <FifthSectionContacts/>
                <Footer/>
                
            </main>
        
        </>
    )
}

export default App
