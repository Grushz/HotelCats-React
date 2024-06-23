import styles from './PopUp.module.scss';
import ButtonSend from '../Buttons/ButtonSend';
import { FormEvent } from 'react';

interface IPopUpProps {
    setIsCloseMain: (isModalOpenM: boolean) => void;
}

const PopUp: React.FC<IPopUpProps> = ({ setIsCloseMain }) => {

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    const inputForm = [
        {
            id: 0,
            type: 'text',
            name: 'username',
            placegolder: 'Ваше имя',
        },
        {
            id: 1,
            type: 'text',
            name: 'petname',
            placegolder: 'Имя Питомца',
        },
        {
            id: 2,
            type: 'tel',
            name: 'phone-number',
            placegolder: 'Телефон',
        },
        {
            id: 3,
            type: 'email',
            name: 'e-mail',
            placegolder: 'E-mail',
        }

    ];

    const input = inputForm.map((item) => {
        return (
            <input className={styles.personinfo} type={item.type} name={item.name} placeholder={item.placegolder} />
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