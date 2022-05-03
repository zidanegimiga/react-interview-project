import styles from "../../styles/Users.module.scss";

type Response = {
  aptCount: number;
  suiteCount: number;
};

const StatsCard = (response: Response) => {
  return (
    <div className={styles.statsCard}>
      <h3>Stats</h3>
      <p> Number of users living in: </p>
      <p>Apartments: {response.aptCount}</p>
      <p>Suites: {response.suiteCount}</p>
    </div>
  );
};

export default StatsCard;
