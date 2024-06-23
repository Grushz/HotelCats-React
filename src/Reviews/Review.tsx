import styles from './Reviews.module.scss';
import { reviewsData } from './dataReview';

const reviewsAll = reviewsData.map((review) => {
    return (

        <div className={styles.review} key={review.id}>
            <div className={styles.reviewInfo}>
                <p className={styles.reviewText}>{review.text}</p>
            </div>
            <div className={styles.reviewDetail}>
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



