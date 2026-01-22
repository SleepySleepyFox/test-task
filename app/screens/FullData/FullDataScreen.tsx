import { useCurrenCard, useScreens } from '@/app/store/store';
import { OpenWeatherResponse } from '@/types/CardType';
import { LucideX } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './FullDataScreen.module.scss';
import Button from '@/app/components/Button/Button';

export default function FullDataScreen() {
  const setScreen = useScreens((value) => value.setScreenState);
  const screen: OpenWeatherResponse = useCurrenCard(
    (value) => value.currentCard,
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.container}
    >
      <div>
        <div>
          <h1>{screen.name}</h1>
          <h5>{screen.sys?.country}</h5>
        </div>
        <h3>Main:</h3>
        <div>
          Coord: {screen.coord?.lat} {screen.coord?.lon}
        </div>
        <div>Temp: {screen.main?.temp}</div>
        <div>Temp Min: {screen.main?.temp_min}</div>
        <div>Temp Max: {screen.main?.temp_max}</div>
        <div>Pressure: {screen.main?.pressure}</div>
        <div>Humidity: {screen.main?.humidity}</div>
        <div>Feels like: {screen.main?.feels_like}</div>

        <div className={styles.container__wind}>
          <h3>Wind:</h3>
          <div>Deg: {screen.wind?.deg}</div>
          <div>Speed: {screen.wind?.speed}</div>
        </div>
        <Button
          variant="primary"
          text="Leave"
          onclick={() => {
            setScreen(true);
          }}
        />
      </div>
    </motion.div>
  );
}
