
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div className="page-container">
      <Header />

      <div className={styles.main}>
        <h1>Next.js News App</h1>

        <h3>All Information are fetched from newsapi.org</h3>
      </div>
    </div>
  );
}