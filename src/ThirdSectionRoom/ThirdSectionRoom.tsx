import styles from './ThirdSectionRoom.module.scss';
import Room1 from '../Rooms/Room1.tsx';
import Changer from '../Changer/Changer.tsx';
const ThirdSectionRoom = () => {

    
    return (
        <section className={styles.rooms} id="part2">
            <h2 className={styles.roomsTitle}>Номера</h2>
            <Room1/>
           <Changer/>
            
        </section>
    )
};

export default ThirdSectionRoom; 