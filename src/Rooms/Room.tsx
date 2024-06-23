//import { useState } from 'react';
import styles from './Room.module.scss';
import ButtonReservation from '../Buttons/ButtonReservation';


interface IRoom {
  className?: string;
  roomNumber: number;
}

const Room: React.FC<IRoom> = ({ className, roomNumber }) => {
  const rooms = [
    {
      id: 0,
      title: 'Эконом плюс',
      square: '0,90 м',
      size: '90x100x180',
      cost: '200',
    },
    {
      id: 1,
      title: 'Комфорт',
      square: '1,13 м',
      size: '100x125x180',
      cost: '250',
    },
    {
      id: 2,
      title: 'Сьют',
      square: '1,56 м',
      size: '125x125x180',
      cost: '350',
    },
  ];

  const pictures = [
    {
      id: 0,
      img: 'images/CatRoom1.png',
    },
    {
      id: 1,
      img: 'images/CatRoom2.png',
    },
    {
      id: 2,
      img: 'images/CatRoom3.png',
    },
  ];

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