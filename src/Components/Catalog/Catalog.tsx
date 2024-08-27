import ButtonReservation from '../Buttons/ButtonReservation';
import styles from './Catalog.module.scss';
import { cards } from '../Catalog/CheckBoxInfo';
import CatalogFilter from '../CatalogFilter/CatalogFilter';
import { useState } from 'react';

const Catalog = ({ openPopUp }: { openPopUp: (isMainModalOpen: boolean) => void }) => {

    interface ICard {
        id: number,
        picture: string,
        name: string,
        size: string,
        area: string,
        items: string,
        price: string,
    };

    const [cardsShow, setCardsShow] = useState<ICard[]>(cards);
    
    const hadleChangeCardsNew = (cardsNew: ICard[]) => {
        setCardsShow(cardsNew);
    };
    
    

    const cardsRooms = cardsShow.map((item) => {
        return (
            <div key={item.id} className={styles.card}>
                <img src={item.picture} />
                <h2 className={styles.cardTitle}>{item.name}</h2>
                <div className={styles.cardInfo}>
                    <p className={styles.text}>Размеры (ШxГxВ) - {item.size} см</p>
                    <p className={styles.text}>Площадь - {item.area} м<sup><small>2</small></sup></p>
                    <p className={styles.text}>Оснащение номера {item.items}</p> b
                    <p className={styles.text}>Цена за сутки <b className={styles.price}>{item.price}&#8381;</b></p>
                </div>
                <ButtonReservation className={styles.buttonCard} openPopUp={openPopUp} />
            </div>
        )
    });

    return (
        <>
            <section className={styles.catalog}>
                <div className={styles.catalogHeader}>
                    <h1 className={styles.catalogTitle}>Наши номера</h1>
                    <div className={styles.buttonSort}>
                        <button className={styles.buttonCatalog}>По площади</button>
                        <ul className={styles.subFilter}>
                            <li><button className={styles.buttonListSort}>По площади</button></li>
                            <li><button className={styles.buttonListSort}>По цене</button></li>
                            <li><button className={styles.buttonListSort}>По цене</button></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.catalogContainer}>
                    <CatalogFilter onChange={hadleChangeCardsNew} />
                    <div className={styles.catalogContent}>
                        {cardsRooms}
                    </div>

                </div>
            </section>

        </>
    )
};

export default Catalog