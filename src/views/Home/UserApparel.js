import { useState } from 'react';
import Input from '../../components/Input';
import Img from '../../img/bg-2.jpg';

const LowerApparel = () => {
  const [isLower, setIsLower] = useState(false);

  return (
    <>
      <section className="mx-auto">
        <section className="relative px-10 md:p-0 transform duration-500 shadow hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
          <img className="xl:max-w-6xl" src={Img} alt="" />

          <div className=" bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-1/2 right-5 transform -translate-y-1/2 shadow">
            <div className="flex items-center mb-4">
              <h5 className="mr-4">Apparel for:</h5>
              <div className="flex items-center mr-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="gender"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="inline-radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Male
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value=""
                  name="gender"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Female
                </label>
              </div>
            </div>

            <h5 className="mb-2">Upper Apparel</h5>
            <Input label="Name" id="name" className="mb-4" />
            <Input label="Color" id="color" className="mb-4" />
            <Input label="size" id="size" className="" />

            <div className={`flex items-center mt-4 mb-2`}>
              <input
                onChange={() => setIsLower(!isLower)}
                id="lower"
                type="checkbox"
                checked={isLower}
                value={isLower}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 "
              />
              <label htmlFor="lower" className="ml-2 text-sm font-medium">
                <h5 className="">Lower Apparel</h5>
              </label>
            </div>

            {isLower && (
              <>
                <Input label="Name" id="name2" className="mb-4" />
                <Input label="Color" id="color2" className="mb-4" />
                <Input label="size" id="size2" className="mb-4" />
              </>
            )}

            <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-blue-500">
              Generate Apparel
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default LowerApparel;
