import React from 'react'
import { useNavigate } from "react-router-dom";


const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  
  const showDetail = () => {
    if (item && item.id) {
      navigate(`/product/${item.id}`);
    } else {
      console.error("Item is undefined or missing 'id'");
    }
  }

 return (
    <div className="card" onClick={showDetail}>
      <img src={item?.img} alt="product"/>
      <div>Conscious choice</div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
}

export default ProductCard;
