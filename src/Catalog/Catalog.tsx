import ButtonReservation from '../Buttons/ButtonReservation';
import styles from './Catalog.module.scss';

const Catalog = () => {

    const areaCheckBox = [
        {
            id: 1,
            type: 'checkbox',
            name: 'area',
            placeholder: '0,63 м2',
        },
        {
            id: 2,
            type: 'checkbox',
            name: 'area',
            placeholder: '0,90 м2',
        },
        {
            id: 3,
            type: 'checkbox',
            name: 'area',
            placeholder: '1,13 м2',
        },
        {
            id: 4,
            type: 'checkbox',
            name: 'area',
            placeholder: '1,56 м2',
        },
        {
            id: 5,
            type: 'checkbox',
            name: 'area',
            placeholder: '2,56 м2',
        },
        {
            id: 6,
            type: 'checkbox',
            name: 'area',
            placeholder: '2,88 м2',
        },
    ];

    const itemsCheckBox = [
        {
            id: 1,
            type: 'checkbox',
            name: 'area',
            placeholder: 'Пустой номер',
        },
        {
            id: 2,
            type: 'checkbox',
            name: 'area',
            placeholder: 'Лежак',
        },
        {
            id: 3,
            type: 'checkbox',
            name: 'area',
            placeholder: 'Когтеточка',
        },
        {
            id: 4,
            type: 'checkbox',
            name: 'area',
            placeholder: 'Игровой-комплекс',
        },
        {
            id: 5,
            type: 'checkbox',
            name: 'area',
            placeholder: 'Домик',
        },

    ];
    const cards = [
        {
            id: 1,
            picture: 'images/Economy.png',
            name: 'Эконом',
            size: '90х70х100',
            area: '0,63 м',
            items: '',
            price: '100',
        },
        {
            id: 2,
            picture: 'images/EconomyPlus.png',
            name: 'Эконом плюс',
            size: '90х100х180',
            area: '0,90 м',
            items: '',
            price: '200',
        },
        {
            id: 3,
            picture: 'images/Comfort.png',
            name: 'Комфорт',
            size: '100х125х180',
            area: '1,13 м',
            items: '',
            price: '250',
        },
        {
            id: 4,
            picture: 'images/Suit.png',
            name: 'Сьют',
            size: '125х125х180',
            area: '1,56 м',
            items: '',
            price: '350',
        },
        {
            id: 5,
            picture: 'images/Luxe.png',
            name: 'Люкс',
            size: '160х160х180',
            area: '2,56 м',
            items: '',
            price: '500',
        },
        {
            id: 6,
            picture: 'images/SuperLuxe.png',
            name: 'Супер-Люкс',
            size: '180х160х180',
            area: '2,88 м',
            items: '',
            price: '600',
        },
    ];


    const inputArea = areaCheckBox.map((item) => {
        return (
            <label> <input key={item.id} type={item.type} /> {item.placeholder}</label> 
        );
    });

    const inputRoomItems = itemsCheckBox.map((item) => {
        return (
            <label> <input key={item.id} type={item.type} />{item.placeholder}</label>
        );
    });

    const cardsRooms = cards.map((item) => {
        return (
            <div className={styles.card}>
                <img src={item.picture} />
                <h2 className={styles.cardTitle}>{item.name}</h2>
                <div className={styles.cardInfo}>
                <p className={styles.text}>Размеры (ШxГxВ) - {item.size} см</p>
                <p className={styles.text}>Площадь - {item.area}<sup><small>2</small></sup></p>
                <p className={styles.text}>Оснащение номера {item.items}</p>
                <p className={styles.text}>Цена за сутки <b className={styles.price}>{item.price}&#8381;</b></p>
                </div>
                <ButtonReservation className={styles.buttonCard}/>
            </div>
        )
    });

    return (
        <>
            <section className={styles.catalog}>

                <h1 className={styles.catalogTitle}>Наши номера</h1>

                <div className={styles.catalogContainer}>
                    <div className={styles.catalogFilter}>
                        <p className={styles.filterTitle}>Цена за сутки,&#8381;</p>
                        <input type="text" name="price" id="price" placeholder="от 100" />
                        <input type="text" name="price" id="price" placeholder="до 600" />
                        <p>Площадь</p>
                        {inputArea}
                        <p>Оснащение номера</p>
                        {inputRoomItems}
                    </div>
                    <div className={styles.catalogContent}>
                    {cardsRooms}
                    </div>

                </div>
            </section>

        </>
    )
};

export default Catalog