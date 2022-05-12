import type { NextPage } from 'next';
//import Image from 'next/image';
import TitleBar from '../components/global/TitleBar';
import HomePageCards from '../components/home/HomePageCard';
import Navbar from '../components/global/Navbar';
import styles from '../../styles/index.module.scss';

const Home: NextPage = () => {

  return (
    <div className={styles.homeBody}>
      <TitleBar title="Home"/>
      <HomePageCards /> 
    </div>
  )
}

export default Home;