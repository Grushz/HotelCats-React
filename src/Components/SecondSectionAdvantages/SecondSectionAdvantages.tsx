import styles from './SecondSectionAdvantages.module.scss';
import { advantages } from './DataAdvantages';

const card = advantages.map((advantage) => {
    return (

        <div key={advantage.id} className={styles.card}>
            {<img  className={styles.cardImg} src={advantage.icon} alt={advantage.alt} />}
            <div className={styles.advantegesText}>
                <h3  className={styles.lowTitle}>{advantage.title}</h3>
                <p  className={styles.identationZero}>{advantage.text}</p>
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