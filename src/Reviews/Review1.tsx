import Styles from './Reviews.module.scss';


const Review1 = () => {


    return (
        <div className={Styles.review}>
            <div className={Styles.reviewInfo}>
                <p className={Styles.reviewText}>Первый раз пришлось оставить нашего котика
                    в гостинице, очень переживали. Администратор
                    Мария каждый день высылала нам фото нашего питомца,
                    рассказывала, как он себя чувствует.
                    И мы и котик остались очень довольны!</p>
            </div>
            <div className={Styles.reviewDetail}>
                <div className={Styles.reviewName}>
                    Валерия Гришаева
                </div>
                <div className={Styles.reviewDate}>
                    15 ноября, 2019
                </div>
            </div>
        </div>
       
          
    )
};

export default Review1;

