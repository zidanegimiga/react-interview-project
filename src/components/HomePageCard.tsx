import React from 'react';
import Link from 'next/link';

import styles from "../../styles/HomepageCard.module.scss";
import { titleStyle } from './constants/inlineStyle';

import Button from './commons/Button';


const HomePageCards = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <p style={titleStyle}> Welcome </p>
        </div>
        <div className='linksContainer'>
          <Link href="/posts" passHref>
            <Button>Fetch Posts</Button>
          </Link>
          <Link href="/users" passHref>
            <Button> Fetch Users </Button>
          </Link>
        </div>
      </div>      
    </div>
  )
}

export default HomePageCards