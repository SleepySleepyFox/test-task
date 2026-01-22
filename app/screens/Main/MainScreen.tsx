'use client';
import Card from '@/app/components/Card/Card';
import { useWeatherCards } from '@/app/store/store';
import styles from './MainScreen.module.scss';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { OpenWeatherResponse } from '@/types/CardType';

export default function MainScreen() {
  const cards = useWeatherCards((value) => value.cards);

  return (
    <div className={styles.container}>
      {cards.map((weatherData) => {
        console.log(weatherData);
        return (
          <motion.div
            key={weatherData.cardID}
            initial={{ x: -5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Card data={weatherData} />
          </motion.div>
        );
      })}
    </div>
  );
}
