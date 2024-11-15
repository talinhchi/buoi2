import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowProduct = () => {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    const getListProduct = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/getListProduct`
      );
      setListProduct(response.data.products);
    };
    getListProduct();
  }, []);
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <Link className="btn btn-primary float-end" to={"/add-product"}>
        Thêm sản phẩm
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên</th>
            <th scope="col">Giá</th>
            <th scope="col">Danh mục</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.map((product, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{product.ten}</td>
              <td>{product.gia}</td>
              <td>{product.tenNhom}</td>
              <td>
                <Link
                  className="btn btn-warning"
                  to={`/edit-product/${product.masp}`}
                >
                  Edit
                </Link>
                <button className="btn btn-danger m-2">Delete</button>
                <Link
                  className="btn btn-primary"
                  to={`/detail-product/${product.masp}`}
                >
                  Xem
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProduct;
