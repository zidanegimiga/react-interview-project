import Link from 'next/link';
import { useState } from "react";
import { navBar } from '../constants/web_strings';
import {CgMenuRight, CgClose} from "react-icons/cg"
import styles from "../../../styles/Navbar.module.scss"
import Image from 'next/image';

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
          <Image src="/logo.png" alt='logo'/>
        </Link>
        <Link href={navBar.users[1]} passHref>
          <a>{navBar.users[0]}</a>
        </Link>
        <Link href={navBar.posts[1]} passHref>
          <a>{navBar.posts[0]}</a>
        </Link>      
        <Link href={navBar.about[1]} passHref>
          <a>{navBar.about[0]}</a>
        </Link>
      </div>
    }
    </div>
  );
}

export default MobileNavbar;
