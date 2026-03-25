import { IoMdCloudDone } from "react-icons/io";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FiTrash2, FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProductImg from "../../assets/Cart/image.svg";
import RiyalIcon from "../../assets/Cart/Vector (1).svg";
import Address from "./Address";
import ChoosePay from "./ChoosePay";
import { CartContext } from "../../Context/CartContext";
import { useContext, useEffect, useState } from "react";
import { AddressContext } from "../../Context/AddressContext";

const Cart = () => {
  const { getProductFromCart, dataCart, updateQuantity, removeItemFromCart } =
    useContext(CartContext);
  const { getAddress } = useContext(AddressContext);

  // السيت لـ العنوان والدفع
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  // التحقق من القيم (Validation)
  // استخدمنا Boolean لضمان تحويل القيم لحالة منطقية
  const isCheckoutDisabled = !selectedAddress || !selectedPayment;

  useEffect(() => {
    getAddress();
    getProductFromCart();
  }, []);

  const handleCheckout = () => {
    if (isCheckoutDisabled) return;

    console.log("تم إرسال الطلب بنجاح:", {
      addressId: selectedAddress,
      paymentMethod: selectedPayment,
    });
    // هنا تضع دالة إرسال الطلب للـ API
  };

  if (!dataCart || dataCart?.cart?.cart_items?.length === 0) {
    return (
      <section
        className="min-h-[80vh] flex flex-col items-center justify-center p-4 font-cairo"
        dir="rtl"
      >
        <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-dashed border-gray-200 text-center max-w-lg">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-2xl font-black text-[#000E39] mb-4">
            سلتك فارغة حالياً!
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-main text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 duration-300 shadow-lg"
          >
            <HiOutlineArrowRight /> العودة للرئيسية
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F8F9FB] min-h-screen py-10 font-cairo" dir="rtl">
      <div className="container px-4 md:px-12 mx-auto">
        <h1 className="text-3xl font-black text-[#000E39] mb-8 pr-2">
          سلة المشتريات
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* عرض المنتجات */}
            <div className="space-y-4">
              {dataCart?.cart?.cart_items?.map(({ id, quantity, product }) => (
                <div
                  key={id}
                  className="group relative bg-white p-5 rounded-[2rem] shadow-sm hover:shadow-md transition-all border border-transparent hover:border-gray-100"
                >
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => removeItemFromCart(id)}
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-32 h-32 bg-gray-50 rounded-[1.5rem] p-2 flex-shrink-0">
                      <img
                        src={
                          product.image?.length > 0
                            ? `https://api.sakank.net/storage/${product.image[0].file_path}`
                            : ProductImg
                        }
                        alt={product.name}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>
                    <div className="flex-grow text-center sm:text-right">
                      <h3 className="font-bold text-lg text-[#000E39] mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-main bg-main/5 w-fit px-3 py-1 rounded-full text-xs font-bold mx-auto sm:mx-0">
                        <IoMdCloudDone size={16} /> متوفر في المخزن
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-8 border-t sm:border-t-0 sm:border-r border-gray-100 pt-4 sm:pt-0 sm:pr-8 h-full">
                      <div className="text-center">
                        <p className="text-gray-400 text-xs mb-1">السعر</p>
                        <div className="flex items-center gap-1 font-bold text-[#000E39]">
                          <span>{product.price}</span>
                          <img src={RiyalIcon} className="w-3" alt="riyal" />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-400 text-xs mb-1">الكمية</p>
                        <div className="flex items-center justify-center gap-3 bg-gray-100 px-3 py-1 rounded-xl w-fit mx-auto">
                          <button
                            disabled={quantity === 1}
                            onClick={() =>
                              updateQuantity({ id, newQuantity: quantity - 1 })
                            }
                            className="w-7 h-7 flex items-center justify-center rounded-lg bg-white shadow-sm disabled:opacity-50"
                          >
                            -
                          </button>
                          <span className="min-w-[20px] text-center font-bold">
                            {quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity({ id, newQuantity: quantity + 1 })
                            }
                            className="w-7 h-7 flex items-center justify-center rounded-lg bg-white shadow-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-400 text-xs mb-1">المجموع</p>
                        <div className="flex items-center gap-1 font-black text-main">
                          <span>{(quantity * product.price).toFixed(2)}</span>
                          <img src={RiyalIcon} className="w-3" alt="riyal" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* المكونات التي كانت تسبب المشكلة */}
            <div className="space-y-6 pt-4">
              <Address
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
              />
              <ChoosePay
                selectedPayment={selectedPayment}
                setSelectedPayment={setSelectedPayment}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 sticky top-24">
              <h2 className="text-xl font-black text-[#000E39] mb-6 border-b pb-4">
                ملخص الطلب
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-gray-600">
                  <span>المجموع الفرعي</span>
                  <div className="flex items-center gap-1 font-bold">
                    <span>{dataCart?.bill?.total?.toFixed(2)}</span>
                    <img src={RiyalIcon} className="w-3" alt="riyal" />
                  </div>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>رسوم الشحن</span>
                  <span className="text-green-500 font-bold">
                    {dataCart?.bill?.shipping === 0
                      ? "مجاني"
                      : dataCart?.bill?.shipping}
                  </span>
                </div>
                <hr className="border-gray-50" />
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-black text-[#000E39]">
                    الإجمالي الكلي
                  </span>
                  <div className="flex items-center gap-1 text-2xl font-black text-main">
                    <span>{Number(dataCart?.bill?.total).toFixed(2)}</span>
                    <img src={RiyalIcon} className="w-5" alt="riyal" />
                  </div>
                </div>
              </div>

              {/* زر إتمام الدفع */}
              <button
                onClick={handleCheckout}
                disabled={isCheckoutDisabled}
                className={`w-full py-5 rounded-[1.5rem] font-bold text-xl flex items-center justify-center gap-3 transition-all duration-300
                ${
                  isCheckoutDisabled
                    ? "bg-gray-200 cursor-not-allowed text-gray-400"
                    : "bg-main text-white shadow-xl shadow-main/20 hover:scale-[1.02]"
                }`}
              >
                إتمام عملية الدفع
                <HiOutlineArrowRight className="rotate-180" />
              </button>

              {isCheckoutDisabled && (
                <div className="mt-4 flex items-center justify-center gap-2 text-red-500 bg-red-50 py-3 rounded-xl border border-red-100">
                  <FiAlertCircle size={16} />
                  <p className="text-xs font-bold">
                    يرجى اختيار العنوان وطريقة الدفع
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
