import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    ten: "",
    gia: "",
    inpImage: null,
    mota: "",
    idnhom: 1,
  });
  const [listGroup, setListGroup] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.name === "inpImage") {
      return setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && isValid) {
        isValid = false;
        alert("Nhập đầy đủ thông tin trước khi thêm sản phẩm");
      }
    });
    if (!isValid) {
      return;
    }
    const addProduct = async () => {
      const form = new FormData();
      form.append("ten", formData.ten);
      form.append("gia", formData.gia);
      form.append("inpImage", formData.inpImage);
      form.append("mota", formData.mota);
      form.append("idnhom", formData.idnhom);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/addProduct`,
        form
      );
      navigate("/show-product");
    };
    addProduct();
  };
  useEffect(() => {
    const getListGroup = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/getListGroup`
      );
      setListGroup(response.data.groups);
    };
    getListGroup();
  }, []);
  return (
    <div>
      <h2>Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row justify-content-center align-items-center">
          <label htmlFor="inpName" className=" col-3">
            Tên sản phẩm
          </label>
          <input
            type="text"
            name="ten"
            className="form-control col-8 w-50"
            id="inpName"
            onChange={handleChange}
            value={formData.ten}
          />
        </div>
        <div className="mb-3 row justify-content-center align-items-center">
          <label htmlFor="inpPrice" className=" col-3">
            Giá sản phẩm
          </label>
          <input
            type="number"
            className="form-control col-8 w-50"
            name="gia"
            id="inpPrice"
            onChange={handleChange}
            value={formData.gia}
          />
        </div>
        <div className="mb-3 row justify-content-center align-items-center">
          <label htmlFor="inpImage" className=" col-3">
            Hình ảnh
          </label>
          <input
            type="file"
            name="inpImage"
            id="inpImage"
            className="form-control col-8 w-50"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 row justify-content-center align-items-center">
          <label htmlFor="inpDescription" className=" col-3">
            Mô tả sản phẩm
          </label>
          <textarea
            className="form-control col-8 w-50"
            id="inpDescription"
            name="mota"
            onChange={handleChange}
            defaultValue={formData.mota}
          ></textarea>
        </div>
        <div className="mb-3 row justify-content-center align-items-center">
          <label htmlFor="selCategory" className=" col-3">
            Nhóm
          </label>
          <select
            name="idnhom"
            id="selCategory"
            className="form-control col-8 w-50"
            onChange={handleChange}
            value={formData.idnhom}
          >
            {listGroup.map((group) => (
              <option key={group.idnhom} value={group.idnhom}>
                {group.ten}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary w-50">Thêm sản phẩm mới</button>
      </form>
    </div>
  );
};

export default AddProduct;
