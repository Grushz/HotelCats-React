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
        images: Array<string>,
        price: string,
    };

    const [cardsShow, setCardsShow] = useState<ICard[]>(cards);
    
    const hadleChangeCardsNew = (cardsNew: ICard[]) => {
        setCardsShow(cardsNew);
        console.log(newArray);
    };

    const newArray = cardsShow.map(obj => ({
        ...obj,
        items: obj.items.split(',').map(imageName => imageName.trim())
      }));
    
   /* const roomItemsPicture = cardsShow.items.map((image, index) => (
        <img key={index} src={`images/${image}.svg`} alt={image} style={{ width: '50px', height: 'auto', margin: '5px' }} />
      )); */

    const cardsRooms = cardsShow.map((item) => {
        
        const roomItemsPicture = item.images.map((image, index) => (
            <img key={index} src={`public/images/${image}`} alt={image} style={{ width: '16px', height: 'auto', padding: '4px' }} />
          ));
          
        return (
            <div key={item.id} className={styles.card}>
                <img src={item.picture} />
                <h2 className={styles.cardTitle}>{item.name}</h2>
                <div className={styles.cardInfo}>
                    <p className={styles.text}>Размеры (ШxГxВ) - {item.size} см</p>
                    <p className={styles.text}>Площадь - {item.area} м<sup><small>2</small></sup></p>
                    
                    <div className={styles.itemsRoom}>
                    <p className={styles.textItems}>Оснащение номера</p>
                    {roomItemsPicture}
                    </div>

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