const LowerApparel = () => {
  return (
    <div>
      <h4 className="mb-3 text-center text-gray-200">Lower apparel</h4>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-white">Name</label>
        <input
          type="text"
          className="bg-[rgba(0,0,0,.35)] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Sleeveless tops"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-white">Color</label>
        <input
          type="text"
          className="bg-[rgba(0,0,0,.35)] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Blue"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-white">Size</label>
        <input
          type="text"
          className="bg-[rgba(0,0,0,.35)] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Short"
        />
      </div>
    </div>
  );
};

export default LowerApparel;
