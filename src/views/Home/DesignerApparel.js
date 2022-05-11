import React from 'react';

const DesignerApparel = () => {
  return (
    <div>
      <h4 className="mb-3 text-center">Designer apparel</h4>

      <>
        <div className="mb-6 w-1/2 mx-auto">
          <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
            Apparel Inspiration
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Blue sleeveless tops and jeans"
            required
          />
        </div>
      </>
    </div>
  );
};

export default DesignerApparel;
