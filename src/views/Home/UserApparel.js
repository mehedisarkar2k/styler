import { useState } from 'react';
import Input from '../../components/Input';
import config from '../../config';
import Img from '../../img/bg-2.jpg';
import ImageContainer from './ImageContainer';

const LowerApparel = () => {
  const [isUpper, setIsUpper] = useState(true);
  const [isLower, setIsLower] = useState(false);
  const [gender, setGender] = useState('male');
  const [type, setType] = useState('shirt');
  const [color, setColor] = useState('blue');
  const [characteristics, setCharacteristics] = useState('blue');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateApparel = async () => {
    const reqData = {
      gender,
      apparel_type: type,
      colour: color,
      characteristics,
      placing: isUpper ? 'upper' : 'lower',
    };

    setLoading(true);

    try {
      const response = await fetch(`${config.api_url}/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqData),
      });

      const imageBlob = await response.blob();

      const reader = new FileReader();
      reader.readAsDataURL(imageBlob);

      reader.onloadend = () => {
        const base64data = reader.result;
        setImage(base64data);
        setLoading(false);
      };
    } catch {
      setLoading(false);
    }
  };

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
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  id="inline-radio"
                  type="radio"
                  value="male"
                  name="gender"
                  checked={gender === 'male'}
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
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  id="inline-2-radio"
                  type="radio"
                  value="female"
                  name="gender"
                  checked={gender === 'female'}
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

            <div className={`flex items-center mt-4 mb-2`}>
              <input
                onChange={() => {
                  setIsUpper(true);
                  setIsLower(false);
                }}
                id="upper"
                type="checkbox"
                checked={isUpper}
                value={isUpper}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 "
              />
              <label htmlFor="upper" className="ml-2 text-sm font-medium">
                <h5 className="">Upper Apparel</h5>
              </label>
            </div>

            {isUpper && (
              <>
                <Input
                  onChange={(e) => setType(e.target.value)}
                  label="Apparel Name"
                  id="name2"
                  className="mb-4"
                />
                <Input
                  onChange={(e) => setColor(e.target.value)}
                  label="Color"
                  id="color2"
                  className="mb-4"
                />
                <Input
                  onChange={(e) => setCharacteristics(e.target.value)}
                  label="Characteristics"
                  id="color2"
                  className="mb-1"
                />
                <p className="italic text-gray-600 text-sm">
                  ex: plain, patterned, striped, floral, plaid
                </p>
              </>
            )}
            <div className={`flex items-center mt-4 mb-2`}>
              <input
                onChange={() => {
                  setIsUpper(false);
                  setIsLower(true);
                }}
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
                <Input
                  onChange={(e) => setType(e.target.value)}
                  label="Apparel Name"
                  id="name2"
                  className="mb-4"
                />
                <Input
                  onChange={(e) => setColor(e.target.value)}
                  label="Color"
                  id="color2"
                  className="mb-4"
                />
                <Input
                  onChange={(e) => setCharacteristics(e.target.value)}
                  label="Characteristics"
                  id="color2"
                  className="mb-1"
                />
                <p className="italic text-gray-600 text-sm">
                  ex: plain, patterned, striped, floral, plaid
                </p>
              </>
            )}

            <button
              onClick={generateApparel}
              className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-blue-500"
            >
              Generate Apparel
            </button>
          </div>
        </section>
      </section>

      {!loading && image && <ImageContainer image={image} />}
      {loading && (
        <div className="text-center mt-5">
          <h4>generating...</h4>
        </div>
      )}
    </>
  );
};

export default LowerApparel;
