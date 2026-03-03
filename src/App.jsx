import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home";
import SingIn from "./Components/Pages/SingIn";
import SingUp from "./Components/Pages/SingUp";
import Cart from "./Components/Pages/Cart";
import Done from "./Components/Pages/Done";
import Error from "./Components/Pages/Error";
import NotFound from "./Components/Pages/NotFound";
import ContactUs from "./Components/Pages/ContactUs";
import ProLayout from "./Components/Layout/ProLayout";
import Location from "./Components/Profile/Location";
import Setting from "./Components/Profile/Setting";
import Orders from "./Components/Profile/Orders";
import Payment from "./Components/Profile/Payment";
// import MyAccount from "./Components/Profile/MyAccount";
import Notification from "./Components/Profile/Notification";
import TermsAndConditions from "./Components/Pages/TermsAndConditions";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./Components/ProductDetails";
import WishList from "./Components/Pages/WishList";
import Sidebar from "./Components/Layout/Sidebar";
import Category from "./Components/HeroSection/Category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/SingIn" element={<SingIn />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Done" element={<Done />} />
            <Route path="/Error" element={<Error />} />
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/Terms" element={<TermsAndConditions />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/productDetails/:slug" element={<ProductDetails />} />
            <Route path="/category/:slug" element={<Category />} />
            {/* profile */}
            <Route element={<ProLayout />}>
              <Route path="/location" element={<Location />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/payment" element={<Payment />} />
              {/* <Route path="/account" element={<MyAccount />} /> */}
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
