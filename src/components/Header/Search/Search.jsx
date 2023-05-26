import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from '../../../assets/products/earbuds-prod-2.webp'
const Search = ({setShowSearch}) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for Products" />
        <MdClose className="close-btn" onClick={()=>setShowSearch(false)}/>
      </div>
      <div className="search-result-content">
        <div className="search-results">
            <div className="search-result-item">
                <div className="img-container">
                    <img src={prod} alt="" />
                </div>
                <div className="product-details">
                    <span className="name">product name</span>
                    <span className="description">product name</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
