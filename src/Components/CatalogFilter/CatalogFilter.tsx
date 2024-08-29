
import styles from './CatalogFilter.module.scss';
import { areaCheckBox, itemsCheckBox } from '../Catalog/CheckBoxInfo';
import { cards } from '../Catalog/CheckBoxInfo';
import { useState, useRef } from 'react';

interface IState {
    id: number,
    type: string,
    checked: boolean,
    item: string,
};
interface ICard {
    id: number,
    picture: string,
    name: string,
    size: string,
    area: string,
    items: string,
    price: string,
};

const CatalogFilter = ({ onChange }: { onChange: (cardsNew: ICard[]) => void }) => {



    const [checked, setChecked] = useState<IState[]>(areaCheckBox);
    const [checkedItems, setCheckedItems] = useState<IState[]>(itemsCheckBox);

    const checkHandlerSize = (id: number) => {
        setChecked(prevState =>
            prevState.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        );
    };

    const checkHandlerItems = (id: number) => {
        setCheckedItems(prevState =>
            prevState.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        );
    };

    const inputRef = useRef(null);

    const getValue = () => {
        if (inputRef.current) {
            const inputValue = inputRef.current.value;
            console.log('Input value:', inputValue);
        }
    };

    /*const hadleChangeCards = (startFilter: IState, StartFilterItems: IState) => {
        const cardsShowNew = cards.filter(cards => cards.area == startFilter.item);
        const cardsShowNewItems = cardsShowNew.filter(cards => cards.items.match(StartFilterItems.item));
        
    }; */

    function startFilterHandler(checked: IState[], checkedItems: IState[], cards: ICard[]) {
        const startFilter = checked.filter(checked => {
            return checked.checked === true;
        });

        const startFilterItems = checkedItems.filter(checkedItems => {
            return checkedItems.checked === true;
        });

        const resultArea = startFilter.map(item => item.item).join(', ');
        const resultItems = startFilterItems.map(item => item.item).join(', ');
        if (resultArea.length > 0 && resultItems.length > 0) {
            
           
        const filteredCardsFirst = cards.filter(card => {
            // Определяем слово, по которому будем фильтровать
            const searchTerm = resultArea;

            // Разделяем значения по запятой
            const values = searchTerm.split(', ');

            // Проверяем, содержится ли хотя бы одно значение из списка в card.area
            return values.some(value =>
                card.area.includes(value.trim())
            );
        });

        const filteredCardsSecond = filteredCardsFirst.filter(card => {
            const searchTerm = resultItems;

            // Разделяем значения по пробелу
            const values = searchTerm.split(', ');

            // Проверяем, содержится ли хотя бы одно значение из списка в card.items
            return values.some(value =>
                card.items.includes(value)
            );
        });
        onChange(filteredCardsSecond);
    }
        else {
            console.log('Массив пуст');
            onChange([]);
          }

        
    };


    const clearFilter = () => {
        setChecked(areaCheckBox);
        setCheckedItems(itemsCheckBox);

    };

    const inputArea = checked.map((item) => {
        return (
            <div className={styles.input}>
                <input className={styles.inputArea} key={item.id} checked={item.checked} type={item.type} onChange={() => checkHandlerSize(item.id)} />
                <label className={styles.placeholder}> {item.item} м<sup><small>2</small></sup></label>
            </div>
        );
    });

    const inputRoomItems = checkedItems.map((item) => {
        return (
            <div className={styles.input}>
                <input className={styles.inputRoomItems} key={item.id} checked={item.checked} type={item.type} onChange={() => checkHandlerItems(item.id)} />
                <label className={styles.placeholder}> {item.item}</label>
            </div>
        );
    });





    return (
        <div className={styles.catalogFilter}>

            <p className={styles.filterText}>Цена за сутки,&#8381;</p>
            <div className={styles.priceFilter}>
                <input ref={inputRef} className={styles.inputPrice} type="text" name="price" id="price" placeholder="от 100" />
                <input className={styles.inputPrice} type="text" name="price" id="price" placeholder="до 600" />
            </div>
            <p className={styles.filterText}>Площадь</p>
            {inputArea}
            <p className={styles.filterText}>Оснащение номера</p>
            {inputRoomItems}
            <button className={styles.buttonFilter} onClick={() => startFilterHandler(checked, checkedItems, cards)}>Применить</button>
            <button className={styles.buttonFilterDisline} onClick={() => clearFilter()}>Сбросить фильтр</button>

        </div>
    );

};

export default CatalogFilter;