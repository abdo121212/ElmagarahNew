import { Link } from "react-router-dom";
import error from "../../assets/Error/ChatGPT Image Dec 10, 2025, 03_43_27 PM.png";
const Error = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="flex w-full h-full items-center justify-center">
        <div className="flex items-center mt-18 flex-col justify-center w-[584px] rounded-2xl h-[70vh] space-y-2.5 bg-white shadow-2xl  ">
          <img src={error} width={150} alt="done" className="object-cover " />
          <h1 className="text-2xl font-cairo">حدث خطأ، يُرجى إعادة المحاولة</h1>
          <p className="font-cairo  text-lg text-gray-500">
            نأسف، تعذّر تنفيذ الطلب. يُرجى المحاولة مرة أخرى.
          </p>

          <Link
            to={"/"}
            className="inline-flex items-center justify-center cursor-pointer px-4 py-2 font-cairo text-white bg-main rounded-lg "
          >
            الرجوع الرئيسية
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
