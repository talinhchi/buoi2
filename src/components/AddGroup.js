import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddGroup = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const addGroup = async () => {
      setName(name.trim());
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/addGroup`,
        {
          name: name,
        }
      );
      navigate("/show-group");
    };
    if (!name) {
      alert("Nhập tên nhóm mới trước khi thêm");
    }
    addGroup();
  };
  return (
    <div>
      <h2>Thêm nhóm mới</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row justify-content-center align-items-center">
          <label htmlFor="exampleInputPassword1" className=" col-3">
            Tên nhóm mới
          </label>
          <input
            type="text"
            className="form-control col-8 w-50"
            id="exampleInputPassword1"
            value={name}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary w-50">Thêm nhóm mới</button>
      </form>
    </div>
  );
};

export default AddGroup;
