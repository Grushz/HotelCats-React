

import { useState } from 'react';
import Styles from './Changer.module.scss';

interface DotState {
  activeIndex: number; // Индекс активной точки
}





const Changer = ({onChange}: {onChange: (roomIndex: number) => void}) => {
  const [State, setDotState] = useState<DotState>({ activeIndex: 0 }); // Состояние точек

  const handleSliderDotClick = (index: number) => {
    setDotState({ activeIndex: index }); // Сделать точку с индексом `index` активной
    onChange(index);
    console.log(index);
  };

  const handleArrowNextClick = () => {
    const nextIndex = (State.activeIndex + 1) % 3; 
    setDotState({ activeIndex: nextIndex });
    onChange(nextIndex); 
  };

  const handleArrowBackClick = () => {
    const prevIndex = (State.activeIndex - 1 + 3) % 3; 
    setDotState({ activeIndex: prevIndex }); 
    onChange(prevIndex); 
    console.log(prevIndex);
  };

  
  
  return (
    <div className={Styles.changer}>
      <div className={Styles.dot}>
        {Array.from({ length: 3 }).map((_, index) => (
          <button key={index}
            className={index === State.activeIndex ? Styles.sliderDotActive : Styles.sliderDot}
            onClick={() => handleSliderDotClick(index)}
          />
        ))}
      </div>
      <div className={Styles.arrows}>
        <button className={Styles.arrowBack} onClick={handleArrowBackClick} />
        <button className={Styles.arrowNext} onClick={handleArrowNextClick} />
      </div>
    </div>
  );
};

export default Changer;

