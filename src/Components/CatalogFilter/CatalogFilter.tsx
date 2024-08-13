
import styles from './CatalogFilter.module.scss';
import { areaCheckBox, itemsCheckBox } from '../Catalog/CheckBoxInfo';
import { useState } from'react';



const CatalogFilter = () => {

interface IState {
    id: number,
    title: string,
    checked: boolean,
};

let initialState: IState[] = [
{ id: 101, title: "Title1", checked: false },
{ id: 102, title: "Title2", checked: false },
{ id: 103, title: "Title3", checked: false },
{ id: 104, title: "Title4", checked: false },
{ id: 105, title: "Title5", checked: false },
{ id: 106, title: "Title6", checked: false },
{ id: 11, title: "Title7", checked: false },
{ id: 12, title: "Title8", checked: false },
{ id: 13, title: "Title9", checked: false },
{ id: 14, title: "Title10", checked: false },
{ id: 15, title: "Title11", checked: false },
];


const [checked, setChecked] = useState<IState[]>(initialState);

const checkHandler = (id: number) => {
    setChecked( prevState => 
        prevState.map((item) => item.id === id? {...item, checked:!item.checked } : item)
      );
};



const inputArea = areaCheckBox.map((item) => {
    return (
        <label> <input className={styles.inputArea} key={item.id} type={item.type}  onChange={() => checkHandler(item.id)} /> {item.placeholder}</label>
    );
});

const inputRoomItems = itemsCheckBox.map((item) => {
    return (
        <label> <input className={styles.inputRoomItems} key={item.id} type={item.type} onChange={() => checkHandler(item.id)} />{item.placeholder}</label>
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
                        <button className={styles.buttonFilter} onClick={() => console.log(checked)}>Применить</button>
                        <button className={styles.buttonFilterDisline} >Сбросить фильтр</button>
                    </div>
);

};

export default CatalogFilter;