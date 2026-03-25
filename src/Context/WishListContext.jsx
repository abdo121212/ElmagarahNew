import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

export const WishListContext = createContext();

export default function WhishListProvider({ children }) {
  const [dataFromWishList, setDataFromWishList] = useState([]);
  const { token } = useAuth();

  async function deleteProductFromWishlist(product_slug) {
    const toastId = toast.loading("جاري حذف المنتج من المفضلة...");

    try {
      const options = {
        url: `https://api.sakank.net/api/wishlist/destroy`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
        data: { product_slug },
      };

      const response = await axios.request(options);

      // ملحوظة: تأكد أن الـ API فعلاً بيرجع 204، لو بيرجع 200 غير الرقم
      if (response.status === 204 || response.status === 200) {
        toast.update(toastId, {
          render: "تم حذف المنتج بنجاح!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        await getProductFromWishlist();
      }
    } catch (error) {
      toast.update(toastId, {
        render: "فشل الحذف، حاول مرة أخرى.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  }

  async function addProductToWishList(product_slug) {
    const toastId = toast.loading("جاري إضافة المنتج للمفضلة...");

    try {
      const options = {
        url: "https://api.sakank.net/api/wishlist/create",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          product_slug,
        },
      };

      const response = await axios.request(options);

      if (response.status === 201 || response.status === 200) {
        // بدلاً من Success جديد، بنحدث الـ Loading الحالي
        await getProductFromWishlist();
        toast.update(toastId, {
          render: "تم إضافة المنتج بنجاح! ❤️",
          type: "success",
          isLoading: false,
          autoClose: 3000, // يقفل تلقائي بعد 3 ثواني
        });
      }
    } catch (error) {
      if (error.response?.status === 422) {
        toast.update(toastId, {
          render: "المنتج موجود بالفعل في مفضلتك!",
          type: "warning",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        toast.update(toastId, {
          render:
            error.response?.data?.message || "فشل إضافة المنتج، حاول مرة أخرى.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    }
  }
  async function getProductFromWishlist() {
    try {
      const options = {
        url: "https://api.sakank.net/api/wishlist",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      };
      let { status, data } = await axios.request(options);
      if (status === 200) {
        setDataFromWishList(data.wishlist);
      }
    } catch (error) {}
  }

  return (
    <WishListContext.Provider
      value={{
        addProductToWishList,
        deleteProductFromWishlist,
        getProductFromWishlist,
        dataFromWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}
