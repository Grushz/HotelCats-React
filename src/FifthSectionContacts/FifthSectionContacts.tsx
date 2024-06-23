import styles from './FifthSectionContacts.module.scss';


const FifthSectionContacts = () => {

    const localContacts = [
        {
            id: 0,
            head: 'Адрес',
            text: 'Санкт-Петербург, ул Большая Конюшенная, д 19',
        },
        {
            id: 1,
            head: 'Режим работы',
            text: 'Ежедневно с 9:00 до 20:00',
        }
    ];
    const contactsE = [
        {
            id: 0,
            head: 'Телефон',
            link: 'tel:+7 (800) 333 55 99',
            text: '8 (800) 333-55-99',
        },
        {
            id: 1,
            head: 'E-mail',
            link: 'mailto:info@cat-hotel.ru',
            text: 'info@cat-hotel.ru',
        }
    ];
    const social = [
        {
            id: 0,
            head: 'Facebook',
            link: '#',
            picture: 'images/facebook.svg',
            text: 'Facebook',
        },
        {
            id: 1,
            head: 'Instagram',
            link: '#',
            picture: 'images/instagram.svg',
            text: 'Instagram',
        },
        {
            id: 2,
            head: 'Vkontakte',
            link: '#',
            picture: 'images/vk.svg',
            text: 'Vkontakte',
        }
    ];

    const first = localContacts.map((item) => {
        return (
            <li key={item.head} className={styles.contactText}>
                <h3 className={styles.contactHead}>{item.head}</h3>
                <p className={styles.text}>{item.text}</p>
            </li>
        )
    });

    const second = contactsE.map((item) => {
        return (
            <li key={item.head} className={styles.contactText}>
                <h3 className={styles.contactHead}>{item.head}</h3>
                <a className={styles.link} href={item.link} target="_blank">{item.text}</a>
            </li>
        )
    });

    const third = social.map((item) => {
        return (
            <a className={styles.socialIcons} key={item.id} href={item.link} target="_blank">
                <img className={styles.icon} src={item.picture} alt={item.text} />
            </a>
        )
    });
    return (
        <section className={styles.contact} id="part4">
            <div className={styles.contactInfo}>
                <h2 className={styles.contactTitle}>Как нас найти</h2>
                <ul className={styles.contactText}>
                    {first}
                    {second}
                    <li className={styles.contactText}>
                        <h3 className={styles.contactHead}>Социальные сети</h3>
                        <div>
                            {third}
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.mapDiv}>
                <iframe className={styles.mapIframe} frameBorder="0" allowFullScreen
                    src="https://yandex.ru/map-widget/v1/?ll=30.323036%2C59.938631&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM5NDE4NBJh0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQu9C40YbQsCwgMTkvOCIKDZaV8kEVKcFvQg%2C%2C&z=17.08"
                >
                </iframe>
            </div>
            <div className={styles.map}>
                <img src="images/map.png" alt="Карта" />
                <div className={styles.mapicon}>
                    <a className={styles.link} href="https://yandex.ru/maps/-/CCUwf2dDTC" target="_blank"><img
                        src="images/catIcon.png" alt="Точка карты" /></a>
                </div>
            </div>
        </section>
    )
};

export default FifthSectionContacts