import FirstSectionPicture from '../Components/FirstSectionPicture/FirstSectionPicture.tsx';
import SecondSectionAdvanteges from '../Components/SecondSectionAdvantages/SecondSectionAdvantages.tsx';
import ThirdSectionRoom from '../Components/ThirdSectionRoom/ThirdSectionRoom.tsx';
import FourthSectionReview from '../Components/FourthSectionReview/FourthSectionReview.tsx';
import FifthSectionContacts from '../Components/FifthSectionContacts/FifthSectionContacts.tsx';
import { useState } from 'react';
import PopUp from '../Components/PopUp/PopUpMain';

function MainPage() {

    const [isMainModalOpen, setIsMainModalOpen] = useState<boolean>(false);
    const handleModalOpen = (isModalOpenM: boolean) => {
        setIsMainModalOpen(isModalOpenM);
    };
    

    return (
        <>
            <FirstSectionPicture openPopUp={handleModalOpen}/>
            <SecondSectionAdvanteges />
            <ThirdSectionRoom openPopUp={handleModalOpen} />
            <FourthSectionReview />
            <FifthSectionContacts />
            {isMainModalOpen && <PopUp setIsCloseMain={handleModalOpen} />}
        </>
    )
}

    export default MainPage