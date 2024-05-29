import Styles from './Changer.module.scss';

const Changer = () => {

return (
<div className={Styles.changer}>
                <div className={Styles.dot}>
                    <button className={Styles.sliderDot}>
                    </button>
                    <button className={Styles.sliderDot}>
                    </button>
                    <button className={Styles.sliderDot}>
                    </button>
                </div>
                <div className={Styles.arrows}>
                    <button className={Styles.arrowBack}>
                        <img src="images/leftArrow.svg" alt="Назад"/>
                    </button>
                    <button className={Styles.arrowNext}>
                        <img src="images/rightArrow.svg" alt="Вперед"/>
                    </button>
                </div>
            </div>
);}

export default Changer;