import { AiOutlineHeart } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Pages/Loading";
import { useContext, useState } from "react";
import { WishListContext } from "../../Context/WishListContext";
import { HiOutlineEye } from "react-icons/hi";
import { CgShoppingCart } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";
import { VscDebugRestart } from "react-icons/vsc";
import { CartContext } from "../../Context/CartContext";

const Category = () => {
  const { addProductToWishList } = useContext(WishListContext);
  const { addProductToCart } = useContext(CartContext);
  const { slug } = useParams();

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [selectedAttributes, setSelectedAttributes] = useState({});

  const handleResetFilters = () => {
    setSelectedBrands([]);
    setMinPrice(0);
    setSelectedAttributes({});
  };

  // جلب البيانات الأساسية
  const { data: baseData, isLoading: isLoadingBase } = useQuery({
    queryKey: ["category-base", slug],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.sakank.net/api/categories/${slug}/products`,
      );
      return data;
    },
    onSuccess: (data) => {
      if (data?.filters?.base_price) setMaxPrice(data.filters.base_price);
    },
  });

  // جلب البيانات بعد الفلترة
  const { data: filteredData, isFetching: isFiltering } = useQuery({
    queryKey: [
      "products-filtered",
      slug,
      selectedBrands,
      minPrice,
      maxPrice,
      selectedAttributes,
    ],
    queryFn: async () => {
      const filters = {
        base_price: { min: minPrice, max: maxPrice },
      };

      if (selectedBrands.length > 0) filters.brands = selectedBrands;

      const activeAttributes = Object.keys(selectedAttributes).reduce(
        (acc, key) => {
          if (selectedAttributes[key].length > 0) {
            acc[key] = selectedAttributes[key];
          }
          return acc;
        },
        {},
      );

      if (Object.keys(activeAttributes).length > 0) {
        filters.attributes = activeAttributes;
      }

      const { data } = await axios.post(
        `https://api.sakank.net/api/categories/${slug}/products/filter`,
        { filters },
      );

      return data;
    },
    keepPreviousData: true,
  });

  const handleAttributeToggle = (attrSlug, value) => {
    setSelectedAttributes((prev) => {
      const currentValues = prev[attrSlug] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return { ...prev, [attrSlug]: newValues };
    });
  };

  if (isLoadingBase) return <Loading />;

  const filters = baseData?.filters || {};
  const brands = filters?.brands || [];
  const attributes = filters?.attributes || [];
  const displayProducts = filteredData?.data || [];

  const hasProducts = displayProducts.length > 0;

  const hasActiveFilters =
    selectedBrands.length > 0 ||
    minPrice > 0 ||
    Object.values(selectedAttributes).some((arr) => arr.length > 0);

  return (
    <section className="bg-[#F8F9FB] min-h-screen py-12 font-cairo" dir="rtl">
      <div className="container px-4 md:px-12 mx-auto">
        <div
          className={`grid gap-8 ${
            hasProducts ? "grid-cols-1 lg:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {/* Sidebar */}
          {hasProducts && (
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-50 sticky top-24">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                  <h3 className="text-xl font-bold text-[#000E39]">الفلتر</h3>

                  {hasActiveFilters && (
                    <button
                      onClick={handleResetFilters}
                      className="text-red-500 text-sm flex items-center gap-1 hover:underline"
                    >
                      <VscDebugRestart /> مسح الكل
                    </button>
                  )}
                </div>

                {/* السعر */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4">
                    السعر: {minPrice} ر.س
                  </h4>

                  <input
                    type="range"
                    min={0}
                    max={maxPrice}
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full accent-main cursor-pointer"
                  />
                </div>

                {/* الماركات */}
                {brands.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-4">الماركات</h4>

                    <div className="space-y-2 max-h-40 overflow-y-auto pl-2">
                      {brands.map((brand) => (
                        <label
                          key={brand.slug}
                          className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-xl cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand.slug)}
                            onChange={(e) => {
                              const val = brand.slug;

                              setSelectedBrands((prev) =>
                                e.target.checked
                                  ? [...prev, val]
                                  : prev.filter((b) => b !== val),
                              );
                            }}
                            className="w-4 h-4 accent-main"
                          />

                          <span className="text-gray-700">{brand.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* الخصائص */}
                {attributes.map((attr) => (
                  <div key={attr.slug} className="mb-8">
                    <h4 className="text-lg font-bold mb-4">{attr.name}</h4>

                    <div className="space-y-2">
                      {attr.values.map((v, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-xl cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedAttributes[attr.slug]?.includes(
                              v.value,
                            )}
                            onChange={() =>
                              handleAttributeToggle(attr.slug, v.value)
                            }
                            className="w-4 h-4 accent-main"
                          />

                          <span className="text-gray-700">
                            {v.value} {attr.unit || ""}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          )}

          {/* المنتجات */}
          <div className={hasProducts ? "lg:col-span-3" : ""}>
            {isFiltering && (
              <div className="text-main font-bold mb-4 animate-pulse">
                جاري تحديث النتائج...
              </div>
            )}

            {hasProducts ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {displayProducts.map(
                  ({ images, name, slug, variants, id, base_price }) => (
                    <div
                      key={id}
                      className="group bg-white rounded-[2.5rem] p-4 hover:shadow-xl"
                    >
                      <div className="relative overflow-hidden rounded-3xl bg-gray-50 h-[200px]">
                        <img
                          src={`https://api.sakank.net/storage/${images[0]?.file_path}`}
                          alt={name}
                          className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
                          <button
                            onClick={() => addProductToWishList(slug)}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white"
                          >
                            <AiOutlineHeart size={18} />
                          </button>

                          <Link
                            to={`/productDetails/${slug}`}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-main hover:text-white"
                          >
                            <HiOutlineEye size={18} />
                          </Link>
                        </div>
                      </div>

                      <div className="mt-4 px-2">
                        <h3 className="font-bold text-[#000E39] line-clamp-1">
                          {name}
                        </h3>

                        <div className="my-4 text-xl font-black text-main">
                          {base_price.toFixed(2)}
                          <small className="text-[10px]">ر.س</small>
                        </div>

                        <button
                          onClick={() =>
                            addProductToCart({
                              variant_id: variants[0].id,
                              quantity: 1,
                            })
                          }
                          className="w-full bg-[#F3F6FF] py-3 rounded-xl font-bold hover:bg-main hover:text-white flex items-center justify-center gap-2"
                        >
                          <CgShoppingCart size={18} /> أضف للسلة
                        </button>
                      </div>
                    </div>
                  ),
                )}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-[3rem]">
                <p className="text-gray-400 font-bold">
                  لا توجد منتجات تطابق هذه الفلاتر
                </p>

                <button
                  onClick={handleResetFilters}
                  className="mt-4 text-main underline cursor-pointer"
                >
                  عرض كل المنتجات
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
