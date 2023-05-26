import "./Home.scss";
import Banner from "./Banner/Banner";
import { useEffect } from "react";
import Category from "./Category/Category.jsx";
import Products from "../Products/Products";
// import SingleProduct from "../SingleProduct/SingleProduct";

import { fetchDataFromAPI } from "../../utils/api";
const Home = () => {
  useEffect(()=>{
    getCategories()
  },[])

  const getCategories = ()=>{
    fetchDataFromAPI("/api/categories").then(res=>console.log(res))
  }


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
