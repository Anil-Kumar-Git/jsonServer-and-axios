import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./DataTable";
import DataForm from "./DataForm";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState(true);

  const [inputData, setInputData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    role: "",
    company: "",
    state: "",
    city: "",
  });

  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const getUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    const result = res.data;
    setUsers(result);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkInputValue = !Object.values(inputData).every(
      (res) => res === ""
    );

    if (checkInputValue) {
      await axios.post("http://localhost:3000/users", inputData);
      const emptyData = {
        firstName: "",
        lastName: "",
        role: "",
        company: "",
        state: "",
        city: "",
      };

      setInputData(emptyData);
      getUsers();
      navigate("/");
    }
  };

  // const getUserId = async (id) => {
  //   const idUser = await axios.get(`http://localhost:8000/users/${id}`);
  //   const idResult = idUser.data
  //   console.log(idResult)
  // }

  const deleteHandle = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    getUsers();
  };

  const handleUpdate = async (e) => {
    const newData = {
      id: inputData.id,
      firstName: inputData.firstName,
      lastName: inputData.lastName,
      role: inputData.role,
      company: inputData.company,
      state: inputData.state,
      city: inputData.city,
    };

    e.preventDefault();
    const checkInputValue = !Object.values(inputData).every(
      (res) => res === ""
    );
    if (checkInputValue) {
      await axios.put(`http://localhost:3000/users/${inputData.id}`, newData);
      const emptyData = {
        id: "",
        firstName: "",
        lastName: "",
        role: "",
        company: "",
        state: "",
        city: "",
      };
      setInputData(emptyData);

      getUsers();
      navigate("/");
      setButton(true)
    }
  };

  const editHandle = async (e, data) => {
    e.preventDefault();
    setInputData(data);
    setButton(false);
    navigate("/get");
  };

  return (
    <div>
     
      <Routes>
        <Route
          path="/get"
          element={
            <DataForm
              buttonType={button}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              inputData={inputData}
              handleUpdate={handleUpdate}
            />
          }
        />
        <Route
          path="/"
          element={
            <DataTable
              user={users}
              deletehandle={deleteHandle}
              edithandle={editHandle}
              handleUpdate={handleUpdate}
            />
          }
        />
      </Routes>
    </div>
  );
}
