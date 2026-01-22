'use client';
import Card from '@/app/components/Card/Card';
import useWeatherCards from '@/app/store/store';
import { v4 as uuidv4 } from 'uuid';
import styles from './MainScreen.module.scss';
import React from 'react';

export default function MainScreen() {
  const cards = useWeatherCards((value) => value.cards);
  return (
    <div className={styles.container}>
      {cards.map((weatherData) => (
        <Card key={uuidv4()} data={weatherData} />
      ))}
    </div>
  );
}
