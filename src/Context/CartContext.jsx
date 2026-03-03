import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [dataCart, setDataCart] = useState(null);
  const { token, guestToken, saveGuestToken } = useAuth();

  async function addProductToCart(variant_id) {
    const toastLoad = toast.loading(
      "جاري إضافة المنتج إلى السلة ... يرجى الانتظار.",
    );

    const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

    try {
      const response = await axios.post(
        "https://api.sakank.net/api/cart/add-item",
        {
          ...variant_id,
          ...(guestToken && { guest_token: guestToken }),
        },
        {
          headers: {
            ...authHeader,
          },
        },
      );

      if (response.status === 200) {
        toast.success("تمت إضافة المنتج إلى سلتك بنجاح!");
        saveGuestToken(response.data?.guest_token);
        console.log("done");
      }
    } catch (error) {
      if (error.response.status === 500) {
        console.log(error);

        toast.warning("هذا المنتج موجود بالفعل في سلتك.");
      }

      console.log(error);
    } finally {
      toast.dismiss(toastLoad);
    }
  }

  async function getProductFromCart() {
    const authHeader = token
      ? { Authorization: `Bearer ${token}` }
      : guestToken
        ? { guest_token: guestToken }
        : {};

    try {
      const options = {
        url: "https://api.sakank.net/api/cart",
        method: "GET",
        headers: {
          ...authHeader,
        },
      };

      let { status, data } = await axios.request(options);
      if (status === 200) {
        setDataCart(data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // toast.error("Network error");
      } else {
        toast.error("حدث خطأ غير متوقع");
      }
    }
  }
  async function updateQuantity({ id, newQuantity }) {
    const authHeader = token
      ? { Authorization: `Bearer ${token}` }
      : guestToken
        ? { guest_token: guestToken }
        : {};

    const toastLoad = toast.loading("جاري تعديل الكمية...");

    try {
      const { status } = await axios.put(
        "https://api.sakank.net/api/cart/update-quantity",
        {
          cart_item_id: id,
          quantity: newQuantity,
        },
        {
          headers: {
            ...authHeader,
          },
        },
      );

      if (status === 200) {
        toast.success("تم تعديل الكمية بنجاح");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "فشل تعديل الكمية");
      } else {
        toast.error("حدث خطأ غير متوقع");
      }
    } finally {
      toast.dismiss(toastLoad);
    }
  }

  async function removeItemFromCart(id) {
    const authHeader = token
      ? { Authorization: `Bearer ${token}` }
      : guestToken
        ? { guest_token: guestToken }
        : {};

    const toastLoad = toast.loading("جاري حذف المنتج...");

    try {
      const { status, data } = await axios.delete(
        "https://api.sakank.net/api/cart/destroy",
        {
          headers: {
            ...authHeader,
          },
          data: {
            guest_token: guestToken ? guestToken : "",
            cart_item_id: id,
          },
        },
      );

      if (status === 200) {
        setDataCart(data); // تحديث الكارت فوراً
        toast.success("تم حذف المنتج بنجاح");
      }
    } catch (error) {
      toast.error("فشل حذف المنتج");
    } finally {
      toast.dismiss(toastLoad);
    }
  }

  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        getProductFromCart,
        dataCart,
        updateQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
