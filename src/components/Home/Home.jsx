import "./Home.scss";
import Banner from "./Banner/Banner";

import Category from "./Category/Category.jsx";
import Products from "../Products/Products";
// import SingleProduct from "../SingleProduct/SingleProduct";
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
