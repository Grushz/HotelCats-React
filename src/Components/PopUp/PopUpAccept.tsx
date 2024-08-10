import styles from './PopUp.module.scss';
import { useSpring, animated } from "react-spring"

interface IPopUpProps {
    setIsClose: (isClose: boolean) => void;
};

const PopUpAccept: React.FC<IPopUpProps> = ({ setIsClose }) => {

    const opacityAnimation = useSpring({
        from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
      to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
      config: { duration: 400 },
    });


    return (
        <animated.div className={styles.popupWrapper} style={opacityAnimation} >
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
        </animated.div>
    );
}

export default PopUpAccept;