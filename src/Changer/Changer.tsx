

import React, { useState } from 'react';
import Styles from './Changer.module.scss';

interface DotState {
  activeIndex: number; // Индекс активной точки
}

const Changer: React.FC = () => {

  const [dotState, setDotState] = useState<DotState>({ activeIndex: 0 }); // Состояние точек

  const handleSliderDotClick = (index: number) => {
    setDotState({ activeIndex: index }); // Сделать точку с индексом `index` активной
    console.log(index);
  };

  const handleArrowNextClick = () => {
    const nextIndex = (dotState.activeIndex + 1) % 3; 
    setDotState({ activeIndex: nextIndex }); 
  };

  const handleArrowBackClick = () => {
    const prevIndex = (dotState.activeIndex - 1 + 3) % 3; 
    setDotState({ activeIndex: prevIndex }); 
    console.log(prevIndex);
  };
  
  return (
    <div className={Styles.changer}>
      <div className={Styles.dot}>
        {Array.from({ length: 3 }).map((_, index) => (
          <button key={index}
            className={index === dotState.activeIndex ? Styles.sliderDotActive : Styles.sliderDot}
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

