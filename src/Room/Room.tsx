import { useState } from 'react';
import Styles from './Room.module.scss';
import ButtonReservation from '../Button/ButtonReservation';

const Room = () => {
    
    const [room] = useState({
        title1: 'Эконом плюс',
        square1: 'Площадь - 0,90 м',
        size1: 'Размеры (ШxГxВ) - 90x100x180 см',
        cost1: '200',
        title2: 'Комфорт',
        square2: 'Площадь - 1,13 м',
        size2: 'Размеры (ШxГxВ) - 100x125x180 см',
        cost2: '250',
        title3: 'Сьют',
        square3: 'Площадь - 1,56 м',
        size3: 'Размеры (ШxГxВ) - 125x125x180 см',
        cost3: '350',
    });



    return (
        <div className={Styles.room}>
            <img className={Styles.roomImg} src="images/CatRoom1.png" alt="Эконом плюс"/>
                <div className={Styles.roomInfo}>
                    <h3 className={Styles.lowTitle}>{room.title1}</h3>
                    <ul className={Styles.roomList}>
                        <li className={Styles.roomLi}>{room.square1}<sup><small>2</small></sup></li>
                        <li className={Styles.roomLi}>{room.size1}</li>
                        <li className={Styles.roomLi}>{room.cost1}&#8381;</li>
                    </ul>
                    <ButtonReservation/>
                </div>
        </div>
    )
};

export default Room