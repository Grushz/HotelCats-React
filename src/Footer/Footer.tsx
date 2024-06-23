import styles from './Footer.module.scss'
import Logo from "../Logo/Logo.tsx";
import Navigation from "../Navigation/Navigation.tsx";

const Footer = () => {

    return (
        <footer>
            <div className={styles.footerMain}>
                <Logo className={styles.footerLogo} />
                <Navigation />
            </div>

            <div className={styles.footerInfo}>
                <div className={styles.copyright}>
                    <p className={styles.copyright}>&#169; 2019 Все права защищены</p>
                </div>
                <div className={styles.policy}>
                    <a className={styles.policytext} href="#">Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;