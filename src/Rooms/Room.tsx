//import { useState } from 'react';
import styles from './Room.module.scss';
import ButtonReservation from '../Buttons/ButtonReservation';
import { rooms, pictures } from './DataRooms';

interface IRoom {
  className?: string;
  roomNumber: number;
}

const Room: React.FC<IRoom> = ({ className, roomNumber }) => {

  const currentRoom = rooms.find(room => room.id === roomNumber);
  const currentPicture = pictures.find(picture => picture.id === roomNumber);

  return (
    <div className={`${styles.room} ${className}`}>
      {currentPicture && (
        <img
          className={styles.roomImg}
          src={currentPicture.img}
          alt="Милые котики в комнате"
        />
      )}
      <div className={styles.roomInfo}>
        {currentRoom && (
          <>
            <h3 className={styles.lowTitle}>{currentRoom.title}</h3>
            <ul className={styles.roomList}>
              <li className={styles.roomLi}>
                Площадь - {currentRoom.square}<sup><small>2</small></sup>
              </li>
              <li className={styles.roomLi}>
                Размеры (ШxГxВ) - {currentRoom.size} см
              </li>
              <li className={styles.roomLi}>
                Цена за сутки: {currentRoom.cost}&#8381;
              </li>
            </ul>
          </>
        )}
        <ButtonReservation className={styles.button} />
      </div>
    </div>
  );
};

export default Room;