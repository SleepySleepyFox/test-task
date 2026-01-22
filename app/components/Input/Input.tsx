import React from 'react';
import styles from './Input.module.scss';
import { LucidePlus } from 'lucide-react';
export default function Input({
  placeholder = 'Placeholder',
}: {
  placeholder?: string;
}) {
  return (
    <div className={styles.container}>
      <input className={styles.container__input} placeholder={placeholder} />
      <div className={styles.container__icon}>
        <LucidePlus />
      </div>
    </div>
  );
}
