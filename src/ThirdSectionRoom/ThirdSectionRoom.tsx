import styles from './ThirdSectionRoom.module.scss';
import Room1 from '../Rooms/Room1.tsx';
import Changer from '../Changer/Changer.tsx';
import Room2 from '../Rooms/Room2.tsx';
import Room3 from '../Rooms/Room3.tsx';

const ThirdSectionRoom = () => {

    
    return (
        <section className={styles.rooms} id="part2">
            <h2 className={styles.roomsTitle}>Номера</h2>
            <Room1 className={styles.show}/>
            <Room2 className={styles.hidden}/>
            <Room3 className={styles.hidden}/>
           <Changer/>
            
        </section>
    )
};

export default ThirdSectionRoom; 