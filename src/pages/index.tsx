import type { NextPage } from 'next';
import TitleBar from '../components/commons/TitleBar';
import HomePageCards from '../components/HomePageCard';

const Home: NextPage = (props) => {

  return (
    <div>
      <TitleBar />
      <HomePageCards />
    </div>
  )
}

export default Home;