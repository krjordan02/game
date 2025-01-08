import Image from "next/image";
import styles from "../page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <h1 style={{color: "black", fontSize: "5.5vh", animation: "fade-in 1s"}}>Game 2</h1>
      </div>
      <div>
        
      </div>
      <footer className={styles.footer}>
        <p style={{color: "black", animation: "fade-in 1s"}}>By Keegan Jordan</p>
      </footer>
    </div>
  );
}