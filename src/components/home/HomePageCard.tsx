import Link from 'next/link';
import Button from '../global/Button';
import styles from "../../../styles/HomePageCard.module.scss";

const HomePageCards = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerContainer}>
        <div className={styles.titleHeader}>
          <h1 className={styles.title}>Welcome</h1>
          <hr className={styles.horizontalRule}/>
        </div>
        <div className={styles.buttonsContainer}>
          <Link href={"/posts"} passHref>
            <Button margin={'8px'}> Open Posts </Button>
          </Link>
          <Link href={"/users"} passHref>
            <Button margin={'8px'}> View Users </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePageCards