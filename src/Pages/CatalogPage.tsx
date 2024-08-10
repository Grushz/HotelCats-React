import Catalog from '../Components/Catalog/Catalog.tsx';
import FifthSectionContacts from '../Components/FifthSectionContacts/FifthSectionContacts.tsx';
import { useState } from 'react';
import PopUp from '../Components/PopUp/PopUpMain.tsx';
import AdvertismentBanner from '../Components/AdvertismentBanner/AdvertismentBanner.tsx';


function CatalogPage() {

    const [isMainModalOpen, setIsMainModalOpen] = useState<boolean>(false);
    const handleModalOpen = (isModalOpenM: boolean) => {
        setIsMainModalOpen(isModalOpenM);
    };
    

    return (
        <>
           <Catalog openPopUp={handleModalOpen}/> 
           <AdvertismentBanner openPopUp={handleModalOpen}/>
            <FifthSectionContacts />
            {isMainModalOpen && <PopUp setIsCloseMain={handleModalOpen} />}
        </>
    )
}

    export default CatalogPage