import styles from './PopUp.module.scss';
import ButtonSend from '../Buttons/ButtonSend';
import { FormEvent } from 'react';
import { inputForm } from './dataPopUp';

interface IPopUpProps {
    setIsCloseMain: (isModalOpenM: boolean) => void;
}

const PopUp: React.FC<IPopUpProps> = ({ setIsCloseMain }) => {

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    const input = inputForm.map((item) => {
        return (
            <input className={styles.personinfo} key={item.id} type={item.type} name={item.name} placeholder={item.placegolder} />
        );
    });

    return (
        <div className={styles.popupWrapper}>
            <div className={styles.popupWrapperInner}>
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
                        <ButtonSend className={styles.buttonReservation} closeForm={setIsCloseMain} />
                    </div>
                </form>
            </div>
        </div >
    );
}

export default PopUp;