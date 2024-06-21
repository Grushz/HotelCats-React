import { useState } from 'react';
import styles from './FourthSectionReview.module.scss';
import Reviews from '../Reviews/Review.tsx';
import Changer from '../Changer/Changer.tsx';

const FourthSectionReview = () => {
    const right = [
        {right: '0px'},
        {right: '250px'},
        {right: '500px'},];
    const [reviewIndex, setReviewIndex] = useState(0)
    const handleChangeReview = (roomIndex: number) => {
        setReviewIndex(roomIndex);
    };
    
    let OnChangeReviewPosition =  right[reviewIndex];
    
    return (
        <section className={styles.reviews} id="part3">
        <h2 className={styles.reviewsTitle}>Отзывы</h2>
        <div className={styles.reviewCard} style={OnChangeReviewPosition}>
            <Reviews />
        </div>
        <Changer onChange={handleChangeReview} />
    </section>
    )
};

export default FourthSectionReview; 

//