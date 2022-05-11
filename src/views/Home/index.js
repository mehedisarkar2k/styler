import { useState } from 'react';
import MainCard from '../../components/MainCard';
import Nav from '../../components/Nav';
import SubCard from '../../components/SubCard';
import DesignerApparel from './DesignerApparel';
import LowerApparel from './LowerApparel';
import UpperApparel from './UpperApparel';

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

        {isDesigner ? (
          <SubCard className="min-h-[450px] flex flex-col items-center justify-center w-full">
            <div className="w-full">
              <DesignerApparel />

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Generate your apparel
                </button>
              </div>
            </div>
          </SubCard>
        ) : (
          <SubCard className="min-h-[450px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <UpperApparel />
              <LowerApparel />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-10"
              >
                Generate your apparel
              </button>
            </div>
          </SubCard>
        )}
      </MainCard>
    </div>
  );
};

export default LandingPage;
