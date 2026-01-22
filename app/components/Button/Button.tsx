'use client';
import React from 'react';
import styles from './Button.module.scss';

export default function Button({
  text,
  onclick,
}: {
  text: string;
  onclick?: () => void;
}) {
  return (
    <div className={styles.container}>
      <button
        className={styles.container__button}
        onClick={() => onclick && onclick()}
      >
        {text}
      </button>
    </div>
  );
}
