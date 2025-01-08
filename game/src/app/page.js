import Image from "next/image";
import GameCard from "./Components/GameCard"
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <h1 style={{color: "black", fontSize: "5.5vh", animation: "fade-in 1s"}}>Coffee Games</h1>
      </div>
      <div className={styles.gameCardContainer}>
        <div><GameCard name="Word Addition" link="/game_1" backgroundColor="#1e325c"/></div>
        <div><GameCard name="Game 2" link="/game_2" backgroundColor="#215F7F"/></div>
        <div><GameCard name="Game 3" link="/game_3" backgroundColor="#06BCC1"/></div>
      </div>
      <footer className={styles.footer}>
        <p style={{color: "black", animation: "fade-in 1s"}}>By Keegan Jordan</p>
      </footer>
    </div>
  );
}
