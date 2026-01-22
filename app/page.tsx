'use client';
import Input from './components/Input/Input';
import styles from './main.module.scss';
import FullDataScreen from './screens/FullData/FullDataScreen';
import MainScreen from './screens/Main/MainScreen';
import { useScreens } from './store/store';
export default function Home() {
  const screen = useScreens((value) => value.screenState);
  return (
    <div className={styles.container}>
      {!screen && <FullDataScreen />}
      <div className={styles.container__data}>
        {screen && (
          <div className={styles.container__input}>
            <Input placeholder="Enter city..." />
          </div>
        )}
        <div className={styles.container__screens}>
          {screen && <MainScreen />}
        </div>
      </div>
    </div>
  );
}
