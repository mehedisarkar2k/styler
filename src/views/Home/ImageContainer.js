const ImageContainer = ({ image }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-10">
      <div
        key={`${Date.now() + Math.random()}`}
        className="relative h-[450px] overflow-hidden shadow-md"
      >
        <img
          src={image}
          alt="apparel"
          className={`absolute -top-0 left-1/2 transform -translate-x-1/2`}
        />
      </div>

      <div
        key={`${Date.now() + Math.random()}`}
        className="relative h-[450px] overflow-hidden shadow-md"
      >
        <img
          src={image}
          alt="apparel"
          className={`absolute -top-[900px] left-1/2 transform -translate-x-1/2`}
        />
      </div>
      <div
        key={`${Date.now() + Math.random()}`}
        className="relative h-[450px] overflow-hidden shadow-md"
      >
        <img
          src={image}
          alt="apparel"
          className={`absolute -top-[1350px] left-1/2 transform -translate-x-1/2`}
        />
      </div>
      <div
        key={`${Date.now() + Math.random()}`}
        className="relative h-[450px] overflow-hidden shadow-md"
      >
        <img
          src={image}
          alt="apparel"
          className={`absolute -top-[1800px] left-1/2 transform -translate-x-1/2`}
        />
      </div>
      <div
        key={`${Date.now() + Math.random()}`}
        className="relative h-[450px] overflow-hidden shadow-md"
      >
        <img
          src={image}
          alt="apparel"
          className={`absolute -top-[2250px] left-1/2 transform -translate-x-1/2`}
        />
      </div>
      <div
        key={`${Date.now() + Math.random()}`}
        className="relative h-[450px] overflow-hidden shadow-md"
      >
        <img
          src={image}
          alt="apparel"
          className={`absolute -top-[2700px] left-1/2 transform -translate-x-1/2`}
        />
      </div>
      <div
        key={`${Date.now() + Math.random()}`}
        className="relative h-[450px] overflow-hidden shadow-md"
      >
        <img
          src={image}
          alt="apparel"
          className={`absolute -top-[3150px] left-1/2 transform -translate-x-1/2`}
        />
      </div>
      <div
        key={`${Date.now() + Math.random()}`}
        className="relative h-[450px] overflow-hidden shadow-md"
      >
        <img
          src={image}
          alt="apparel"
          className={`absolute -top-[3600px] left-1/2 transform -translate-x-1/2`}
        />
      </div>
      <div
        key={`${Date.now() + Math.random()}`}
        className="relative h-[450px] overflow-hidden shadow-md"
      >
        <img
          src={image}
          alt="apparel"
          className={`absolute -top-[4050px] left-1/2 transform -translate-x-1/2`}
        />
      </div>
    </div>
  );
};

export default ImageContainer;
