import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/getDetailProduct/${id}`
      );
      setProduct(response.data.product);
    };
    getProduct();
  }, []);
  return (
    <div className="card m-auto" style={{ width: "18rem" }}>
      <img
        src={`${process.env.REACT_APP_API_URL}/uploads/${product.hinhanh}`}
        className="card-img-top"
        alt="Product"
      />
      <div className="card-body">
        <h5 className="card-title">{product.ten}</h5>
        <p className="card-text">{product.mota}</p>
        <p className="card-text">{product.tenNhom}</p>
        <b>Giá: {product.gia}</b>
      </div>
    </div>
  );
};

export default DetailProduct;
