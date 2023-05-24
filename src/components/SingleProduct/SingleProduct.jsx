import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import prod from "../../assets/products/earbuds-prod-1.webp";
const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="" />
          </div>
          <div className="right">
            <div className="product-name">
              boAt Iris | Round Dial Smart Watch with 1.39" AMOLED Display,
              Multiple Watch Faces
            </div>
            <div className="price">¥4499</div>
            <div className="prod-desc">
              Shoutout to all who see the glass half full. It is time to switch
              over to the bright side. Watch Iris will get you through the week
              with a 7-day battery backup. Thrive through your success with all
              the important notifications on your smartwatch. The timeless look
              comes with multiple watch faces and strap options to go with all
              versions of your style. Nail every sport you play with 8 active
              sports modes tracking your performance. Don't worry about sweat
              and water, it is IP68. Being healthy is an imperative when your
              watch has a heart rate monitor, oxygen level monitor, sedentary
              reminder tracking your health 24x7. Pump up your style!
            </div>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-btn">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider"/>
              <div className="info-item">
                <span className="text-bold">
                  Category:
                  <span> Headphones</span>
                </span>

                <span className="text-bold">
                  Share: 
                  <span className="social-icons">
                    <FaFacebookF size={16}/>
                    <FaInstagram size={16}/>
                    <FaLinkedinIn size={16}/>
                    <FaTwitter size={16}/>
                    <FaPinterest size={16}/>
                  </span>
                </span>

              </div>
          </div>
        </div>
        <RelatedProducts/>
      </div>
    </div>
  );
};

export default SingleProduct;
