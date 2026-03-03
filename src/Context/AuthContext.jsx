import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  const [guestToken, setGuestToken] = useState(() => {
    return localStorage.getItem("Guest_Token");
  });

  const saveGuestToken = (newGuest_Token) => {
    localStorage.setItem("Guest_Token", newGuest_Token);

    setGuestToken(newGuest_Token);
  };
  const clearGuest_Token = () => {
    localStorage.removeItem("Guest_Token");
  };

  const saveToken = (newToken) => {
    localStorage.setItem("token", newToken);

    setToken(newToken);
  };

  const clearToken = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        saveToken,
        clearToken,
        clearGuest_Token,
        saveGuestToken,
        guestToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
