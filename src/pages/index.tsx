import type { NextPage } from 'next';
import TitleBar from '../components/global/TitleBar';
import HomePageCards from '../components/home/HomePageCard';

const Home: NextPage = () => {

  return (
    <div>
      <TitleBar />
      <HomePageCards /> 
    </div>
  )
}

export default Home;