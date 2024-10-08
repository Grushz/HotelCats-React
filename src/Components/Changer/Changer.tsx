
import { useState } from 'react';
import styles from './Changer.module.scss';

interface IDotState {
  activeIndex: number; // Индекс активной точки
}

const Changer = ({ onChange }: { onChange: (roomIndex: number) => void }) => {
  const [State, setDotState] = useState<IDotState>({ activeIndex: 0 }); // Состояние точек
  const maxIndex = 2; // Максимальный индекс точек
  const minIndex = 0; // Минимальный индекс точек
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
    
  };

  return (
    <div className={styles.changer}>
      <div className={styles.dot}>
        {Array.from({ length: 3 }).map((_, index) => (
          <button key={index}
            className={index === State.activeIndex ? styles.sliderDotActive : styles.sliderDot}
            onClick={() => handleSliderDotClick(index)}
          />
        ))}
      </div>
      <div className={styles.arrows}>
        <button className={styles.arrowBack} onClick={handleArrowBackClick} style={{backgroundColor: State.activeIndex === minIndex ? '#DCDCDC' : ''}} disabled={State.activeIndex === minIndex} />
        <button className={styles.arrowNext} onClick={handleArrowNextClick} style={{backgroundColor: State.activeIndex === maxIndex ? '#DCDCDC' : ''}} disabled={State.activeIndex === maxIndex} />
      </div>
    </div>
  );
};

export default Changer;

