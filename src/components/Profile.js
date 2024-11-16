import React, { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Profile = () => {
  const { dataUser, setDataUser } = useContext(AppContext);
  const navigate = useNavigate();
  console.log(!dataUser.username);
  useEffect(() => {
    if (!dataUser.username) {
      navigate("/login");
    }
  }, [dataUser, navigate]);
  const handleLogout = () => {
    Cookies.remove("accessToken");
    setDataUser({});
    navigate("/login");
  };
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="User Avatar"
        />
        <div className="card-body">
          <h5 className="card-title">{dataUser.fullname}</h5>
          <p className="card-text">Email: {dataUser.email}</p>
          <p className="card-text">Địa chỉ: {dataUser.address}</p>
          <p className="card-text">
            Giới tính: {dataUser.sex == 0 ? "Nam" : "Nữ"}
          </p>
          <p className="card-text">
            Quyền: {dataUser.role == 0 ? "Admin" : "Người dùng"}
          </p>
          <button className="btn btn-primary" onClick={handleLogout}>
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
