import { Link } from "react-router-dom";
import Nfound from "../../assets/404/Group 427319586.svg";
const NotFound = () => {
  
  return (
    <section className="h-screen w-full">
      <div className="flex  flex-col gap-y-6 items-center justify-center  h-[80%]">
        <img src={Nfound} alt="Page not found" width={600} />
        <h4 className="text-3xl font-bold">عذرًا، الصفحة التي تبحث عنها غير متوفرة</h4>

        <p className="text-gray-700 text-lg">يرجى التأكد من صحة الرابط أو العودة إلى الصفحة الرئيسية</p>

        <Link to={'/'} className="bg-main text-white font-cairo px-4 py-2 rounded-2xl cursor-pointer">الرجوع الرئيسية</Link >
      </div>
    </section>
  );
};

export default NotFound;
