import styles from './SecondSectionAdvantages.module.scss';

const advantages = [
    {
        id: 0,
        title: 'Комфортная температура',
        icon: "images/IconTemp.svg",
        alt: 'Температура',
        text: 'Во всех номерах поддерживается комфортная температура в пределах 23 - 25 градусов. В каждом номере можно дополнительно отрегулировать температуру. ',
    },
    {
        id: 1,
        title: 'Видеонаблюдение',
        icon: "images/IconCamera.svg",
        alt: 'Камера наблюдения',
        text: 'Мы предоставляем доступ в нашу систему. Вы сможете следить за своим питомцем со своего смартфона или компьютера.',
    },
    {
        id: 2,
        title: 'Услуги Зоотакси',
        icon: "images/IconTaxi.svg",
        alt: 'Зоотакси',
        text: 'Мы приедем за вашим питомцем в любой район Санкт-Петербурга.',
    },
    {
        id: 3,
        title: 'Сбалансированное питание',
        icon: "images/IconFood.svg",
        alt: 'Еда для питомца',
        text: 'Вы можете привезти свой корм или доверить рацион своего питомца нашим профессионалам.',
    },
    {
        id: 4,
        title: 'Ежедневные прогулки',
        icon: "images/IconWalk.svg",
        alt: 'Прогулки',
        text: 'По вашему желанию мы выгуливаем вашего питомца два раза в день на специализированной закрытой территории.',
    },
    {
        id: 5,
        title: 'Лучшие ветеринары',
        icon: "images/IconDoctor.svg",
        alt: 'Забота о питомце',
        text: 'В гостинице 24 часа дежурит ветеринарный врач, который окажет любую помощь в случае необходимости.',
    },
];

const card = advantages.map((advantage) => {
    return (

        <div className={styles.card}>
            {<img className={styles.cardImg} src={advantage.icon} alt={advantage.alt} />}
            <div className={styles.advantegesText}>
                <h3 className={styles.lowTitle}>{advantage.title}</h3>
                <p className={styles.identationZero}>{advantage.text}</p>
            </div>
        </div>

    )
});
const SecondSectionAdvanteges = () => {

    return (
        <section className={styles.advanteges} id="part1">
            <h2 className={styles.advantegesTitle} >Почему мы?</h2>
            <div className={styles.cardAll}>

                {card}


            </div>
        </section>
    );
}

export default SecondSectionAdvanteges