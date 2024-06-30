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
            placeholder: '1,28 м2',
        },
        {
            id: 3,
            type: 'checkbox',
            name: 'area',
            placeholder: '1,83 м2',
        },
        {
            id: 4,
            type: 'checkbox',
            name: 'area',
            placeholder: '2,48 м2',
        },
        {
            id: 5,
            type: 'checkbox',
            name: 'area',
            placeholder: '3,13 м2',
        },
        {
            id: 6,
            type: 'checkbox',
            name: 'area',
            placeholder: '3,78 м2',
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

    const inputArea = areaCheckBox.map((item) => {
        return (
            <> <input key={item.id} type={item.type} /><label>{item.placeholder}</label> </>
        );
    });

    const inputRoomItems = itemsCheckBox.map((item) => {
        return (
            <> <input key={item.id} type={item.type} /><label>{item.placeholder}</label> </>
        );
    });

    return (
        <>
            <section className={styles.catalog}>

                <h1 className={styles.catalogTitle}>Наши номера</h1>

                <div className={styles.catalogContainer}>
                    <div className="catalogFilter">
                        <p className={styles.filterTitle}>Цена за сутки,&#8381;</p>
                        <input type="text" name="price" id="price" placeholder="от 100" />
                        <input type="text" name="price" id="price" placeholder="до 600" />
                        <p>Площадь</p>
                        {inputArea}
                        <p>Оснащение номера</p>
                        {inputRoomItems}
                    </div>
                    <div className="catalogContent">

                    </div>

                </div>
            </section>

        </>
    )
};

export default Catalog