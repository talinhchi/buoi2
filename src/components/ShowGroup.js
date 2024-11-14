import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowGroup = () => {
  const [listGroup, setListGroup] = useState([]);
  const handleDeleteGroup = (id) => {
    const isDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa nhóm này không?"
    );
    if (!isDelete) {
      return;
    }
    const response = axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/deleteGroup/${id}`)
      .then((res) => {
        console.log(res);
        setListGroup(listGroup.filter((group) => group.idnhom !== id));
      });
  };
  useEffect(() => {
    const getListGroup = () => {
      const response = axios
        .get(`${process.env.REACT_APP_API_URL}/api/v1/getListGroup`)
        .then((res) => {
          setListGroup(res.data.groups);
        });
    };
    getListGroup();
  }, []);
  return (
    <div>
      <h2>Danh sách nhóm</h2>
      <Link className="float-end btn btn-primary" to="/add-group">
        Thêm nhóm
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listGroup.map((group, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{group.ten}</td>
              <td>
                <Link
                  className="btn btn-warning"
                  to={`/edit-group/${group.idnhom}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => handleDeleteGroup(group.idnhom)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowGroup;
