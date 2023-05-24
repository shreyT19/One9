import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";

function App() {
  return (
    <div>
      <BrowserRouter> 
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/category/:id" element={<Category />}></Route>
            <Route path="/product/:id" element={<SingleProduct />}></Route>
          </Routes>
          <Footer />
        </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
