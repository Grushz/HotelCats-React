import styles from './ButtonReservation.module.scss';



interface IButtonReservation {
    className?: string;
    openPopUp: (isMainModalOpen: boolean) => void;
}

const ButtonReservation = ({ className, openPopUp }: IButtonReservation, ) => {
    

    return (
        <>
            <button className={`${styles.buttonReservation} ${className}`} onClick={() => openPopUp(true)}>
                Забронировать
            </button>
           
        </>
    );
};

export default ButtonReservation;