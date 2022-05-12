import { useState } from 'react';
import MainCard from '../../components/MainCard';
import Nav from '../../components/Nav';
import DesignerApparel from './DesignerApparel';
import UserApparel from './UserApparel';

const LandingPage = () => {
  const [isDesigner, setIsDesigner] = useState(false);

  return (
    <div>
      <Nav />

      <MainCard>
        <h1 className="text-center text-white my-5">Generate your apparel</h1>

        <div className={`flex items-center mb-4`}>
          <input
            onChange={() => setIsDesigner(!isDesigner)}
            id="default-checkbox"
            type="checkbox"
            checked={isDesigner}
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 "
          />
          <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium">
            <h6 className="">Want to generate apparel as designer?</h6>
          </label>
        </div>

        {isDesigner ? <DesignerApparel /> : <UserApparel />}
      </MainCard>
    </div>
  );
};

export default LandingPage;
