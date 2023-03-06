import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./layout/Footer";
import About from "./pages/About";
import AuthPage from "./pages/AuthPage";
import Checkout from './pages/Checkout';
import ClientToken from "./pages/ClientToken";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PaymentForm from "./pages/Payment";
import Product from "./pages/Product";
import ProfilePage from "./pages/ProfilePage";
import SingleProduct from "./pages/SingleProduct";

function App() {
  
  return (
    <>
    <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/product/:productId" element={<SingleProduct/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/payment" element={<PaymentForm/>}/>
      <Route path="/clientToken" element={<ClientToken/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<AuthPage/>}/> 
  </Routes>
  <Footer/>
  </>
    
  
  );
}

export default App;
