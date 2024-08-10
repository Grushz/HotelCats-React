import styles from './PopUp.module.scss';
import ButtonSend from '../Buttons/ButtonSend';
import { FormEvent, useState } from 'react';
import { inputForm } from './dataPopUp';
import PopUpAccept from '../PopUp/PopUpAccept.tsx';
import { useSpring, animated } from "react-spring"

interface IPopUpProps {
    setIsCloseMain: (isModalOpenM: boolean) => void;
    
}

const PopUp: React.FC<IPopUpProps> = ({ setIsCloseMain}) => {

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    const [isModalAcceptOpen, setIsModalAcceptOpen] = useState<boolean>(false);

    const handleModalAccept = (isModalOpenA: boolean) => {
        setIsModalAcceptOpen(isModalOpenA);
    };

    function handleModalClose(setClose: boolean) {
        setIsModalAcceptOpen(setClose);
        setIsCloseMain(setClose);
    };
    

    const scaleAnimation = useSpring({
        from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
      to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
      
      config: { duration: 500 },

    });
    const opacityAnimation = useSpring({
        from: { opacity: 0 },
      to: { opacity: 1},
      
      config: { duration: 400 },
    });

    const input = inputForm.map((item) => {
        return (
            <input className={styles.personinfo} key={item.id} type={item.type} name={item.name} placeholder={item.placegolder} />
        );
    });

    return (
        <animated.div className={styles.popupWrapper} style={opacityAnimation}>
            <animated.div className={styles.popupWrapperInner} style={scaleAnimation} >
                <form className={styles.formMain} onSubmit={handleSubmit}>
                    <div className={styles.popup}>
                        <button className={styles.close} onClick={() => setIsCloseMain(false)}>
                        </button>
                        <h2 className={styles.popuptitle}>Забронировать номер</h2>
                        {input}
                        <div className={styles.inputDate}>
                            <label>Дата заезда с </label>
                            <input type="text" className={styles.date} name="datein" placeholder="26.01.2020" />
                            <label> по </label>
                            <input type="text" className={styles.date} name="dateout" placeholder="26.02.2020" />
                        </div>
                        <ButtonSend className={styles.buttonReservation} onAccept={handleModalAccept} />
                    </div>
                </form>
            </animated.div>
            {isModalAcceptOpen && <PopUpAccept setIsClose={handleModalClose} />}
        </animated.div >
    );
}

export default PopUp;