import styles from './Reviews.module.scss';


const reviewsData = [
    {
        id: 0,
        text: "Первый раз пришлось оставить нашего котика в гостинице, очень переживали. Администратор Мария каждый день высылала нам фото нашего питомца, рассказала, как он себя чувствует. И мы и котик остались очень довольны!",
        name: "Валерия Гришаева",
        date: "15 ноября, 2019",
    },
    {
        id: 1,
        text: "Гостиницу для питомцев нам посоветовали друзья. Они всегда оставляют здесь своего кота, когда уезжают. В “Котейке” очень хорошо заботятся о питомцах, в гостинице очень чисто. Всем рекомендую! Будем обращаться еще.",
        name: "Екатерина Минаева",
        date: "10 октября, 2019",
    },
    {
        id: 2,
        text: "Мой кот — настоящая привереда, угодить ему сложно. У меня были особые требования к уходу за ним, и “Котейка” отлично справились. Я часто наблюдал по видео за питомцем со своего телефона, это очень удобно.",
        name: "Павел Нечаев",
        date: "24 ноября, 2019",
    }

]

const reviewsAll = reviewsData.map((review) => {
    return (

        <div className={styles.review} key={review.id}>
            <div className={styles.reviewInfo}>
                <p className={styles.reviewText}>{review.text}</p>
            </div>
            <div className={styles.reviewDetail} key={review.id}>
                <div className={styles.reviewName}>{review.name}</div>
                <div className={styles.reviewDate}>{review.date}</div>
            </div>
        </div>

    )
});

const Reviews = () => {


    return (
        <>
            {reviewsAll}
        </>

    )
};

export default Reviews;



