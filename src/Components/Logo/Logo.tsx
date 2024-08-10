import styles from './Logo.module.scss';
import logo from '../../../public/images/logo.svg';

interface ILogo {
    className: string;
}

const Logo = ({ className }: ILogo) => {
    return (
        <a className={`${styles.logo} ${className}`} href="/">
            <img src={logo} alt="Логотип Котейка" />
        </a>
    );
};

export default Logo;
