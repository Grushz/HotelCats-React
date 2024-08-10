import styles from './FirstSectionPicture.module.scss';
import ButtonReservation from '../Buttons/ButtonReservation';


function FirstSectionPicture({ openPopUp }: { openPopUp: (isMainModalOpen: boolean) => void }) {
    const obj = Object({
        town: 'Санкт-Петербург',
        mainTitle: 'Котейка',
        mainText: 'Уютная гостиница для котов и кошек',
    });

    return (
        <section className={styles.mainPicture}>
            <div className={styles.firstPictureContent}>
                <p className={styles.townMarker} >{obj.town}</p>
                <h1 className={styles.mainTitle} >{obj.mainTitle}</h1>
                <p className={styles.mainText}>{obj.mainText}</p>
                <ButtonReservation className={styles.button} openPopUp={openPopUp} />
            </div>
        </section>
    );
}

export default FirstSectionPicture