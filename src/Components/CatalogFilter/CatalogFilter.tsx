
import styles from './CatalogFilter.module.scss';
import { areaCheckBox, itemsCheckBox } from '../Catalog/CheckBoxInfo';



const CatalogFilter = () => {

const inputArea = areaCheckBox.map((item) => {
    return (
        <label> <input className={styles.inputArea} key={item.id} type={item.type} /> {item.placeholder}</label>
    );
});

const inputRoomItems = itemsCheckBox.map((item) => {
    return (
        <label> <input className={styles.inputRoomItems} key={item.id} type={item.type} />{item.placeholder}</label>
    );
});



return (
    <div className={styles.catalogFilter}>
                        
                        <p className={styles.filterText}>Цена за сутки,&#8381;</p>
                        <div className={styles.priceFilter}>    
                        <input className={styles.inputPrice} type="text" name="price" id="price" placeholder="от 100" />
                        <input className={styles.inputPrice} type="text" name="price" id="price" placeholder="до 600" />
                        </div>
                        <p className={styles.filterText}>Площадь</p>
                        {inputArea}
                        <p className={styles.filterText}>Оснащение номера</p>
                        {inputRoomItems}
                        <button className={styles.buttonFilter}>Применить</button>
                        <button className={styles.buttonFilterDisline}>Сбросить фильтр</button>
                    </div>
);

};

export default CatalogFilter;