'use client';
import { motion } from 'framer-motion';
import styles from './Card.module.scss';
import { OpenWeatherResponse } from '@/types/CardType';
import Button from '../Button/Button';
import { useCurrenCard, useScreens, useWeatherCards } from '@/app/store/store';
import axios from 'axios';
import { useState } from 'react';

export default function Card({ data }: { data: OpenWeatherResponse }) {
  const removeCard = useWeatherCards((value) => value.removeCard);
  const refreshCard = useWeatherCards((value) => value.refreshCards);
  const [newData, setNewData] = useState<OpenWeatherResponse>();
  const addFullInfoFromCard = useCurrenCard((value) => value.setCurrentCard);
  const setScreen = useScreens((value) => value.setScreenState);

  const refreshData = () => {
    axios
      .get<OpenWeatherResponse>(
        `https://api.openweathermap.org/data/2.5/weather?q=${data.name}&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
      )
      .then((res) => {
        return setNewData({ ...res.data, cardID: data.cardID });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div
      className={styles.container}
      onClick={() => {
        addFullInfoFromCard(data);
        setScreen(false);
      }}
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

      <div className={styles.container__btn}>
        <Button
          text={'Refresh'}
          variant="primary"
          onclick={() => {
            refreshData();
            if (newData) {
              refreshCard(newData);
            }
          }}
        />
        <Button
          text={'Remove'}
          variant="remove"
          onclick={() => {
            removeCard(data);
          }}
        />
      </div>
    </div>
  );
}
