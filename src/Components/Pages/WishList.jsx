import { HiOutlineShoppingBag } from "react-icons/hi";
import { useContext, useEffect } from "react";
import { WishListContext } from "../../Context/WishListContext";
import { TbTruckDelivery, TbTrash } from "react-icons/tb";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import img1 from "../../assets/Offers/71WkqFssobL._AC_SL1500_ 2.jpg";
// import ra from "../../assets/Arial.jpg";

const WishList = () => {
  const { addProductToWishList } = useContext(WishListContext);

  const {
    getProductFromWishlist,
    dataFromWishList,
    deleteProductFromWishlist,
  } = useContext(WishListContext);
  useEffect(() => {
    getProductFromWishlist();
  }, []);

  return (
    <section className="bg-[#F8F9FB] min-h-screen py-5 font-cairo" dir="rtl">
      <div className="container px-4 md:px-12 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
          <h5 className="font-black text-2xl text-[#000E39]">
            قائمة المفضلة ❤️
          </h5>
          <span className="bg-main/10 text-main px-4 py-1 rounded-full text-sm font-bold">
            {dataFromWishList.length} منتج
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {dataFromWishList.length > 0 ? (
            dataFromWishList.map(
              ({ product: { name, base_price, id, slug } }) => (
                <div
                  key={id}
                  className="group bg-white rounded-[2rem] p-5 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-main/10 relative flex flex-col h-full"
                >
                  {/* Delete Button - Floating */}
                  <button
                    onClick={() => deleteProductFromWishlist(slug)}
                    className="absolute top-4 right-4 z-10 w-9 h-9 bg-red-50 text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-300 shadow-sm"
                    title="حذف من المفضلة"
                  >
                    <TbTrash size={18} />
                  </button>

                  {/* Product Image */}
                  <div className="relative aspect-square mb-4 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center">
                    <img
                      src={img1}
                      alt={name}
                      className="w-4/5 h-4/5 object-contain group-hover:scale-110 duration-700 transition-transform"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="font-bold text-[#000E39] text-md line-clamp-1 mb-2 hover:text-main cursor-pointer duration-200">
                      {name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex text-[#FED74B]">
                        {[...Array(4)].map((_, i) => (
                          <AiFillStar key={i} size={14} />
                        ))}
                        <AiFillStar className="text-gray-200" size={14} />
                      </div>
                      <span className="text-xs text-gray-400 font-bold">
                        (4.0)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-black text-main">
                        {base_price} <small className="text-[10px]">ر.س</small>
                      </span>
                      <span className="text-gray-300 line-through text-xs italic">
                        2,500
                      </span>
                    </div>

                    {/* Info Tags */}
                    <div className="flex items-center gap-2 mb-6 bg-gray-50 p-2 rounded-xl">
                      <TbTruckDelivery size={18} className="text-main" />
                      <span className="text-xs font-bold text-[#000E39]">
                        شحن مجاني سريع
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto space-y-2">
                      <button
                        onClick={() => addProductToWishList(slug)}
                        className="w-full bg-main text-white py-3 rounded-xl font-bold hover:bg-[#000E39] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-main/20"
                      >
                        <HiOutlineShoppingBag size={20} />
                        أضف للسلة
                      </button>
                    </div>
                  </div>
                </div>
              ),
            )
          ) : (
            /* Empty State */
            <div className="col-span-full py-20 flex flex-col items-center justify-center bg-white rounded-[3rem] shadow-sm border border-dashed border-gray-200">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300">
                <AiOutlineHeart size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-400">
                قائمة المفضلة فارغة حالياً
              </h3>
              <p className="text-gray-300 mt-2">
                ابدأ بإضافة بعض المنتجات التي تحبها!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WishList;
