import Link from "next/link";
import Image from "next/image";
import MobileNavbar from "./MobileNavbar";
import styles from "../../../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.nav}>
      <MobileNavbar />
      <section className={styles.mainWrapper}>
        <div className={styles.innerContainer}>
          <div>
            <Link href="/" passHref>
              <Image src="/logo.png" width={57} height={57} alt='logo'/>
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
              <a
                href="www.github.com/zidanegimiga"
                target="_blank"
                className={styles.rightSideLink}
              >
                About Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
