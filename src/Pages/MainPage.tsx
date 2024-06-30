import FirstSectionPicture from '../FirstSectionPicture/FirstSectionPicture.tsx';
import SecondSectionAdvanteges from '../SecondSectionAdvantages/SecondSectionAdvantages.tsx';
import ThirdSectionRoom from '../ThirdSectionRoom/ThirdSectionRoom.tsx';
import FourthSectionReview from '../FourthSectionReview/FourthSectionReview.tsx';
import FifthSectionContacts from '../FifthSectionContacts/FifthSectionContacts.tsx';

function MainPage() {
    return (
        <>
            <FirstSectionPicture />
            <SecondSectionAdvanteges />
            <ThirdSectionRoom />
            <FourthSectionReview />
            <FifthSectionContacts />
        </>
    )
}

    export default MainPage