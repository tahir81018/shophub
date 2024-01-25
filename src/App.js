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
        <Route exact path="/shophub/" Component={Home} />
        <Route exact path="/shophub/products" Component={Product} />
        <Route exact path="/shophub/products/:id" Component={ProductDetail} />
        <Route exact path="/shophub/cart" Component={Cart} />
        <Route exact path="/shophub/checkout" Component={Checkout} />
        <Route exact path="/shophub/about" Component={About} />
        <Route exact path="/shophub/contact" Component={Contact} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
