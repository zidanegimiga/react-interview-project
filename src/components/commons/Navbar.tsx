import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.nav}>
      <section className={styles.mainWrapper}>
        <div>
            <Link href="/" passHref>
                <a className={styles.homeLink}>Home</a>
            </Link>
        </div>
        <div className={styles.rightSection}>
            <div className={styles.linksRightContainer}>
                <Link href="/users" passHref>
                    <a className={styles.rightSideLink}> Users</a>
                </Link>
                <Link href="/posts" passHref>
                    <a className={styles.rightSideLink}>Posts</a>
                </Link>
                <Link href="www.github.com/zidanegimiga" passHref>
                    <a className={styles.rightSideLink}>About Project</a>
                </Link>
            </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
