import { TbTruckDelivery } from "react-icons/tb";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import ra from "../../assets/Arial.jpg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Pages/Loading";
import { useContext } from "react";
import { WishListContext } from "../../Context/WishListContext";
import { HiOutlineEye } from "react-icons/hi";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const Offers = () => {
  const { addProductToWishList } = useContext(WishListContext);

  async function getProducts() {
    const { data } = await axios.get("https://api.sakank.net/api/home-page");
    return data;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["home-page"],
    queryFn: getProducts,
    select: (data) => data.products,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Loading />;

  return (
    <section className="bg-[#F8F9FB] min-h-screen py-12 font-cairo" dir="rtl">
      <div className="container px-4 md:px-12 mx-auto">
        {/* Header Section - Modern & Clean */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50">
          <div className="text-center md:text-right">
            <h2 className="text-3xl font-black text-[#000E39] mb-2">
              عروض العيد الأقوى 🌙
            </h2>
            <p className="text-gray-500">
              مجموعة مختارة من أفضل المنتجات بأسعار لا تقبل المنافسة
            </p>
          </div>
          <button className="bg-main text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-main/20 hover:scale-105 active:scale-95 duration-300 transition-all">
            عرض كل العروض
          </button>
        </div>

        {/* Products Grid - Full Width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data?.map(({ id, name, base_price, slug, images }) => (
            <div
              key={id}
              className="group bg-white rounded-[2.5rem] p-4 transition-all duration-500 hover:shadow-[0_22px_50px_-12px_rgba(0,14,57,0.1)] border border-transparent hover:border-gray-100 relative"
            >
              {/* Badge (Optional) */}
              <div className="absolute top-8 left-8 z-10">
                <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                  عرض خاص
                </span>
              </div>

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[2rem] bg-gray-50 h-[220px]">
                <img
                  src={
                    images && images.length > 0
                      ? `https://api.sakank.net/storage/${images[0].file_path}`
                      : ra
                  }
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => addProductToWishList(slug)}
                    className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-red-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <AiOutlineHeart size={20} />
                  </button>
                  <Link
                    to={`/productDetails/${slug}`}
                    className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-main hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75 duration-300"
                  >
                    <HiOutlineEye size={20} />
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-6 px-2 pb-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#000E39] text-lg line-clamp-1 flex-1">
                    {name}
                  </h3>
                  <div className="flex items-center gap-1 bg-yellow-400/10 px-2 py-1 rounded-lg">
                    <AiFillStar className="text-yellow-500" size={14} />
                    <span className="text-xs font-bold text-yellow-700">
                      4.5
                    </span>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-2xl font-black text-main">
                    {base_price} <small className="text-xs">ر.س</small>
                  </span>
                  <span className="text-gray-300 line-through text-sm italic">
                    2,500
                  </span>
                </div>

                <div
                  onClick={() => {}}
                  className="flex items-center justify-between gap-3"
                >
                  <button className="flex-[4] bg-[#F3F6FF] text-[#000E39] py-3.5 rounded-2xl font-bold hover:bg-main hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <CgShoppingCart size={18} />
                    أضف للسلة
                  </button>
                  <div
                    className="flex-[1] h-[52px] bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-main transition-colors cursor-help"
                    title="شحن مجاني"
                  >
                    <TbTruckDelivery size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {data?.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[3rem] shadow-sm">
            <p className="text-gray-400 text-xl font-bold">
              لا توجد منتجات متوفرة حالياً
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Offers;
