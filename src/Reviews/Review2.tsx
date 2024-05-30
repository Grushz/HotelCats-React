import Styles from './Reviews.module.scss';


const Review2 = () => {


    return (
        <div className={Styles.review}> 
        <div className={Styles.reviewInfo}>
            <p className={Styles.reviewText} identation-zero>Гостиницу для питомцев нам посоветовали друзья.
                Они всегда оставляют здесь своего кота, когда уезжают.
                В “Котейке” очень хорошо заботятся о питомцах, в гостинице очень чисто.
                Всем рекомендую! Будем обращаться еще.</p>
        </div>
        <div className={Styles.reviewDetail}>
            <div className={Styles.reviewName}>
                Екатерина Минаева
            </div>
            <div className={Styles.reviewDate}>
                10 октября, 2019
            </div>
        </div>
        </div>
       
          
    )
};

export default Review2;


