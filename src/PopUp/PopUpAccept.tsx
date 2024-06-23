import styles from './PopUp.module.scss';

interface IPopUpProps {
    setIsClose: (isModalOpen: boolean) => void;
};

const PopUpAccept: React.FC<IPopUpProps> = ({ setIsClose }) => {
    return (
        <div className={styles.popupWrapper} >
            <div className={styles.popupWrapperInner}>
                <div className={styles.popupAccept}>
                    <button type="button" className={styles.closeAccept} onClick={() => setIsClose(false)}>
                        <img src="images/close.svg" />
                    </button>
                    <h2 className={styles.popupAcceptTitle}>Спасибо за заявку!</h2>
                    <p className={styles.text}>Мы свяжемся с вами в ближайшее время</p>
                    <button className={styles.buttonAccept} onClick={() => setIsClose(false)}>
                        Ок
                    </button>

                </div >
            </div>
        </div>
    );
}

export default PopUpAccept;