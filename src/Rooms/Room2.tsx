import { useState } from 'react';
import Styles from './Room.module.scss';
import ButtonReservation from '../Buttons/ButtonReservation';

const Room2 = () => {
    
    const [room] = useState({
       
        title: 'Комфорт',
        square: '1,13 м',
        size: '100x125x180',
        cost: '250',
        
    });

    const [picture] = useState({
        img1: 'images/CatRoom1.png',
        img2: 'images/CatRoom2.png',
        img3: 'images/CatRoom3.png',
    });


    return (
        <div className={Styles.room}>
            <img className={Styles.roomImg} src={picture.img1} alt="Милые котики в комнате"/>
                <div className={Styles.roomInfo}>
                    <h3 className={Styles.lowTitle}>{room.title}</h3>
                    <ul className={Styles.roomList}>
                        <li className={Styles.roomLi}>Площадь - {room.square}<sup><small>2</small></sup></li>
                        <li className={Styles.roomLi}>Размеры (ШxГxВ) - {room.size} см</li>
                        <li className={Styles.roomLi}>Цена за сутки: {room.cost}&#8381;</li>
                    </ul>
                    <ButtonReservation className={Styles.button} />
                </div>
        </div>
    )
};

export default Room2