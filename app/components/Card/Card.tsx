import { motion } from 'framer-motion';
import styles from './Card.module.scss';
import { OpenWeatherResponse } from '@/types/CardType';
export default function Card({ data }: { data: OpenWeatherResponse }) {
  return (
    <motion.div className={styles.container}>
      <div>
        <h1>{data.name}</h1>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
        />
      </div>
      <div></div>
    </motion.div>
  );
}
