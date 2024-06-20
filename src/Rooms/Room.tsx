//import { useState } from 'react';
import Styles from './Room.module.scss';
import ButtonReservation from '../Buttons/ButtonReservation';

interface IRoom {
    className?: string;
    roomNumber: number;
}



const Room = ({ className, roomNumber }: IRoom) => {


    const rooms = [{
        id: 1,
        title: 'Эконом плюс',
        square: '0,90 м',
        size: '90x100x180',
        cost: '200',
    },
    {
        id: 2,
        title: 'Комфорт',
        square: '1,13 м',
        size: '100x125x180',
        cost: '250',

    },
    {
        id: 3,
        title: 'Сьют',
        square: '1,56 м',
        size: '125x125x180',
        cost: '350',
    },];

    const picture = [{
        id: 1,
        img: 'images/CatRoom1.png',
    },
        /*{ 
            id: 2,
            img: 'images/CatRoom2.png', 
        },
        { 
            id: 3,
            img: 'images/CatRoom3.png', 
        },*/


    ];
   
    const picturesInfo = picture.map(function (picture, roomNumber) {


        return (
            <img className={Styles.roomImg} key={roomNumber} src={picture.img} alt="Милые котики в комнате" />
        )

    });

    const itemsInfo = rooms.map(function (room, roomNumber) {
        if (roomNumber < 1) {
            return (
                <>
                    <h3 className={Styles.lowTitle} key={room.id}>{room.title}</h3>
                    <ul className={Styles.roomList} key={room.id}>
                        <li className={Styles.roomLi} >Площадь - {roomNumber}{room.square}<sup><small>2</small></sup></li>
                        <li className={Styles.roomLi} >Размеры (ШxГxВ) - {room.size} см</li>
                        <li className={Styles.roomLi} >Цена за сутки: {room.cost}&#8381;</li>
                    </ul>
                </>
            );
        }
    });




    return (

        <div className={`${Styles.room} ${className}`}>
            {picturesInfo}
            <div className={Styles.roomInfo}>
                {itemsInfo}

                <ButtonReservation className={Styles.button} />
            </div>
        </div>
    )
};

export default Room