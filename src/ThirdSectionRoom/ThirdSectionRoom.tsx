import styles from './ThirdSectionRoom.module.scss';
import Room from '../Room/Room.tsx';
import Changer from '../Changer/Changer.tsx';
const ThirdSectionRoom = () => {

    
    return (
        <section className={styles.rooms} id="part2">
            <h2 className={styles.roomsTitle}>Номера</h2>
            <Room/>
           <Changer/>
            
        </section>
    )
};

export default ThirdSectionRoom; 