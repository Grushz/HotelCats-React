import styles from './ThirdSectionRoom.module.scss';
import Room from '../Rooms/Room.tsx';
import Changer from '../Changer/Changer.tsx';


const ThirdSectionRoom = () => {
    //const rooms = [Room1, Room2, Room3];
    
    return (
        <section className={styles.rooms} id="part2">
            <h2 className={styles.roomsTitle}>Номера</h2>
            <Room className={styles.show} />
            
           <Changer /* rooms={rooms} */ />
            
        </section>
    )
};

export default ThirdSectionRoom; 