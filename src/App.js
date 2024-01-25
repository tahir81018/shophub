import "./App.css";
import "./styles/footer.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import {Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route  path="/shophub/" Component={Home} />
        <Route  path="/shophub/products" Component={Product} />
        <Route  path="/shophub/products/:id" Component={ProductDetail} />
        <Route  path="/shophub/cart" Component={Cart} />
        <Route  path="/shophub/checkout" Component={Checkout} />
        <Route  path="/shophub/about" Component={About} />
        <Route  path="/shophub/contact" Component={Contact} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
