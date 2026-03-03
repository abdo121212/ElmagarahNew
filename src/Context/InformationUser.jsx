import { createContext, useState } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";

export const PersonalContext = createContext();

const PersonalIProvider = ({ children }) => {
  const [dataForUser, setDataForUser] = useState({});
  const { token } = useAuth();

  async function getPersonalInfo() {
    try {
      const options = {
        url: `https://api.sakank.net/api/profile/personal-information`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      let { status, data } = await axios.request(options);
      if (status === 200) {
        setDataForUser(data.data);
        console.log("done info 1");
      }
    } catch (error) {}
  }

  // async function deleteAccount() {
  //   try {
  //     const optional = {
  //       url: "https://api.sakank.net/api/profile/settings/delete-account",
  //       method: "DELETE",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };

  //     const { status} = await axios.request(optional);

  //     if(status ===204) {

  //     }
  //   } catch (error) {}
  // }

  return (
    <PersonalContext.Provider value={{ getPersonalInfo, dataForUser }}>
      {children}
    </PersonalContext.Provider>
  );
};

export default PersonalIProvider;
