import Input from './components/Input/Input';
import styles from './main.module.scss';
import MainScreen from './screens/Main/MainScreen';
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container__input}>
        <Input placeholder="Enter city..." />
      </div>
      <MainScreen />
    </div>
  );
}
