import Styles from './Reviews.module.scss';


const Review3 = () => {


    return (
        <div className={Styles.review}>
    <div className={Styles.reviewInfo}>
        <p className={Styles.reviewText}>Мой кот — настоящая привереда, угодить ему сложно.
            У меня были особые требования к уходу за ним, и “Котейка” отлично
            справились. Я часто наблюдал по видео за питомцем со своего телефона,
            это очень удобно. </p>
    </div>
    <div className={Styles.reviewDetail}>
        <div className={Styles.reviewName}>
            Павел Нечаев
        </div>
        <div className={Styles.reviewDate}>
            24 ноября, 2019
        </div>
    </div>
</div>
       
          
    )
};

export default Review3;



