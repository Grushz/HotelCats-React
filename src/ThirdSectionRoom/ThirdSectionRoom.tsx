import { useState } from 'react';
import styles from './ThirdSectionRoom.module.scss';
import Room from '../Rooms/Room.tsx';
import Changer from '../Changer/Changer.tsx';

interface DotState {
    activeIndex: number;
}

const ThirdSectionRoom = () => {
    const [roomIndex, setRoomIndex] = useState(0)
    
   
    
    
   /*  */
    //const rooms = [Room1, Room2, Room3];
    
    
    return (
        <section className={styles.rooms} id="part2">
            <h2 className={styles.roomsTitle}>Номера {roomIndex}</h2>
            <Room className={styles.show} room={State} />
            
           <Changer />
            
        </section>
    )
};

export default ThirdSectionRoom; 