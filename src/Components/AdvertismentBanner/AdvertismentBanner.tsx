import styles from './AdvertismentBanner.module.scss'
import ButtonReservation from '../Buttons/ButtonReservation.tsx';

const AdvertismentBanner = ({ openPopUp }: { openPopUp: (isMainModalOpen: boolean) => void }) => {
    return (
        <section className={styles.mainPicture}>
            <div className={styles.adPictureContent}>
            <h1 className={styles.mainAd} >Каждый 7-й день</h1>
                <h1 className={styles.mainAdText} >бесплатно!</h1>
                <p className={styles.mainText}>Акция действует при размещении
                в номерах “Люкс” и “Супер-Люкс” </p>
                <ButtonReservation className={styles.button} openPopUp={openPopUp} />
            </div>
        </section>
    );
};

export default AdvertismentBanner;