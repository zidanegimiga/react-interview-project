import type { NextPage } from 'next';
//import Image from 'next/image';
import TitleBar from '../components/global/TitleBar';
import HomePageCards from '../components/home/HomePageCard';
import Navbar from '../components/global/Navbar';

const Home: NextPage = () => {

  return (
    <div>
      <TitleBar />
        <Navbar />
        <HomePageCards />
    </div>
  )
}

export default Home;