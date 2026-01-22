import Button from './components/Button/Button';
import Input from './components/Input/Input';
import styles from './main.module.scss';
export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Button text="Button" /> */}
      <Input placeholder="Enter city..." />
    </div>
  );
}
