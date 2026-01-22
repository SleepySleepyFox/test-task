'use client';
import React from 'react';
import styles from './Button.module.scss';

export default function Button({
  text,
  variant = 'primary',
  onclick,
}: {
  text: string;
  variant: 'primary' | 'remove';
  onclick?: () => void;
}) {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.container__button} ${variant == 'primary' ? styles['container__button--primary'] : styles['container__button--remove']}`}
        onClick={(e) => {
          e.stopPropagation();
          if (onclick) {
            onclick();
          }
        }}
      >
        {text}
      </button>
    </div>
  );
}
