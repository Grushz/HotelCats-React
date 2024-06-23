import styles from './Header.module.scss'
import Logo from "../Logo/Logo.tsx";
import Navigation from "../Navigation/Navigation.tsx";


const Header = () => {


    return (
        <header className={styles.header}>
            <Logo className={styles.headerLogo} />
            <Navigation />
        </header>
    );
};

export default Header;
