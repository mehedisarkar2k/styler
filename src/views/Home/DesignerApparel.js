import Input from '../../components/Input';
import Img from '../../img/bg-1.jpg';

const DesignerApparel = () => {
  return (
    <section className="mx-auto">
      <section className="relative px-10 md:p-0 transform duration-500 shadow hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
        <img className="xl:max-w-6xl" src={Img} alt="" />

        <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-1/2 right-5 transform -translate-y-1/2 shadow">
          <h5 className="mb-4">Apparel</h5>
          <Input label="Apparel details" id="name" className="mb-4" />

          <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-blue-500">
            Generate Apparel
          </button>
        </div>
      </section>
    </section>
  );
};

export default DesignerApparel;
