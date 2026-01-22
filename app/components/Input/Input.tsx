'use client';
import React, { useState } from 'react';
import styles from './Input.module.scss';
import { LucidePlus } from 'lucide-react';
import axios from 'axios';
import useWeatherCards from '@/app/store/store';
import { OpenWeatherResponse } from '@/types/CardType';
export default function Input({
  placeholder = 'Placeholder',
}: {
  placeholder?: string;
}) {
  const setCards = useWeatherCards((value) => value.addCard);
  const [city, setCity] = useState('');
  function getWeatherData() {
    axios
      .get<OpenWeatherResponse>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
      )
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.container__input}
        placeholder={placeholder}
        onChange={(e) => setCity(e.target.value)}
      />
      <div className={styles.container__icon}>
        <LucidePlus onClick={() => getWeatherData()} />
      </div>
    </div>
  );
}
