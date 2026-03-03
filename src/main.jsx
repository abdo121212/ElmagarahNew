import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./Context/AuthContext";
import WhishListProvider from "./Context/WishListContext";
import { ToastContainer } from "react-toastify";
import AddressProvider from "./Context/AddressContext";
import PersonalIProvider from "./Context/InformationUser";
import CartContextProvider from "./Context/CartContext";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <WhishListProvider>
          <PersonalIProvider>
            <AddressProvider>
              <CartContextProvider>
                <App />
                     <ToastContainer />
              </CartContextProvider>
            </AddressProvider>
          </PersonalIProvider>
     
        </WhishListProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>,
);
