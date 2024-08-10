import styles from './ButtonReservation.module.scss';



interface IButtonSend {
    className?: string;
    onAccept: (isModalOpenA: boolean) => void;
}

const ButtonSend: React.FC<IButtonSend> = ({ className, onAccept }) => {
    
    return (
        <>
            <button className={`${styles.buttonReservation} ${className}`} onClick={() => onAccept(true)}>
                Отправить заявку
            </button>
            
        </>
    );
};

export default ButtonSend;