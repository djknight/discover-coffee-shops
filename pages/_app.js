import "../styles/globals.css";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a>By DJ.Knight </a>
      </footer>
    </div>
  );
}
export default MyApp;
