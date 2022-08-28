import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../redux/actions/productActions";



const ProductScreen = () => {
 

 
  return (
    <div className="productscreen"> 
      <div className="productscreen__left">
        <div className="left__image">
          <img src="https://bjs.scene7.com/is/image/bjs/23459?$bjs-Zoom$" alt="Product name" />
        </div>
        <div className="left__info">
          <p className="left__name">Cat Food</p>
          <p className="left__name">Price: </p>
          <p className="left__name">Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam voluptate expedita explicabo illo molestias?</p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info"></div>
          <p>
            Price: <span>$14.99</span>
          </p>
          <p>
            Status: <span>In stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button type='button'>Add To</button>
          </p>
      </div>
    </div>
  )
}

export default ProductScreen