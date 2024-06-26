import { useState } from 'react';
import styles from './ThirdSectionRoom.module.scss';
import Room from '../Rooms/Room.tsx';
import Changer from '../Changer/Changer.tsx';

const ThirdSectionRoom = () => {
    const [roomIndex, setRoomIndex] = useState(0)

    const handleChange = (roomIndex: number) => {
        setRoomIndex(roomIndex);
    };

    return (
        <section className={styles.rooms} id="part2">
            <h2 className={styles.roomsTitle}>Номера</h2>
            <Room className={styles.show} roomNumber={roomIndex} />

            <Changer onChange={handleChange} />

        </section>
    )
};

export default ThirdSectionRoom; 