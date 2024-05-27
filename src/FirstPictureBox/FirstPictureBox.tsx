import styles from './FirstPictureBox.module.scss'

const FirstPictureBox = () => {
    const items: { town: string; mainTitle: string; mainText: string; title: string } = [
        {town: 'Санкт-Петербург'},
        {mainTitle: 'Котейка'},
        {mainText: 'Уютная гостиница для котов и кошек'},
        {title: 'Как нас найти'},
    ]
    return (
<section className={styles.mainPicture}>
<div className={styles.mainPictureContent}>
    <p className="town-marker identation-zero">{items.town}</p>
    <h1 className="main-title identation-zero">Котейка</h1>
    <p className="main-text identation-zero">Уютная гостиница для котов и кошек</p>
    <button className="button-high button-open-popup">
        Забронировать
    </button>
</div>
</section>
    );
};

export default FirstPictureBox