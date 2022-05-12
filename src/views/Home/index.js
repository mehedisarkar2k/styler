import MainCard from '../../components/MainCard';
import Nav from '../../components/Nav';
import UserApparel from './UserApparel';

const LandingPage = () => {
  return (
    <div>
      <Nav />

      <MainCard>
        <h1 className="text-center mt-14 mb-5">Generate your apparel</h1>

        <UserApparel />
      </MainCard>
    </div>
  );
};

export default LandingPage;
