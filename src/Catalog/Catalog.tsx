

const Catalog = () => {

    const areaCheckBox = [
        {
            id: 1,
            type: 'checkbox',
            name: 'area',
            placegolder: '0,63 м2',
        },
        {
            id: 2,
            type: 'checkbox',
            name: 'area',
            placegolder: '1,28 м2',
        },
        {
            id: 3,
            type: 'checkbox',
            name: 'area',
            placegolder: '1,83 м2',
        },
        {
            id: 4,
            type: 'checkbox',
            name: 'area',
            placegolder: '2,48 м2',
        },
        {
            id: 5,
            type: 'checkbox',
            name: 'area',
            placegolder: '3,13 м2',
        },
        {
            id: 6,
            type: 'checkbox',
            name: 'area',
            placegolder: '3,78 м2',
        },
    ];


    const inputArea = areaCheckBox.map((item) => {
        return (
           <> <input key={item.id} type={item.type} /><label>{item.placegolder}</label> </>
        );
    });

    return (
        <>
            <section className="catalogContainer">
                <div className="catalogHeader">
                <h1>Наши номера</h1>
                </div>
                    <div className="catalogFilter">
                    <p>Цена за сутки,&#8381;</p>
                    <input type="text" name="price" id="price"  placeholder="от 100" />
                    <input type="text" name="price" id="price"  placeholder="до 600" />
                    <p>Площадь</p>
                    {inputArea}
                    <p>Оснащение номера</p>
                    
                    </div>
                    <div className="catalogContent">

                    </div>
                

            </section>
            
        </>
    )
};

export default Catalog