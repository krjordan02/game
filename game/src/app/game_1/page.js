import Image from "next/image";
import styles from "../page.module.css";
// import WordAddition from "/game/src/Components/WordAddition.js"
import WordAddition from "../Components/WordAddition"

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <h1 style={{color: "black", fontSize: "5.5vh", animation: "fade-in 1s"}}>Word Addition</h1>
      </div>
      <div>
        <WordAddition/>
      </div>
      <footer className={styles.footer}>
        <p style={{color: "black", animation: "fade-in 1s"}}>By Keegan Jordan</p>
      </footer>
    </div>
  );
}