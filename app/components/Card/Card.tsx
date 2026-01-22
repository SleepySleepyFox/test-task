import { motion } from 'framer-motion';
import styles from './Card.module.scss';
import { OpenWeatherResponse } from '@/types/CardType';
import Button from '../Button/Button';
export default function Card({ data }: { data: OpenWeatherResponse }) {
  return (
    <motion.div
      className={styles.container}
      initial={{ x: -5, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <div className={styles.container__header}>
        <h1>{data.name}</h1>
      </div>

      <div className={styles.container__main}>
        <div className={styles.container__icon}>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt={data.weather[0].description}
          />
        </div>
        <div>
          <p>Temp: {data.main.temp}</p>
          <p>Min: {data.main.temp_min}</p>
          <p>Max: {data.main.temp_max}</p>
        </div>
      </div>
      <Button text={'Refresh'} />
    </motion.div>
  );
}
