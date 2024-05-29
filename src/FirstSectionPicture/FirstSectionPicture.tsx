import styles from './FirstSectionPicture.module.scss';
import ButtonReservation from '../Button/ButtonReservation';
import { useState } from 'react';

function FirstSectionPicture () {
    const [obj] = useState({
        town: 'Санкт-Петербург',
        mainTitle: 'Котейка',
        mainText: 'Уютная гостиница для котов и кошек',
    });

    return (
<section className={styles.mainPicture}>
<div className={styles.FirstPictureContent}>
    <p className={styles.townMarker} >{obj.town}</p>
    <h1 className={styles.mainTitle} >{obj.mainTitle}</h1>
    <p className={styles.mainText}>{obj.mainText}</p>
    <ButtonReservation className={styles.button} />
</div>
</section>
    );
}

export default FirstSectionPicture