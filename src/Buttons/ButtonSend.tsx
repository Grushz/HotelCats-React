import styles from './ButtonReservation.module.scss';
import { useState } from 'react';
import PopUpAccept from '../PopUp/PopUpAccept.tsx';

interface IButtonSend {
    className?: string;
}

const ButtonSend = ({className}: IButtonSend) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <>
        <button className={`${styles.buttonReservation} ${className}`} onClick={() => setIsModalOpen(true)}>
        Отправить заявку
    </button>
    {isModalOpen && <PopUpAccept/>}
    </>
    );
};

export default ButtonSend;