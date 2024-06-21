import Styles from './FourthSectionReview.module.scss';
import Reviews from '../Reviews/Review1.tsx';

//import Changer from '../Changer/Changer.tsx';
const FourthSectionReview = () => {

    
    return (
        <section className={Styles.reviews} id="part3">
        <h2 className={Styles.reviewsTitle}>Отзывы</h2>
        <div className={Styles.reviewCard}>
            <Reviews />
        </div>
       
    </section>
    )
};

export default FourthSectionReview; 

//<Changer onChange={handleChange} />