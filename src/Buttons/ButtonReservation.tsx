import styles from './ButtonReservation.module.scss';

interface IButtonReservation {
    className?: string;
}

const ButtonReservation = ({className}: IButtonReservation) => {
    return (
        <button className={`${styles.buttonReservation} ${className}`}>
        Забронировать
    </button>
    );
};

export default ButtonReservation;