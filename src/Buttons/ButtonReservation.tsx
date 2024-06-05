import styles from './ButtonReservation.module.scss';
import { useState } from 'react';
import PopUp from '../PopUp/PopUpMain';

interface IButtonReservation {
    className?: string;
}

const ButtonReservation = ({className}: IButtonReservation) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <>
        <button className={`${styles.buttonReservation} ${className}`} onClick={() => setIsModalOpen(true)}>
        Забронировать
    </button>
    {isModalOpen && <PopUp/>}
    </>
    );
};

export default ButtonReservation;