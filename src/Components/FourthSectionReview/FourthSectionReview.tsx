import { useState} from 'react';
import styles from './FourthSectionReview.module.scss';
import Reviews from '../Reviews/Review.tsx';
import Changer from '../Changer/Changer.tsx';

const FourthSectionReview = () => {
    /*const right = [
        { right: '0px' },
        { right: '250px' },
        { right: '500px' },];*/
    const [reviewIndex, setReviewIndex] = useState<number>(0)
    const [reviewPosition, setReviewPosition] = useState<string>( '' );
    const handleChangeReview = (newReviewIndex: number) => {
        setReviewIndex(newReviewIndex);
        if (newReviewIndex > reviewIndex ) {
        ReviewAnimation(+newReviewIndex);
        }
        if (newReviewIndex < reviewIndex ) {
            ReviewAnimation(-newReviewIndex);
        }
    };
    
    function ReviewAnimation(ReviewIndexPosition: number) {
        if (ReviewIndexPosition === 1) {
            setReviewPosition(styles.positionright1);
        }
        if (ReviewIndexPosition === 2) {
            setReviewPosition(styles.positionright2);
        }
        if (ReviewIndexPosition === -1) {
            setReviewPosition(styles.positionleft1);
        }
        if (ReviewIndexPosition === 0) {
            setReviewPosition(styles.positionleft2);
        }
    };
    

    return (
        <section className={styles.reviews} id="part3">
            <h2 className={styles.reviewsTitle}>Отзывы</h2>
            <div className={`${styles.reviewCard} ${reviewPosition}`} >
                <Reviews />
            </div>
            <Changer onChange={handleChangeReview} />
        </section>
    )
};

export default FourthSectionReview;

//