import Styles from './FourthSectionReview.module.scss';
import Review1 from '../Reviews/Review1.tsx';
import Review2 from '../Reviews/Review2.tsx';
import Review3 from '../Reviews/Review3.tsx';
import Changer from '../Changer/Changer.tsx';
const FourthSectionReview = () => {

    
    return (
        <section className={Styles.reviews} id="part3">
        <h2 className={Styles.reviewsTitle}>Отзывы</h2>
        <div className={Styles.reviewCard}>
            <Review1 />
            <Review2 />
            <Review3 />
            
        </div>
        <Changer />
    </section>
    )
};

export default FourthSectionReview; 

