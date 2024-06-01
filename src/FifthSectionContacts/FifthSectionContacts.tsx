import Styles from './FifthSectionContacts.module.scss';


    const FifthSectionContacts = () => {

        return (
<section className={Styles.contact} id="part4">
                <div className={Styles.contactInfo}>
                    <h2 className={Styles.contactTitle}>Как нас найти</h2>
                    <ul className={Styles.contactText}>
                        <li className={Styles.contactText}>
                            <h3 className={Styles.contactHead}>Адрес</h3>
                            <p className={Styles.identationZero}>Санкт-Петербург, 
                                ул Большая Конюшенная, д 19</p>
                        </li>
                        <li className={Styles.contactText}>
                            <h3 className={Styles.contactHead}>Режим работы</h3>
                            <p className={Styles.text}>Ежедневно с 9:00 до 20:00</p>
                        </li>
                        <li className={Styles.contactText}>
                            <h3 className={Styles.contactHead}>Телефон</h3>
                            <a className={Styles.link} href="tel:+7 (800) 333 55 99" target="_blank">8 (800)
                                333-55-99</a>
                        </li>
                        <li className={Styles.contactText}>
                            <h3 className={Styles.contactHead}>E-mail</h3>
                            <a className={Styles.link} href="mailto:info@cat-hotel.ru"
                                target="_blank">info@cat-hotel.ru</a>
                        </li>
                        <li className={Styles.contactText}>
                            <h3 className={Styles.contactHead}>Социальные сети</h3>
                            <div>
                                <a className={Styles.socialIcons} href="#">
                                    <img className={Styles.icon} src="images/facebook.svg" alt="Facebook"/>
                                </a>
                                <a className={Styles.socialIcons} href="#">
                                    <img className={Styles.icon} src="images/instagram.svg" alt="Instagram"/>
                                </a>
                                <a className={Styles.socialIcons} href="#">
                                    <img className={Styles.icon} src="images/vk.svg" alt="Вконтакте"/>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={Styles.mapDiv}>
                    <iframe className={Styles.mapIframe} frameBorder="0" allowFullScreen
                        src="https://yandex.ru/map-widget/v1/?ll=30.323036%2C59.938631&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM5NDE4NBJh0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQu9C40YbQsCwgMTkvOCIKDZaV8kEVKcFvQg%2C%2C&z=17.08"
                        >
                    </iframe>
                </div>
                <div className={Styles.map}>
                    <img src="images/map.png" alt="Карта"/>
                    <div className={Styles.mapicon}>
                        <a className={Styles.link} href="https://yandex.ru/maps/-/CCUwf2dDTC" target="_blank"><img
                                src="images/catIcon.png" alt="Точка карты"/></a>
                    </div>
                </div>
            </section>
        )
    }

export default FifthSectionContacts