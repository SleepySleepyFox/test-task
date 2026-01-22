'use client';
import Card from '@/app/components/Card/Card';
import { useWeatherCards } from '@/app/store/store';
import styles from './MainScreen.module.scss';
import React from 'react';
import { motion } from 'framer-motion';

export default function MainScreen() {
  const cards = useWeatherCards((value) => value.cards);
  return (
    <div className={styles.container}>
      {cards.map((weatherData) => (
        <motion.div
          key={weatherData.cardID}
          initial={{ x: -5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Card data={weatherData} />
        </motion.div>
      ))}
    </div>
  );
}
