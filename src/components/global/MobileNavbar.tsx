import Link from 'next/link';
import { useState } from "react";
import { navBar } from '../constants/web_strings';
import {CgMenuRight, CgClose} from "react-icons/cg"
import styles from "../../../styles/Navbar.module.scss"

const MobileNavbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  
  const hamburgerIcon = <CgMenuRight
                          className={styles.hamburgerBtn}  
                          size="25px"
                          onClick={() => setMobileNav(!mobileNav)} 
                        />
  
  const closeIcon = <CgClose
                          className={styles.hamburgerBtn}  
                          size="25px"
                          onClick={() => setMobileNav(!mobileNav)} 
                        />

  return (
    <div className={styles.mobileNavContainer}>
      <div>
        {mobileNav ? closeIcon : hamburgerIcon}
      </div>

    {mobileNav && 
      <div className={styles.mobileNavLinksContainer}>
        <Link href={navBar.home[1]} passHref>
          <span>{navBar.home[0]}</span>
        </Link>
        <Link href={navBar.users[1]} passHref>
          <span>{navBar.users[0]}</span>
        </Link>
        <Link href={navBar.posts[1]} passHref>
          <span>{navBar.posts[0]}</span>
        </Link>      
        <Link href={navBar.about[1]} passHref>
          <span>{navBar.about[0]}</span>
        </Link>
      </div>
    }
    </div>
  );
}

export default MobileNavbar;
