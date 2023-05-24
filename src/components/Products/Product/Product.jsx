import "./Product.scss";

import prod1 from '../../../assets/products/earbuds-prod-1.webp'

const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod1} alt="" />
        </div>
        <div className="product-details">
            <div className="name">Product Name</div>
            <div className="price">&#8377;499</div>
        </div>
    </div>;
};

export default Product;
