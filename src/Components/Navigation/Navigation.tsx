import styles from "./Navigation.module.scss";

const Navigation = () => {
    const items: { title: string; href: string }[] = [
        { title: 'Почему мы?', href: '#part1' },
        { title: 'Номера', href: '/catalog' },
        { title: 'Отзывы', href: '#part3' },
        { title: 'Как нас найти', href: '#part4' },
    ]

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                {items.map((item, index) => (
                    <li key={index}>
                        <a className={styles.navigationLink} href={item.href}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
