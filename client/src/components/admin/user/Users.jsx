import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axiosClient from "../../../axios-client";
import React from "react";

export default function Users ()
{
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() =>
  {
    getUsers();
  }, []);

  const onDeleteClick = async (user) =>
  {
    if (!window.confirm("Are you sure you want to delete this user?"))
    {
      return;
    }
    await axiosClient
      .delete(`users/${user.id}`)
      .then(({ data }) =>
      {
        console.log(data);
      })
      .catch((err) =>
      {
        console.log(err);
      });

    await getUsers();
  };

  const getUsers = async () =>
  {
    setLoading(true);

    await fetch("http://127.0.0.1:8000/api/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(({ data }) =>
      {
        setUsers(data);
      })
      .catch((error) => console.error("Error:", error));

    setLoading(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <h1>Users</h1>
        <Link className="btn-add" to="/admin/users/new">
          Add new
        </Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Create Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {loading && (
            <tbody>
              <tr>
                <td colSpan="5" className="text-center">
                  Loading...
                </td>
              </tr>
            </tbody>
          )}
          {!loading && (
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.created_at}</td>
                  <td>
                    <Link className="btn-edit" to={"/admin/users/" + u.id}>
                      Edit
                    </Link>
                    &nbsp;
                    <button
                      className="btn-delete"
                      onClick={(e) => onDeleteClick(u)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
