import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";
import SearchBar from "./Components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./Pages/Home"));
const Collection = lazy(() => import("./Pages/Collection"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Product = lazy(() => import("./Pages/Product"));
const Cart = lazy(() => import("./Pages/Cart"));
const Login = lazy(() => import("./Pages/Login"));
const PlaceOrder = lazy(() => import("./Pages/PlaceOrder"));
const Orders = lazy(() => import("./Pages/Orders"));
const Delivery = lazy(() => import("./Pages/Delivery"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("./Pages/RefundPolicy"));
const PaymentPolicy = lazy(() => import("./Pages/PaymentPolicy"));
const OrderSuccess = lazy(() => import("./Pages/OrderSuccess"));
const OrderTracking = lazy(() => import("./Pages/OrderTracking"));

const App = () => {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
        />

        <Navbar />

        <main>
          <SearchBar />
          <ScrollTop />

          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/place-order" element={<PlaceOrder />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/payment-policy" element={<PaymentPolicy />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/track-order/:orderId" element={<OrderTracking />} />
            </Routes>
          </Suspense>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default App;
