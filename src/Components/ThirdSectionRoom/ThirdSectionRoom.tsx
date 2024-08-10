import { useState, useEffect } from 'react';
import styles from './ThirdSectionRoom.module.scss';
import Room from '../Rooms/Room.tsx';
import Changer from '../Changer/Changer.tsx';

const ThirdSectionRoom = ({ openPopUp }: { openPopUp: (isMainModalOpen: boolean) => void }) => {
    const [roomIndex, setRoomIndex] = useState<number>(0)
    const [showClass, setShowClass] = useState<boolean>(true);
    const handleChange = (roomIndex: number) => {
        setRoomIndex(roomIndex);
    };
    
    useEffect(() => {
        setShowClass(false); 
        const timer = setTimeout(() => {
            setShowClass(true); 
        }, 200); 
        console.log(showClass);
        return () => clearTimeout(timer); 
    }, [roomIndex]);
    

    return (
        <section className={styles.rooms} id="part2">
            <h2 className={styles.roomsTitle}>Номера</h2>
             <Room className={showClass ? styles.show : styles.hide} roomNumber={roomIndex} openPopUp={openPopUp}/>
            <Changer onChange={handleChange} />
        </section>
    )
};

export default ThirdSectionRoom; 