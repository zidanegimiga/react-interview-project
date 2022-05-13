import styles from "../../../styles/Users.module.scss";

type Response = {
  aptCount: number;
  suiteCount: number;
};

const StatsCard = (response: Response) => {
  return (
    <div className={styles.statsCard}>
      <span className={styles.statsTitle}>Stats</span>
      <p className={styles.descriptor}> Number of users living in: </p>
      <span>Apartments: {response.aptCount}</span>
      <span>Suites: {response.suiteCount}</span>
    </div>
  );
};

export default StatsCard;
