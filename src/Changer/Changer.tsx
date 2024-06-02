import Styles from './Changer.module.scss';

const Changer = () => {

return (
<div className={Styles.changer}>
                <div className={Styles.dot}>
                    <button className={Styles.sliderDot}/>
                    
                    <button className={Styles.sliderDot}/>
                    
                    <button className={Styles.sliderDot}/>
                    
                </div>
                <div className={Styles.arrows}>
                    <button className={Styles.arrowBack}/>
                    <button className={Styles.arrowNext}/>
                    
                </div>
            </div>
);}

export default Changer;