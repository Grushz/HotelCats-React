import styles from './ButtonReservation.module.scss';
import { useState } from 'react';
import PopUpAccept from '../PopUp/PopUpAccept.tsx';

interface IButtonSend {
    className?: string;
    closeForm: (isModalOpenM: boolean) => void;
}

const ButtonSend: React.FC<IButtonSend> = ({ className, /*closeForm*/ }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleModalClose = (isModalOpen: boolean) => {
        setIsModalOpen(isModalOpen);
    };

    const handleClick = () => {
        setIsModalOpen(true);
        //closeForm(false);
        
    };

    return (
        <>
            <button className={`${styles.buttonReservation} ${className}`} onClick={handleClick}>
                Отправить заявку
            </button>
            {isModalOpen && <PopUpAccept setIsClose={handleModalClose} />}
        </>
    );
};

export default ButtonSend;