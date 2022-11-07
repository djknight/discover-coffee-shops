import styles from "./banner.module.css";
const Banner = (props) => {
  return (
    <div className={StyleSheet.container}>
      <h1 className>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connissure</span>
      </h1>
      <p className={styles.subTitle}>Discover Your local coffee shops!</p>
      <button className={styles.button}>{props.buttonText}</button>
    </div>
  );
};
export default Banner;
