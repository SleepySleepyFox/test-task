import Button from './components/Button/Button';
import styles from './main.module.scss';
export default function Home() {
  return (
    <div className={styles.container}>
      <Button text="Button" />
    </div>
  );
}
