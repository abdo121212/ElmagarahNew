import { createContext, useState } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

export const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [personalAddress, setPersonalAddress] = useState([]);
  const [cities, setCities] = useState([]);
  const [region, setRegion] = useState([]);
  const [searchAddress, setSearchAddress] = useState([]);
  const { token } = useAuth();

  async function getAddress() {
    try {
      const options = {
        url: "https://api.sakank.net/api/profile/addresses",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      let { status, data } = await axios.request(options);
      if (status === 200) {
        setPersonalAddress(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteAddress(address_id) {
    const removeProduct = toast.loading("Removing Address...  Please wait.");
    try {
      const options = {
        url: `https://api.sakank.net/api/profile/destroy-address`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          address_id,
        },
      };

      let { status } = await axios.request(options);

      if (status === 204) {
        toast.success("Address removed!");

        // 👇 التعديل المهم
        setPersonalAddress((prev) =>
          prev.filter((address) => address.id !== address_id),
        );
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.message || "Failed to remove address. Please try again.",
      );
    } finally {
      toast.dismiss(removeProduct);
    }
  }

  async function getCities() {
    try {
      const options = {
        url: "https://api.sakank.net/api/cities",
        method: "GET",
      };

      let { status, data } = await axios.request(options);
      if (status === 200) {
        setCities(data.data);
      }
    } catch (error) {
      // console.log(error);
    }
  }

  async function getRegion(city_id) {
    try {
      const options = {
        url: `https://api.sakank.net/api/cities/${city_id}/regions`,
        method: "GET",
      };

      let { status, data } = await axios.request(options);
      if (status === 200) {
        setRegion(data.data);
      }
    } catch (error) {
      // console.log(error);
    }
  }
  async function getAddressById(address_id) {
    try {
      const options = {
        url: `https://api.sakank.net/api/profile/get-address/${address_id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { status, data } = await axios.request(options);
      if (status === 200) {
        console.log("done add 1");
        setSearchAddress(data);
      }
    } catch (error) {
      console.log("done add 0");

      // console.log(error);
    }
  }

  return (
    <AddressContext.Provider
      value={{
        getAddress,
        personalAddress,
        deleteAddress,
        getCities,
        cities,
        getRegion,
        region,
        getAddressById,
        searchAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
