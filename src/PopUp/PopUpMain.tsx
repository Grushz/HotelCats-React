import styles from './PopUp.module.scss';
import ButtonReservation from '../Buttons/ButtonReservation';

const PopUp = () => {

    return (
        <div className={styles.popupWrapper} >
            <div className={styles.popupWrapperInner}>
                <form className={styles.formMain}>
                    <div className={styles.popup}>
                        <button className={styles.close}>
                        </button>
                        <h2 className={styles.popuptitle}>Забронировать номер</h2>
                        <input className={styles.personinfo} type="text" name="username" placeholder="Ваше имя" />
                        <input className={styles.personinfo} type="text" name="petname" placeholder="Имя Питомца" />
                        <input className={styles.personinfo} type="tel" name="phone-number" placeholder="Телефон" />
                        <input className={styles.personinfo} type="email" name="e-mail" placeholder="E-mail" />
                        <div className={styles.inputDate}>
                            <label>Дата заезда с </label>
                            <input type="text" className={styles.date} name="datein" placeholder="26.01.2020" />
                            <label> по </label>
                            <input type="text" className={styles.date} name="dateout" placeholder="26.02.2020"/>
                        </div>
                        <ButtonReservation className={styles.buttonReservation} />
                    </div>
                </form>
            </div>

            
        </div >
            );
    }

export default PopUp;