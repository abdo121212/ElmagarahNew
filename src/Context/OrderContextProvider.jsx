import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const { token, guestToken } = useAuth();

  const [orders, setOrders] = useState(null);

  async function getOrderList() {
    const authHeader = token
      ? { Authorization: `Bearer ${token}` }
      : guestToken
        ? { guest_token: guestToken }
        : {};

    try {
      const options = {
        url: "https://api.sakank.net/api/profile/list-orders",
        method: "GET",
        headers: {
          ...authHeader,
        },
      };

      let { status, data } = await axios.request(options);

      if (status === 200) {
        setOrders(data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
      } else {
        toast.error("حدث خطأ غير متوقع");
      }
    }
  }

  async function createOrder(data) {
    const toastLoad = toast.loading("جاري ... يرجى الانتظار.");

    const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

    try {
      const response = await axios.post(
        "https://api.sakank.net/api/order/checkout",
        {
          data,
          ...(guestToken && { guest_token: guestToken }),
        },
        {
          headers: {
            ...authHeader,
          },
        },
      );

      if (response.status === 200) {
        toast.success("تمت  عمل الطلب بنجاح !");
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

  return (
    <OrderContext.Provider value={{ getOrderList, orders, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
