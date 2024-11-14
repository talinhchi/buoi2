import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditGroup = () => {
  const [name, setName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    const getGroup = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/getGroupById/${id}`
      );
      if (!response.data.group) {
        navigate("/show-group");
      }
      setName(response.data.group.ten);
    };
    getGroup();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const editGroup = async () => {
      setName(name.trim());
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/editGroup`,
        {
          name: name,
          idnhom: id,
        }
      );
      navigate("/show-group");
    };
    if (!name) {
      alert("Nhập tên nhóm mới trước khi thêm");
    }
    editGroup();
  };
  return (
    <div>
      <h2>Chỉnh sửa nhóm</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row justify-content-center align-items-center">
          <label htmlFor="exampleInputPassword1" className=" col-3">
            Tên nhóm
          </label>
          <input
            type="text"
            className="form-control col-8 w-50"
            id="exampleInputPassword1"
            value={name}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary w-50">Cập nhật</button>
      </form>
    </div>
  );
};

export default EditGroup;
