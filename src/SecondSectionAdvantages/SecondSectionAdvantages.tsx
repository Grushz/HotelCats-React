import styles from './SecondSectionAdvantages.module.scss';


const SecondSectionAdvanteges = () => {

    return (
<section className={styles.advanteges} id="part1">
<h2 className={styles.advantegesTitle} >Почему мы?</h2>
<div className={styles.cardAll}>
    <div className={styles.card}>
        <img className={styles.cardImg} src="images/IconTemp.svg" alt="Температура"/>
        <div className={styles.advantegesText}>
            <h3 className={styles.lowTitle}>Комфортная температура</h3>
            <p className={styles.identationZero}>Во всех номерах поддерживается
                комфортная температура в пределах
                23 - 25 градусов. В каждом номере
                можно дополнительно отрегулировать
                температуру. </p>
        </div>
    </div>
    <div className={styles.card}>
        <img className={styles.cardImg} src="images/IconCamera.svg" alt="Камера наблюдения"/>
        <div className={styles.advantegesText}>
            <h3 className={styles.lowTitle}>Видеонаблюдение</h3>
            <p className={styles.identationZero}>Мы предоставляем доступ в нашу
                систему. Вы сможете следить
                за своим питомцем со своего
                смартфона или компьютера. </p>
        </div>
    </div>
    <div className={styles.card}>
        <img className={styles.cardImg} src="images/IconTaxi.svg" alt="Зоотакси"/>
        <div className={styles.advantegesText}>
            <h3 className={styles.lowTitle}>Услуги Зоотакси</h3>
            <p className={styles.identationZero}>Мы приедем за вашим питомцем
                в любой район Санкт-Петербурга. </p>
        </div>
    </div>
    <div className={styles.card}>
        <img className={styles.cardImg} src="images/IconFood.svg" alt="Еда для питомца"/>
        <div className={styles.advantegesText}>
            <h3 className={styles.lowTitle}>Сбалансированное питание</h3>
            <p className={styles.identationZero}>Вы можете привезти свой корм
                или доверить рацион своего
                питомца нашим профессионалам. </p>
        </div>
    </div>
    <div className={styles.card}>
        <img className={styles.cardImg} src="images/IconWalk.svg" alt="Прогулки"/>
        <div className={styles.advantegesText}>
            <h3 className={styles.lowTitle}>Ежедневные прогулки</h3>
            <p className={styles.identationZero}> По вашему желанию мы выгуливаем
                вашего питомца два раза в день
                на специализированной закрытой
                территории.</p>
        </div>
    </div>
    <div className={styles.card}>
        <img className={styles.cardImg} src="images/IconDoctor.svg" alt="Забота о питомце"/>
        <div className={styles.advantegesText}>
            <h3 className={styles.lowTitle}>Лучшие ветеринары</h3>
            <p className={styles.identationZero}>В гостинице 24 часа дежурит
                ветеринарный врач, который окажет
                любую помощь в случае необходимости. </p>
        </div>
    </div>
</div>
</section>
);}

export default SecondSectionAdvanteges