import img1 from "../../assets/Feature/Group 427319338.svg";
import img2 from "../../assets/Feature/Group 427319339.svg";
import img3 from "../../assets/Feature/Group 427319340.svg";
const Feature = () => {
  return (
    <section className="container px-8 mx-auto my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        <div className="bg-[#F0F4FE] flex items-center  p-4 rounded-2xl space-x-3.5">
          <img src={img1} alt="fast" />

          <div className="flex flex-col space-y-2 ">
            <h3 className="font-bold text-lg">تسوق آمن</h3>
            <h5 className="font-cairo text-lg">بياناتك محمية دائمًا</h5>
          </div>
        </div>

        <div className="bg-[#F0F4FE] flex items-center  p-4 rounded-2xl space-x-3.5">
          <img src={img2} alt="fast" />

          <div className="flex flex-col space-y-2 ">
            <h3 className="font-bold text-lg">إرجاع مجاني</h3>
            <h5 className="font-cairo text-lg">
              إرجاع مجاني على كل المنتجات مجانًا
            </h5>
          </div>
        </div>

        <div className="bg-[#F0F4FE] flex items-center  p-4 rounded-2xl space-x-3.5">
          <img src={img3} alt="fast" />

          <div className="flex flex-col  space-y-2 ">
            <h3 className="font-bold text-lg">شحن مجاني</h3>
            <h5 className="font-cairo text-lg">على كل المنتجات مجانًا</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
